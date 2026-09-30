import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/** Two soft wings down the screen edges — the theatre framing device. */
export function StageCurtain() {
  return (
    <View pointerEvents="box-none" style={styles.wrap}>
      <LinearGradient
        colors={['rgba(113,64,166,0.34)', 'rgba(113,64,166,0.0)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.wing, styles.left]}
      />
      <LinearGradient
        colors={['rgba(113,64,166,0.0)', 'rgba(210,58,96,0.30)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.wing, styles.right]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {...StyleSheet.absoluteFillObject},
  wing: {position: 'absolute', top: 0, bottom: 0, width: 28},
  left: {left: 0},
  right: {right: 0},
});
