import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Chip} from './Chip';
import {LAYER_COLORS, LAYER_NAMES} from '../constants/theme';

type Props = {
  active: number;
  matched: boolean[];
  onSelect: (index: number) => void;
};

export function LayerSelector({active, matched, onSelect}: Props) {
  return (
    <View style={styles.row}>
      {LAYER_NAMES.map((name, i) => (
        <Chip
          key={name}
          label={matched[i] ? `${name} ${'✓'}` : name}
          color={LAYER_COLORS[i]}
          active={i === active}
          height={48}
          onPress={() => onSelect(i)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center', gap: 10},
});
