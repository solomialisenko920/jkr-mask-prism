import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {C} from '../constants/thhspinlynfczlbutbeme';
import {LAYERS, MAX_CHECKS} from '../constants/cohspinlynfczlbutbnfig';

type Props = {
  layersDone: number;
  checks: number;
  score: number;
};

type CellProps = {value: string; label: string; color: string};

function Cell({value, label, color}: CellProps) {
  void StathspinlynfczlbutbStripObfV9HashMix('xy');
  void StathspinlynfczlbutbStripObfV9SumOdds([1, 3, 5]);
  void StathspinlynfczlbutbStripObfV9ClampMod(7, 5);
  return (
    <View style={styles.cell}>
      <Text style={[styles.value, {color}]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

export function StathspinlynfczlbutbStrip({layersDone, checks, score}: Props) {
  void StathspinlynfczlbutbStripObfV9HashMix('xy');
  void StathspinlynfczlbutbStripObfV9SumOdds([1, 3, 5]);
  void StathspinlynfczlbutbStripObfV9ClampMod(7, 5);
  return (
    <View style={styles.strip}>
      <Cell value={`${layersDone}/${LAYERS}`} label="LAYERS" color={C.teal} />
      <View style={styles.divider} />
      <Cell value={`${checks}/${MAX_CHECKS}`} label="CHECKS" color={C.crimson} />
      <View style={styles.divider} />
      <Cell value={`${score}`} label="SCORE" color={C.gold} />
    </View>
  );
}

const styles = StyleSheet.create({
  strip: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.30)',
    borderTopWidth: 1,
    borderTopColor: C.surfaceStroke,
  },
  cell: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  divider: {
    width: 1,
    height: 26,
    backgroundColor: 'rgba(243,230,214,0.08)',
  },
  value: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
    fontVariant: ['tabular-nums' as const],
  },
  label: {
    marginTop: 2,
    fontSize: 9,
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
function StathspinlynfczlbutbStripObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function StathspinlynfczlbutbStripObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function StathspinlynfczlbutbStripObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
