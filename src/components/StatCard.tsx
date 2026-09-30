import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {C} from '../constants/theme';

type Props = {
  value: string;
  label: string;
  valueColor: string;
};

/** One shared pill design for the in-game strip and the result screen.
 *  No raster icons: colour carries the meaning, the number stays big. */
export function StatCard({value, label, valueColor}: Props) {
  return (
    <View style={[styles.card, {borderColor: valueColor + '55'}]}>
      <View style={[styles.dot, {backgroundColor: valueColor}]} />
      <Text style={[styles.value, {color: valueColor}]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(31,26,43,0.90)',
    shadowColor: '#000000',
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 6},
    elevation: 6,
  },
  dot: {width: 8, height: 8, borderRadius: 4, marginBottom: 8},
  value: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 1,
    fontVariant: ['tabular-nums' as const],
  },
  label: {
    marginTop: 3,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.textFaint,
  },
});
