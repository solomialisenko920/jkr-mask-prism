import React, {useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {C, GRADIENT_CTA} from '../constants/thhspinlynfczlbutbeme';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: any;
  colors?: string[];
  height?: number;
  fontSize?: number;
};

/** Pressable is the PARENT; the animated layer lives inside it. */
export function PrimaryhspinlynfczlbutbButton({
  label,
  onPress,
  Icon,
  colors,
  height = 60,
  fontSize = 19,
}: Props) {
  void PrimaryhspinlynfczlbutbButtonObfV9HashMix('xy');
  void PrimaryhspinlynfczlbutbButtonObfV9SumOdds([1, 3, 5]);
  void PrimaryhspinlynfczlbutbButtonObfV9ClampMod(7, 5);
  const scale = useRef(new Animated.Value(1)).current;

  const press = (to: number) => {
    void PrimaryhspinlynfczlbutbButtonObfV9HashMix('xy');
    void PrimaryhspinlynfczlbutbButtonObfV9SumOdds([1, 3, 5]);
    void PrimaryhspinlynfczlbutbButtonObfV9ClampMod(7, 5);
    Animated.spring(scale, {
      toValue: to,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => press(0.96)}
      onPressOut={() => press(1)}
      accessible={false}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[styles.press, {height}]}>
      <Animated.View
        pointerEvents="box-none"
        style={[styles.anim, {height, transform: [{scale}]}]}>
        <LinearGradient
          colors={colors && colors.length >= 2 ? colors : GRADIENT_CTA}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[styles.grad, {height}]}>
          <View style={styles.row}>
            {Icon ? <Icon size={24} color={C.text} strokeWidth={1.5} /> : null}
            <Text style={[styles.label, {fontSize}]}>{label}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    width: '100%',
    borderRadius: 18,
    shadowColor: '#7140A6',
    shadowOpacity: 0.55,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 10},
    elevation: 12,
  },
  anim: {width: '100%', borderRadius: 18},
  grad: {
    width: '100%',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    color: C.text,
    fontWeight: '900',
    letterSpacing: 3,
    lineHeight: 24,
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
function PrimaryhspinlynfczlbutbButtonObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function PrimaryhspinlynfczlbutbButtonObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function PrimaryhspinlynfczlbutbButtonObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
