import React, {useEffect, useMemo, useRef} from 'react';
import {Animated, Image, Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle, Line, Path} from 'react-native-svg';
import {C, GRADIENT_BOARD, LAYER_COLORS} from '../constants/theme';
import {
  CELEBRATION_MS,
  LOSE_FADE_MS,
  SEGMENTS,
  SHAKE_PHASE_MS,
} from '../constants/config';
import {arcPath, BOARD_RINGS, rayPoints, segmentCentre} from '../game/mask';
import type {PatternDef} from '../game/patterns';
import {SPRITES} from '../assets';

export const BOARD_PAD = 6;
export const BOARD_BORDER = 2;
export const BOARD_FRAME = BOARD_PAD + BOARD_BORDER;

type RingSpec = {radius: number; width: number; markerR: number};

type Props = {
  pattern: PatternDef;
  angles: number[];
  activeLayer: number;
  matched: boolean[];
  size: number;
  status: string;
  shakeTick: number;
  onSelectLayer: (index: number) => void;
};

const SEG_LIST = new Array(SEGMENTS).fill(0).map((_, i) => i);

/** Flat element list for one ring. Fragments are never nested inside Svg. */
function buildRing(
  values: number[],
  ring: RingSpec,
  color: string,
  active: boolean,
): React.ReactElement[] {
  const parts: React.ReactElement[] = [];
  SEG_LIST.forEach(si => {
    const v = values[si];
    parts.push(
      <Path
        key={'arc-' + si}
        d={arcPath(ring.radius, si, 5)}
        stroke={color}
        strokeOpacity={v === 0 ? 0.22 : active ? 1 : 0.85}
        strokeWidth={ring.width}
        strokeLinecap="butt"
        fill="none"
      />,
    );
    if (v === 2) {
      const centre = segmentCentre(ring.radius, si);
      parts.push(
        <Circle
          key={'mark-' + si}
          cx={centre.x}
          cy={centre.y}
          r={ring.markerR}
          fill={C.gold}
        />,
      );
    }
  });
  return parts;
}

