// Six mask patterns. Each pattern has three layers (outer -> inner),
// each layer is 8 segments of 45 deg with a value of:
//   0 = empty groove, 1 = engraved line, 2 = inlaid marker
// At rotation 0 on every layer the engraving lines up into one face.

export type Layer = number[];

export type PatternDef = {
  id: number;
  label: string;
  layers: Layer[];
};

export const PATTERNS: PatternDef[] = [
  {
    id: 1,
    label: 'HARLEQUIN',
    layers: [
      [2, 1, 0, 1, 2, 1, 0, 1],
      [1, 2, 1, 0, 1, 2, 1, 0],
      [2, 0, 1, 1, 2, 0, 1, 1],
    ],
  },
  {
    id: 2,
    label: 'COLOMBINA',
    layers: [
      [1, 1, 2, 0, 0, 2, 1, 1],
      [0, 2, 1, 1, 2, 0, 1, 1],
      [1, 1, 0, 2, 1, 1, 0, 2],
    ],
  },
  {
    id: 3,
    label: 'BAUTA',
    layers: [
      [2, 0, 2, 0, 2, 0, 2, 0],
      [1, 1, 0, 1, 1, 0, 2, 1],
      [0, 1, 2, 1, 0, 1, 2, 1],
    ],
  },
  {
    id: 4,
    label: 'MEDICO',
    layers: [
      [1, 2, 1, 1, 0, 1, 2, 1],
      [2, 1, 0, 2, 1, 0, 1, 1],
      [1, 0, 1, 2, 2, 1, 0, 1],
    ],
  },
  {
    id: 5,
    label: 'VOLTO',
    layers: [
      [0, 1, 1, 2, 1, 1, 0, 2],
      [1, 0, 2, 1, 1, 2, 0, 1],
      [2, 2, 1, 0, 1, 0, 1, 2],
    ],
  },
  {
    id: 6,
    label: 'ZANNI',
    layers: [
      [2, 1, 1, 0, 2, 1, 1, 0],
      [1, 1, 2, 2, 0, 1, 1, 0],
      [0, 2, 1, 1, 1, 2, 0, 1],
    ],
  },
];

export function getPattern(index: number): PatternDef {
  const safe = ((index % PATTERNS.length) + PATTERNS.length) % PATTERNS.length;
  return PATTERNS[safe];
}
