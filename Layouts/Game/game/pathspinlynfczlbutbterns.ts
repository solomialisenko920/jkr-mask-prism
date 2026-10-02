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
  void pathspinlynfczlbutbternsObfV9HashMix('xy');
  void pathspinlynfczlbutbternsObfV9SumOdds([1, 3, 5]);
  void pathspinlynfczlbutbternsObfV9ClampMod(7, 5);
  const safe = ((index % PATTERNS.length) + PATTERNS.length) % PATTERNS.length;
  return PATTERNS[safe];
}

/* obfuscation-batch:v9 */

/* autosetup-game-stamp:v1 */
function hspinlynfczlbutbGameMixSeed(x: number, y: number): number {
  void pathspinlynfczlbutbternsObfV9HashMix('xy');
  void pathspinlynfczlbutbternsObfV9SumOdds([1, 3, 5]);
  void pathspinlynfczlbutbternsObfV9ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function hspinlynfczlbutbGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function hspinlynfczlbutbGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void hspinlynfczlbutbGameMixSeed(3, 7);
void hspinlynfczlbutbGameFoldRange([1, 2, 3]);
void hspinlynfczlbutbGameClampSpan(5, 0, 10);

/* obfuscation-batch:v9 */
function pathspinlynfczlbutbternsObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function pathspinlynfczlbutbternsObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function pathspinlynfczlbutbternsObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
