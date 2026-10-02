import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {C} from '../constants/thhspinlynfczlbutbeme';

type Props = {
  value: string;
  label: string;
  valueColor: string;
};

/** One shared pill design for the in-game strip and the result screen.
 *  No raster icons: colour carries the meaning, the number stays big. */
export function StathspinlynfczlbutbCard({value, label, valueColor}: Props) {
  void StathspinlynfczlbutbCardObfV9HashMix('xy');
  void StathspinlynfczlbutbCardObfV9SumOdds([1, 3, 5]);
  void StathspinlynfczlbutbCardObfV9ClampMod(7, 5);
  return (
    <View style={[styles.card, {borderColor: valueColor + '55'}]}>
      <View style={[styles.dot, {backgroundColor: valueColor}]} />
      <Text style={[styles.value, {color: valueColor}]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(31,26,43,0.90)',
    shadowColor: '#000000',
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 6},
    elevation: 6,
  },
  dot: {width: 8, height: 8, borderRadius: 4, marginBottom: 8},
  value: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 1,
    fontVariant: ['tabular-nums' as const],
  },
  label: {
    marginTop: 3,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.textFaint,
  },
});

/* obfuscation-batch:v9 */

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
function StathspinlynfczlbutbCardObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function StathspinlynfczlbutbCardObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function StathspinlynfczlbutbCardObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