export function MaskBoard({
  pattern,
  angles,
  activeLayer,
  matched,
  size,
  status,
  shakeTick,
  onSelectLayer,
}: Props) {
  const canvas = size - 2 * BOARD_FRAME;
  const unit = canvas / 100;

  const rotAnims = useRef([
    new Animated.Value(angles[0]),
    new Animated.Value(angles[1]),
    new Animated.Value(angles[2]),
  ]).current;
  const shakeX = useRef(new Animated.Value(0)).current;
  const fade = useRef(new Animated.Value(1)).current;
  const celebrate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    angles.forEach((a, i) => {
      Animated.spring(rotAnims[i], {
        toValue: a,
        tension: 90,
        friction: 11,
        useNativeDriver: true,
      }).start();
    });
  }, [angles, rotAnims]);

  useEffect(() => {
    if (shakeTick <= 0) {
      return;
    }
    Animated.sequence([
      Animated.timing(shakeX, {toValue: 7, duration: SHAKE_PHASE_MS, useNativeDriver: true}),
      Animated.timing(shakeX, {toValue: -7, duration: SHAKE_PHASE_MS, useNativeDriver: true}),
      Animated.timing(shakeX, {toValue: 5, duration: SHAKE_PHASE_MS, useNativeDriver: true}),
      Animated.timing(shakeX, {toValue: 0, duration: SHAKE_PHASE_MS, useNativeDriver: true}),
    ]).start();
  }, [shakeTick, shakeX]);

  useEffect(() => {
    if (status === 'win') {
      Animated.timing(celebrate, {
        toValue: 1,
        duration: CELEBRATION_MS,
        useNativeDriver: true,
      }).start();
    } else if (status === 'lose') {
      Animated.timing(fade, {
        toValue: 0.45,
        duration: LOSE_FADE_MS,
        useNativeDriver: true,
      }).start();
    }
  }, [status, celebrate, fade]);

  const rotations = useMemo(
    () =>
      rotAnims.map(v =>
        v.interpolate({
          inputRange: [-8, 64],
          outputRange: ['-360deg', '2880deg'],
        }),
      ),
    [rotAnims],
  );

  const rayScale = celebrate.interpolate({inputRange: [0, 1], outputRange: [0.4, 1.25]});
  const rayFade = celebrate.interpolate({
    inputRange: [0, 0.35, 1],
    outputRange: [0, 0.9, 0],
  });

  const coreSize = Math.round(canvas * 0.17);
  const zones = [
    {d: Math.round(95 * unit), i: 0},
    {d: Math.round(68 * unit), i: 1},
    {d: Math.round(43 * unit), i: 2},
  ];

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        styles.outer,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          opacity: fade,
          transform: [{translateX: shakeX}],
        },
      ]}>
      <LinearGradient
        colors={GRADIENT_BOARD}
        start={{x: 0.2, y: 0}}
        end={{x: 0.8, y: 1}}
        style={[StyleSheet.absoluteFill, {borderRadius: size / 2}]}
      />
      <View style={[styles.canvas, {width: canvas, height: canvas}]}>
        {BOARD_RINGS.map((ring, li) => (
          <Animated.View
            key={'ring-' + li}
            pointerEvents="box-none"
            style={[
              StyleSheet.absoluteFill,
              {transform: [{rotate: rotations[li]}]},
            ]}>
            <Svg width={canvas} height={canvas} viewBox="0 0 100 100">
              {matched[li] ? (
                <Circle
                  key="lock"
                  cx={50}
                  cy={50}
                  r={ring.radius + ring.width / 2 + 1.6}
                  stroke={C.gold}
                  strokeOpacity={0.9}
                  strokeWidth={1.5}
                  fill="none"
                />
              ) : null}
              {buildRing(
                pattern.layers[li],
                ring,
                LAYER_COLORS[li],
                activeLayer === li,
              )}
            </Svg>
          </Animated.View>
        ))}

        <Animated.View
          pointerEvents="box-none"
          style={[
            StyleSheet.absoluteFill,
            {opacity: rayFade, transform: [{scale: rayScale}]},
          ]}>
          <Svg width={canvas} height={canvas} viewBox="0 0 100 100">
            {SEG_LIST.map(si => {
              const r = rayPoints(si, 14, 49);
              return (
                <Line
                  key={'ray-' + si}
                  x1={r.x1}
                  y1={r.y1}
                  x2={r.x2}
                  y2={r.y2}
                  stroke={C.gold}
                  strokeOpacity={0.85}
                  strokeWidth={2}
                />
              );
            })}
          </Svg>
        </Animated.View>

        <View pointerEvents="none" style={styles.coreWrap}>
          <Image
            source={SPRITES.prismCore}
            style={{width: coreSize, height: coreSize}}
            resizeMode="contain"
          />
        </View>

        {zones.map(z => (
          <Pressable
            key={'zone-' + z.i}
            onPress={() => onSelectLayer(z.i)}
            accessible={false}
            style={[
              styles.zone,
              {
                width: z.d,
                height: z.d,
                borderRadius: z.d / 2,
                left: (canvas - z.d) / 2,
                top: (canvas - z.d) / 2,
              },
            ]}
          />
        ))}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  outer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: BOARD_PAD,
    borderWidth: BOARD_BORDER,
    borderColor: 'rgba(113,64,166,0.55)',
    overflow: 'hidden',
    shadowColor: '#7140A6',
    shadowOpacity: 0.45,
    shadowRadius: 26,
    shadowOffset: {width: 0, height: 12},
    elevation: 14,
  },
  canvas: {alignItems: 'center', justifyContent: 'center'},
  coreWrap: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zone: {position: 'absolute', backgroundColor: 'transparent'},
});
