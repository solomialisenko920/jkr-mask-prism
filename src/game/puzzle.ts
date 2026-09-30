import {
  LAYERS,
  MAX_START_DISTANCE,
  MIN_START_DISTANCE,
  SEGMENTS,
} from '../constants/config';

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
  return rotations.reduce((sum, r) => sum + ((SEGMENTS - r) % SEGMENTS), 0);
}

export function isLayerMatched(rotation: number): boolean {
  return rotation % SEGMENTS === 0;
}

export function matchedFlags(rotations: Rotations): boolean[] {
  return rotations.map(isLayerMatched);
}

export function isSolved(rotations: Rotations): boolean {
  return rotations.every(isLayerMatched);
}

/** Offset a layer pattern by its current rotation (for rendering). */
export function rotateLayer(layer: number[], rotation: number): number[] {
  const n = layer.length;
  const shift = ((rotation % n) + n) % n;
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    out.push(layer[(i - shift + n) % n]);
  }
  return out;
}

export function scoreRound(won: boolean, movesLeft: number, checks: number): number {
  if (!won) {
    return 0;
  }
  return Math.max(100, 500 + movesLeft * 120 - checks * 80);
}

export function starsFor(won: boolean, movesLeft: number): number {
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
  for (let step = 0; step < rotations.length; step++) {
    const i = (from + step) % rotations.length;
    if (!isLayerMatched(rotations[i])) {
      return i;
    }
  }
  return -1;
}
