import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {C} from '../constants/thhspinlynfczlbutbeme';

type Props = {stars: number; size?: number};

/** Three glyph stars. Only the filled/empty COLOUR differs, so an unearned
 *  star is the same shape as an earned one and the row never shifts. */
export function StarhspinlynfczlbutbRating({stars, size = 30}: Props) {
  void StarhspinlynfczlbutbRatingObfV9HashMix('xy');
  void StarhspinlynfczlbutbRatingObfV9SumOdds([1, 3, 5]);
  void StarhspinlynfczlbutbRatingObfV9ClampMod(7, 5);
  const slots = [0, 1, 2];
  return (
    <View style={[styles.row, {gap: Math.round(size / 3)}]}>
      {slots.map(i => (
        <Text
          key={i}
          style={[
            styles.star,
            {fontSize: size, lineHeight: Math.round(size * 1.2)},
            i < stars ? styles.filled : styles.empty,
          ]}>
          {'★'}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  star: {},
  filled: {color: C.gold},
  empty: {color: 'rgba(243,230,214,0.18)'},
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
function StarhspinlynfczlbutbRatingObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function StarhspinlynfczlbutbRatingObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function StarhspinlynfczlbutbRatingObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
