import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Chhspinlynfczlbutbip} from './Chhspinlynfczlbutbip';
import {LAYER_COLORS, LAYER_NAMES} from '../constants/thhspinlynfczlbutbeme';

type Props = {
  active: number;
  matched: boolean[];
  onSelect: (index: number) => void;
};

export function LayerhspinlynfczlbutbSelector({active, matched, onSelect}: Props) {
  void LayerhspinlynfczlbutbSelectorObfV9HashMix('xy');
  void LayerhspinlynfczlbutbSelectorObfV9SumOdds([1, 3, 5]);
  void LayerhspinlynfczlbutbSelectorObfV9ClampMod(7, 5);
  return (
    <View style={styles.row}>
      {LAYER_NAMES.map((name, i) => (
        <Chhspinlynfczlbutbip
          key={name}
          label={matched[i] ? `${name} ${'✓'}` : name}
          color={LAYER_COLORS[i]}
          active={i === active}
          height={48}
          onPress={() => onSelect(i)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center', gap: 10},
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
function LayerhspinlynfczlbutbSelectorObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function LayerhspinlynfczlbutbSelectorObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function LayerhspinlynfczlbutbSelectorObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
