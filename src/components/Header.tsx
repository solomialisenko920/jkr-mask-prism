import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ChevronLeft} from 'lucide-react-native';
import {C} from '../constants/theme';

type Props = {
  title: string;
  onBack?: () => void;
  right?: React.ReactNode;
};

/** Single header used by every screen that has one, so badge / back-button
 *  styling can never drift between screens. */
export function Header({title, onBack, right}: Props) {
  return (
    <View style={styles.header}>
      {onBack ? (
        <Pressable
          onPress={onBack}
          accessibilityRole="button"
          accessibilityLabel="Back"
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          style={styles.back}>
          <ChevronLeft size={22} color={C.text} strokeWidth={1.5} />
        </Pressable>
      ) : (
        <View style={styles.backSpacer} />
      )}
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.rightSlot}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 116,
    paddingTop: 44,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.34)',
    borderBottomWidth: 1,
    borderBottomColor: C.surfaceStroke,
  },
  back: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(243,230,214,0.07)',
    borderWidth: 1,
    borderColor: C.surfaceStroke,
  },
  backSpacer: {width: 44, height: 44},
  title: {
    flex: 1,
    textAlign: 'center',
    color: C.textDim,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
  },
  rightSlot: {
    minWidth: 44,
    height: 44,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
