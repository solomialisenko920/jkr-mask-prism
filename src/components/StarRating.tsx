import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {C} from '../constants/theme';

type Props = {stars: number; size?: number};

/** Three glyph stars. Only the filled/empty COLOUR differs, so an unearned
 *  star is the same shape as an earned one and the row never shifts. */
export function StarRating({stars, size = 30}: Props) {
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
