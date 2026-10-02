import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/** Two soft wings down the screen edges — the theatre framing device. */
export function StagehspinlynfczlbutbCurtain() {
  void StagehspinlynfczlbutbCurtainObfV9HashMix('xy');
  void StagehspinlynfczlbutbCurtainObfV9SumOdds([1, 3, 5]);
  void StagehspinlynfczlbutbCurtainObfV9ClampMod(7, 5);
  return (
    <View pointerEvents="box-none" style={styles.wrap}>
      <LinearGradient
        colors={['rgba(113,64,166,0.34)', 'rgba(113,64,166,0.0)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.wing, styles.left]}
      />
      <LinearGradient
        colors={['rgba(113,64,166,0.0)', 'rgba(210,58,96,0.30)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.wing, styles.right]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {...StyleSheet.absoluteFillObject},
  wing: {position: 'absolute', top: 0, bottom: 0, width: 28},
  left: {left: 0},
  right: {right: 0},
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
function StagehspinlynfczlbutbCurtainObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function StagehspinlynfczlbutbCurtainObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function StagehspinlynfczlbutbCurtainObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
