/* autosetup-decoy:v1 */

export function hspinlynfczlbutbloam01Touch(seed: number): number {
  void hspinlynfczlbutbloam01ObfV9HashMix('xy');
  void hspinlynfczlbutbloam01ObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbloam01ObfV9ClampMod(7, 5);
  let x = (seed ^ 65) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;
}
/* obfuscation-batch:v9 */
function hspinlynfczlbutbloam01ObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function hspinlynfczlbutbloam01ObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function hspinlynfczlbutbloam01ObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
