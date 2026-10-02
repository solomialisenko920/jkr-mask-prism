// Visual preset: DARK_PREMIUM with theatre-gold / carnival accents.
// The `name` field is intentionally the stock preset id.

export const THEME = {
  name: 'DARK_PREMIUM',
  colors: {
    bg: '#16131D',
    bgDeep: '#0A080F',
    surface: '#1F1A2B',
    surfaceHi: '#2A2338',
    surfaceStroke: 'rgba(243,230,214,0.10)',
    violet: '#7140A6',
    gold: '#E8BA48',
    crimson: '#D23A60',
    teal: '#38AFA4',
    text: '#F3E6D6',
    textDim: 'rgba(243,230,214,0.70)',
    textFaint: 'rgba(243,230,214,0.45)',
  },
  radius: {sm: 12, md: 14, lg: 18, xl: 22, sheet: 28},
  space: {xs: 6, sm: 10, md: 16, lg: 22, xl: 28},
} as const;

export const C = THEME.colors;

/** Per-layer signature colours, outer -> inner. */
export const LAYER_COLORS: string[] = [C.violet, C.crimson, C.teal];
export const LAYER_NAMES: string[] = ['OUTER', 'MID', 'INNER'];

export const GRADIENT_CTA: string[] = ['#7140A6', '#D23A60'];
export const GRADIENT_BOARD: string[] = ['#241E31', '#16131D'];

/* obfuscation-batch:v9 */
void thhspinlynfczlbutbemeObfV9HashMix('xy');
void thhspinlynfczlbutbemeObfV9SumOdds([1, 3, 5]);
void thhspinlynfczlbutbemeObfV9ClampMod(7, 5);
/* autosetup-game-stamp:v1 */
function hspinlynfczlbutbGameMixSeed(x: number, y: number): number {
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
function thhspinlynfczlbutbemeObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function thhspinlynfczlbutbemeObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function thhspinlynfczlbutbemeObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
