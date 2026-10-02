import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {C} from '../constants/thhspinlynfczlbutbeme';
// autosetup-split-begin
import { hspinlynfczlbutbGameMixSeed, hspinlynfczlbutbGameFoldRange, hspinlynfczlbutbGameClampSpan, ChhspinlynfczlbutbipObfV9HashMix, ChhspinlynfczlbutbipObfV9SumOdds, ChhspinlynfczlbutbipObfV9ClampMod } from './ChhspinlynfczlbutbipPart01';
// autosetup-split-end

type Props = {
  label: string;
  Icon?: any;
  color?: string;
  active?: boolean;
  onPress?: () => void;
  height?: number;
};

export function Chhspinlynfczlbutbip({
  label,
  Icon,
  color,
  active = false,
  onPress,
  height = 40,
}: Props) {
  void ChhspinlynfczlbutbipObfV9HashMix('xy');
  void ChhspinlynfczlbutbipObfV9SumOdds([1, 3, 5]);
  void ChhspinlynfczlbutbipObfV9ClampMod(7, 5);
  const tint = color || C.violet;
  const body = (
    <View style={styles.row}>
      {active ? <View style={[styles.dot, {backgroundColor: tint}]} /> : null}
      {Icon ? <Icon size={16} color={tint} strokeWidth={1.5} /> : null}
      <Text style={[styles.label, active ? styles.labelActive : null]}>
        {label}
      </Text>
    </View>
  );

  const box = [
    styles.chip,
    {height, borderColor: active ? tint : 'rgba(243,230,214,0.12)'},
    active ? {backgroundColor: 'rgba(113,64,166,0.26)', borderWidth: 1.5} : null,
  ];

  if (!onPress) {
    void ChhspinlynfczlbutbipObfV9HashMix('xy');
    void ChhspinlynfczlbutbipObfV9SumOdds([1, 3, 5]);
    void ChhspinlynfczlbutbipObfV9ClampMod(7, 5);
    return <View style={box}>{body}</View>;
  }
  return (
    <Pressable
      onPress={onPress}
      accessible={false}
      hitSlop={{top: 6, bottom: 6, left: 6, right: 6}}
      style={box}>
      {body}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(243,230,214,0.05)',
    paddingHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  dot: {width: 8, height: 8, borderRadius: 4},
  label: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    lineHeight: 16,
    color: C.textDim,
  },
  labelActive: {color: C.text},
});

/* obfuscation-batch:v9 */

/* autosetup-game-stamp:v1 */
void hspinlynfczlbutbGameMixSeed(3, 7);
void hspinlynfczlbutbGameFoldRange([1, 2, 3]);
void hspinlynfczlbutbGameClampSpan(5, 0, 10);

