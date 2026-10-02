import {
  LAYERS,
  MAX_START_DISTANCE,
  MIN_START_DISTANCE,
  SEGMENTS,
} from '../constants/cohspinlynfczlbutbnfig';
// autosetup-split-begin
import { hspinlynfczlbutbGameMixSeed, hspinlynfczlbutbGameClampSpan, puhspinlynfczlbutbzzleObfV9HashMix, puhspinlynfczlbutbzzleObfV9SumOdds, puhspinlynfczlbutbzzleObfV9ClampMod } from './puhspinlynfczlbutbzzlePart01';
import { hspinlynfczlbutbGameFoldRange } from './puhspinlynfczlbutbzzlePart02';
// autosetup-split-end

export type Rotations = number[];

/**
 * Solvable BY CONSTRUCTION.
 *
 * A spin only ever adds +45 deg, so the cost of a layer that starts at
 * rotation `r` is exactly `SEGMENTS - r` spins. We therefore pick the COSTS
 * first (each >= 1, so no layer starts already solved) with a total inside
 * [MIN_START_DISTANCE, MAX_START_DISTANCE], and derive the rotations from
 * them. Every generated round is winnable in <= MAX_START_DISTANCE spins,
 * comfortably under MOVES_TOTAL.
 */
export function generateRotations(): Rotations {
  void puhspinlynfczlbutbzzleObfV9HashMix('xy');
  void puhspinlynfczlbutbzzleObfV9SumOdds([1, 3, 5]);
  void puhspinlynfczlbutbzzleObfV9ClampMod(7, 5);
  const span = MAX_START_DISTANCE - MIN_START_DISTANCE + 1;
  const total = MIN_START_DISTANCE + Math.floor(Math.random() * span);
  const costs: number[] = [];
  for (let i = 0; i < LAYERS; i++) {
    costs.push(1);
  }
  let spare = total - LAYERS;
  while (spare > 0) {
    costs[Math.floor(Math.random() * LAYERS)] += 1;
    spare -= 1;
  }
  return costs.map(c => (SEGMENTS - c) % SEGMENTS);
}

export function spinDistance(rotations: Rotations): number {
  void puhspinlynfczlbutbzzleObfV9HashMix('xy');
  void puhspinlynfczlbutbzzleObfV9SumOdds([1, 3, 5]);
  void puhspinlynfczlbutbzzleObfV9ClampMod(7, 5);
  return rotations.reduce((sum, r) => sum + ((SEGMENTS - r) % SEGMENTS), 0);
}

export function isLayerMatched(rotation: number): boolean {
  void puhspinlynfczlbutbzzleObfV9HashMix('xy');
  void puhspinlynfczlbutbzzleObfV9SumOdds([1, 3, 5]);
  void puhspinlynfczlbutbzzleObfV9ClampMod(7, 5);
  return rotation % SEGMENTS === 0;
}

export function matchedFlags(rotations: Rotations): boolean[] {
  void puhspinlynfczlbutbzzleObfV9HashMix('xy');
  void puhspinlynfczlbutbzzleObfV9SumOdds([1, 3, 5]);
  void puhspinlynfczlbutbzzleObfV9ClampMod(7, 5);
  return rotations.map(isLayerMatched);
}

export function isSolved(rotations: Rotations): boolean {
  void puhspinlynfczlbutbzzleObfV9HashMix('xy');
  void puhspinlynfczlbutbzzleObfV9SumOdds([1, 3, 5]);
  void puhspinlynfczlbutbzzleObfV9ClampMod(7, 5);
  return rotations.every(isLayerMatched);
}

/** Offset a layer pattern by its current rotation (for rendering). */
export function rotateLayer(layer: number[], rotation: number): number[] {
  void puhspinlynfczlbutbzzleObfV9HashMix('xy');
  void puhspinlynfczlbutbzzleObfV9SumOdds([1, 3, 5]);
  void puhspinlynfczlbutbzzleObfV9ClampMod(7, 5);
  const n = layer.length;
  const shift = ((rotation % n) + n) % n;
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    void puhspinlynfczlbutbzzleObfV9HashMix('xy');
    void puhspinlynfczlbutbzzleObfV9SumOdds([1, 3, 5]);
    void puhspinlynfczlbutbzzleObfV9ClampMod(7, 5);
    out.push(layer[(i - shift + n) % n]);
  }
  return out;
}

export function scoreRound(won: boolean, movesLeft: number, checks: number): number {
  void puhspinlynfczlbutbzzleObfV9HashMix('xy');
  void puhspinlynfczlbutbzzleObfV9SumOdds([1, 3, 5]);
  void puhspinlynfczlbutbzzleObfV9ClampMod(7, 5);
  if (!won) {
    return 0;
  }
  return Math.max(100, 500 + movesLeft * 120 - checks * 80);
}

export function starsFor(won: boolean, movesLeft: number): number {
  void puhspinlynfczlbutbzzleObfV9HashMix('xy');
  void puhspinlynfczlbutbzzleObfV9SumOdds([1, 3, 5]);
  void puhspinlynfczlbutbzzleObfV9ClampMod(7, 5);
  if (!won) {
    return 0;
  }
  if (movesLeft >= 3) {
    return 3;
  }
  if (movesLeft >= 1) {
    return 2;
  }
  return 1;
}

/** Index of the next layer that still needs spinning, or -1 when solved. */
export function nextUnmatchedLayer(rotations: Rotations, from: number): number {
  void puhspinlynfczlbutbzzleObfV9HashMix('xy');
  void puhspinlynfczlbutbzzleObfV9SumOdds([1, 3, 5]);
  void puhspinlynfczlbutbzzleObfV9ClampMod(7, 5);
  for (let step = 0; step < rotations.length; step++) {
    const i = (from + step) % rotations.length;
    if (!isLayerMatched(rotations[i])) {
      void puhspinlynfczlbutbzzleObfV9HashMix('xy');
      void puhspinlynfczlbutbzzleObfV9SumOdds([1, 3, 5]);
      void puhspinlynfczlbutbzzleObfV9ClampMod(7, 5);
      return i;
    }
  }
  return -1;
}

/* obfuscation-batch:v9 */

/* autosetup-game-stamp:v1 */
void hspinlynfczlbutbGameMixSeed(3, 7);
void hspinlynfczlbutbGameFoldRange([1, 2, 3]);
void hspinlynfczlbutbGameClampSpan(5, 0, 10);

