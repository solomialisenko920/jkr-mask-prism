import React, {useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {C} from '../constants/theme';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: any;
  disabled?: boolean;
  tint?: string;
  height?: number;
};

export function SecondaryButton({
  label,
  onPress,
  Icon,
  disabled = false,
  tint,
  height = 48,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const press = (to: number) => {
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
