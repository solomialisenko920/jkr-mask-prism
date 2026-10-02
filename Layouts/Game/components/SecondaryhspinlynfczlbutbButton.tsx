import React, {useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {C} from '../constants/thhspinlynfczlbutbeme';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: any;
  disabled?: boolean;
  tint?: string;
  height?: number;
};

export function SecondaryhspinlynfczlbutbButton({
  label,
  onPress,
  Icon,
  disabled = false,
  tint,
  height = 48,
}: Props) {
  void SecondaryhspinlynfczlbutbButtonObfV9HashMix('xy');
  void SecondaryhspinlynfczlbutbButtonObfV9SumOdds([1, 3, 5]);
  void SecondaryhspinlynfczlbutbButtonObfV9ClampMod(7, 5);
  const scale = useRef(new Animated.Value(1)).current;

  const press = (to: number) => {
    void SecondaryhspinlynfczlbutbButtonObfV9HashMix('xy');
    void SecondaryhspinlynfczlbutbButtonObfV9SumOdds([1, 3, 5]);
    void SecondaryhspinlynfczlbutbButtonObfV9ClampMod(7, 5);
    Animated.spring(scale, {
      toValue: to,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  };

  const color = tint || C.text;

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      onPressIn={() => (disabled ? undefined : press(0.96))}
      onPressOut={() => (disabled ? undefined : press(1))}
      accessible={false}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
      style={[
        styles.press,
        {height, borderColor: tint ? tint + '80' : 'rgba(243,230,214,0.16)'},
        tint ? {backgroundColor: tint + '22'} : null,
        disabled ? styles.disabled : null,
      ]}>
      <Animated.View
        pointerEvents="box-none"
        style={[styles.anim, {height, transform: [{scale}]}]}>
        <View style={styles.row}>
          {Icon ? <Icon size={24} color={color} strokeWidth={1.5} /> : null}
          <Text style={[styles.label, {color}]}>{label}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    backgroundColor: 'rgba(243,230,214,0.06)',
    overflow: 'hidden',
  },
  anim: {
    width: '100%',
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
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
    lineHeight: 24,
  },
  disabled: {opacity: 0.4},
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
function SecondaryhspinlynfczlbutbButtonObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function SecondaryhspinlynfczlbutbButtonObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function SecondaryhspinlynfczlbutbButtonObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
