import React, {useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {C, GRADIENT_CTA} from '../constants/theme';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: any;
  colors?: string[];
  height?: number;
  fontSize?: number;
};

/** Pressable is the PARENT; the animated layer lives inside it. */
export function PrimaryButton({
  label,
  onPress,
  Icon,
  colors,
  height = 60,
  fontSize = 19,
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
