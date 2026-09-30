import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  CELEBRATION_MS,
  IDLE_RESULT_MS,
  LAYERS,
  LOSE_FADE_MS,
  MAX_CHECKS,
  MAX_UNDO,
  MOVES_TOTAL,
  SEGMENTS,
  SPIN_ANIM_MS,
} from '../constants/config';
import {
  generateRotations,
  isSolved,
  matchedFlags,
  nextUnmatchedLayer,
  scoreRound,
  starsFor,
} from '../game/puzzle';

export type RoundResult = {
  won: boolean;
  reason: 'solved' | 'nomoves' | 'checks' | 'timeup';
  movesLeft: number;
  checks: number;
  score: number;
  stars: number;
  angles: number[];
};

export type PuzzleStatus = 'idle' | 'spinning' | 'win' | 'lose';

type Options = {
  onFinish: (result: RoundResult) => void;
};

/**
 * Whole round lifecycle for the three-layer mask.
 * Every value a timer or animation callback reads lives in a ref, so a stale
 * closure can never resolve the round with the wrong numbers.
 */
export function useMaskPuzzle({onFinish}: Options) {
  const [starts] = useState<number[]>(() => generateRotations());
  const [turns, setTurns] = useState<number[]>(() => new Array(LAYERS).fill(0));
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [moves, setMoves] = useState<number>(MOVES_TOTAL);
  const [checks, setChecks] = useState<number>(0);
  const [undoLeft, setUndoLeft] = useState<number>(MAX_UNDO);
  const [status, setStatus] = useState<PuzzleStatus>('idle');
  const [shakeTick, setShakeTick] = useState<number>(0);

  const historyRef = useRef<number[]>([]);
  const busyRef = useRef<boolean>(false);
  const finishedRef = useRef<boolean>(false);
  const turnsRef = useRef<number[]>(turns);
  const movesRef = useRef<number>(MOVES_TOTAL);
  const checksRef = useRef<number>(0);
  const onFinishRef = useRef(onFinish);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  onFinishRef.current = onFinish;
  turnsRef.current = turns;
  movesRef.current = moves;
  checksRef.current = checks;

  const rotations = useMemo(
    () => starts.map((s, i) => (s + turns[i]) % SEGMENTS),
    [starts, turns],
  );
  const angles = useMemo(
    () => starts.map((s, i) => s + turns[i]),
    [starts, turns],
  );
  const matched = useMemo(() => matchedFlags(rotations), [rotations]);
  const matchedCount = matched.filter(Boolean).length;

  const later = useCallback((fn: () => void, ms: number) => {
    const t = setTimeout(fn, ms);
    timersRef.current.push(t);
    return t;
  }, []);

  const finish = useCallback(
    (won: boolean, reason: RoundResult['reason']) => {
      if (finishedRef.current) {
        return;
      }
      finishedRef.current = true;
      const movesLeft = movesRef.current;
      const usedChecks = checksRef.current;
      const currentAngles = starts.map((s, i) => s + turnsRef.current[i]);
      setStatus(won ? 'win' : 'lose');
      later(
        () =>
          onFinishRef.current({
            won,
            reason,
            movesLeft,
            checks: usedChecks,
            score: scoreRound(won, movesLeft, usedChecks),
            stars: starsFor(won, movesLeft),
            angles: currentAngles,
          }),
        won ? CELEBRATION_MS : LOSE_FADE_MS,
      );
    },
    [later, starts],
  );

  // Passive backstop: armed once on mount and deliberately never re-armed,
  // so a runner that only watches the board still gets a result frame.
  useEffect(() => {
    const t = setTimeout(() => finish(false, 'timeup'), IDLE_RESULT_MS);
    return () => clearTimeout(t);
  }, [finish]);

  useEffect(() => {
    const timers = timersRef;
    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, []);

  const selectLayer = useCallback(
    (index: number) => {
      if (finishedRef.current || busyRef.current) {
        return;
      }
      setActiveLayer(index);
    },
    [],
  );

  const spin = useCallback(() => {
    if (finishedRef.current || busyRef.current) {
      return;
    }
    busyRef.current = true;
    setStatus('spinning');

    const layer = activeLayer;
    const nextTurns = turnsRef.current.slice();
    nextTurns[layer] += 1;
    historyRef.current.push(layer);
    turnsRef.current = nextTurns;
    setTurns(nextTurns);

    const nextMoves = movesRef.current - 1;
    movesRef.current = nextMoves;
    setMoves(nextMoves);

    const nextRotations = starts.map((s, i) => (s + nextTurns[i]) % SEGMENTS);

    later(() => {
      busyRef.current = false;
      if (finishedRef.current) {
        return;
      }
      if (isSolved(nextRotations)) {
        finish(true, 'solved');
        return;
      }
      setStatus('idle');
      // Quality-of-life: once a ring locks in, hand the spin to the next one
      // that still needs work instead of un-solving the finished ring.
      if (nextRotations[layer] % SEGMENTS === 0) {
        const nextLayer = nextUnmatchedLayer(nextRotations, layer);
        if (nextLayer >= 0) {
          setActiveLayer(nextLayer);
        }
      }
      if (nextMoves <= 0) {
        finish(false, 'nomoves');
      }
    }, SPIN_ANIM_MS);
  }, [activeLayer, finish, later, starts]);

  const undo = useCallback(() => {
    if (finishedRef.current || busyRef.current) {
      return;
    }
    if (undoLeft <= 0 || historyRef.current.length === 0) {
      return;
    }
    const layer = historyRef.current.pop() as number;
    const nextTurns = turnsRef.current.slice();
    nextTurns[layer] = Math.max(0, nextTurns[layer] - 1);
    turnsRef.current = nextTurns;
    setTurns(nextTurns);
    const nextMoves = Math.min(MOVES_TOTAL, movesRef.current + 1);
    movesRef.current = nextMoves;
    setMoves(nextMoves);
    setUndoLeft(u => u - 1);
    setActiveLayer(layer);
  }, [undoLeft]);

  const check = useCallback(() => {
    if (finishedRef.current || busyRef.current) {
      return;
    }
    const current = starts.map((s, i) => (s + turnsRef.current[i]) % SEGMENTS);
    if (isSolved(current)) {
      finish(true, 'solved');
      return;
    }
    const nextChecks = checksRef.current + 1;
    checksRef.current = nextChecks;
    setChecks(nextChecks);
    setShakeTick(t => t + 1);
    if (nextChecks >= MAX_CHECKS) {
      finish(false, 'checks');
    }
  }, [finish, starts]);

  return {
    angles,
    rotations,
    matched,
    matchedCount,
    activeLayer,
    moves,
    checks,
    undoLeft,
    status,
    shakeTick,
    canUndo: undoLeft > 0 && historyRef.current.length > 0,
    selectLayer,
    spin,
    undo,
    check,
  };
}
