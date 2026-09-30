import {SEGMENTS} from '../constants/config';

/** All mask geometry is authored in a 0..100 viewBox with centre at 50,50. */
export const VIEW = 100;
export const CX = 50;
export const CY = 50;

export type RingSpec = {radius: number; width: number; markerR: number};

export const BOARD_RINGS: RingSpec[] = [
  {radius: 42, width: 11, markerR: 2.4},
  {radius: 29, width: 10, markerR: 2.1},
  {radius: 17, width: 9, markerR: 1.9},
];

export const MINI_RINGS: RingSpec[] = [
  {radius: 34, width: 9, markerR: 2.2},
  {radius: 24, width: 8, markerR: 2.0},
  {radius: 14, width: 7, markerR: 1.8},
];

const STEP = 360 / SEGMENTS;

function polar(radius: number, deg: number): {x: number; y: number} {
  const rad = ((deg - 90) * Math.PI) / 180;
  return {x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad)};
}

/** SVG path for one 45 deg arc of a ring, with a small visual gap. */
export function arcPath(radius: number, index: number, gapDeg = 5): string {
  const start = index * STEP + gapDeg / 2;
  const end = (index + 1) * STEP - gapDeg / 2;
  const a = polar(radius, start);
  const b = polar(radius, end);
  return `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} A ${radius} ${radius} 0 0 1 ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
}

/** Centre point of a segment, used to place inlaid markers. */
export function segmentCentre(radius: number, index: number): {x: number; y: number} {
  return polar(radius, index * STEP + STEP / 2);
}

/** Straight ray from the mask centre, used for the win celebration. */
export function rayPoints(index: number, inner: number, outer: number) {
  const a = polar(inner, index * STEP);
  const b = polar(outer, index * STEP);
  return {x1: a.x, y1: a.y, x2: b.x, y2: b.y};
}
