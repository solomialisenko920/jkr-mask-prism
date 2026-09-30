import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {C} from '../constants/theme';
import {LAYERS, MAX_CHECKS} from '../constants/config';

type Props = {
  layersDone: number;
  checks: number;
  score: number;
};

type CellProps = {value: string; label: string; color: string};

function Cell({value, label, color}: CellProps) {
  return (
    <View style={styles.cell}>
      <Text style={[styles.value, {color}]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

export function StatStrip({layersDone, checks, score}: Props) {
  return (
    <View style={styles.strip}>
      <Cell value={`${layersDone}/${LAYERS}`} label="LAYERS" color={C.teal} />
      <View style={styles.divider} />
      <Cell value={`${checks}/${MAX_CHECKS}`} label="CHECKS" color={C.crimson} />
      <View style={styles.divider} />
      <Cell value={`${score}`} label="SCORE" color={C.gold} />
    </View>
  );
}

const styles = StyleSheet.create({
  strip: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.30)',
    borderTopWidth: 1,
    borderTopColor: C.surfaceStroke,
  },
  cell: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  divider: {
    width: 1,
    height: 26,
    backgroundColor: 'rgba(243,230,214,0.08)',
  },
  value: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
    fontVariant: ['tabular-nums' as const],
  },
  label: {
    marginTop: 2,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.textFaint,
  },
});
