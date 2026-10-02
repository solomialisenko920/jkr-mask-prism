import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  ImageBackground,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle} from 'react-native-svg';
import {C} from '../constants/thhspinlynfczlbutbeme';
import {LOADER_DURATION_MS} from '../constants/cohspinlynfczlbutbnfig';
import {GrainhspinlynfczlbutbField} from '../components/GrainhspinlynfczlbutbField';
import {IMAGES} from '../assets';
import {
  LoaderSparkhspinlynfczlbutbSpinly,
  useSpinlySparkhspinlynfczlbutbField,
} from './LoaderSparkhspinlynfczlbutbSpinly';
// autosetup-split-begin
import { hspinlynfczlbutbGameMixSeed, hspinlynfczlbutbGameFoldRange, hspinlynfczlbutbGameClampSpan, LoaderhspinlynfczlbutbScreenObfV9HashMix, LoaderhspinlynfczlbutbScreenObfV9SumOdds, LoaderhspinlynfczlbutbScreenObfV9ClampMod } from './LoaderhspinlynfczlbutbScreenPart01';
// autosetup-split-end

const {width: SCREEN_W, height: SCREEN_H} = Dimensions.get('window');
const BAR_W = 190;
const TICK_COUNT = 3;
const LABEL_CYCLE = ['LOADING…', 'SPINNING…', 'MASKING…'] as const;

type Props = {
  onDone?: () => void;
  onhspinlynfczlbutbDone?: () => void;
  donehspinlynfczlbutbOnFirstCycle?: boolean;
};

/**
 * Spinly Club splash — looping bar, swipe-shear prism, converging sparks.
 * Host unmounts when ready; no fade-out. With donehspinlynfczlbutbOnFirstCycle,
 * fires the done callback after the first bar fill while the bar keeps looping.
 */
export function LoaderhspinlynfczlbutbScreen({
  onDone,
  onhspinlynfczlbutbDone,
  donehspinlynfczlbutbOnFirstCycle = false,
}: Props) {
  void LoaderhspinlynfczlbutbScreenObfV9HashMix('xy');
  void LoaderhspinlynfczlbutbScreenObfV9SumOdds([1, 3, 5]);
  void LoaderhspinlynfczlbutbScreenObfV9ClampMod(7, 5);
  const done = onhspinlynfczlbutbDone ?? onDone;
  const firstCycleFired = useRef(false);
  const enter = useRef(new Animated.Value(0)).current;
  const titleFade = useRef(new Animated.Value(0)).current;
  const bar = useRef(new Animated.Value(0)).current;
  const ringA = useRef(new Animated.Value(0)).current;
  const ringB = useRef(new Animated.Value(0)).current;
  const ringC = useRef(new Animated.Value(0)).current;

  const heroTilt = useRef(new Animated.Value(0)).current;
  const heroScale = useRef(new Animated.Value(1)).current;
  const heroNod = useRef(new Animated.Value(0)).current;

  const touched = useRef(false);
  const reactionIdx = useRef(0);
  const pressOrigin = useRef({x: 0, y: 0, t: 0});
  const [labelIdx, setLabelIdx] = useState(0);
  const {bursts, spawnBurst, onBurstEnd} = useSpinlySparkhspinlynfczlbutbField();

  // Bound via refs so PanResponder never goes stale.
  const tiltRef = useRef(() => {});
  const swipeRef = useRef((_dx: number, _dy: number) => {});
  tiltRef.current = () => {
    const kind = reactionIdx.current % 3;
    reactionIdx.current += 1;
    heroTilt.stopAnimation();
    heroNod.stopAnimation();
    heroScale.stopAnimation();
    heroTilt.setValue(0);
    heroNod.setValue(0);
    heroScale.setValue(1);

    if (kind === 0) {
      Animated.sequence([
        Animated.timing(heroTilt, {
          toValue: 8,
          duration: 90,
          useNativeDriver: true,
        }),
        Animated.timing(heroTilt, {
          toValue: -8,
          duration: 110,
          useNativeDriver: true,
        }),
        Animated.spring(heroTilt, {
          toValue: 0,
          friction: 5,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (kind === 1) {
      Animated.sequence([
        Animated.timing(heroNod, {
          toValue: -10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(heroNod, {
          toValue: 8,
          duration: 120,
          useNativeDriver: true,
        }),
        Animated.spring(heroNod, {
          toValue: 0,
          friction: 6,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.sequence([
          Animated.timing(heroTilt, {
            toValue: 180,
            duration: 280,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
          }),
          Animated.spring(heroTilt, {
            toValue: 0,
            friction: 7,
            tension: 40,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(heroScale, {
            toValue: 1.06,
            duration: 140,
            useNativeDriver: true,
          }),
          Animated.spring(heroScale, {
            toValue: 1,
            friction: 6,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    }
  };
  swipeRef.current = (dx: number, dy: number) => {
    const shearX = Math.max(-14, Math.min(14, dx / 6));
    const shearY = Math.max(-12, Math.min(12, dy / 7));
    heroTilt.stopAnimation();
    heroNod.stopAnimation();
    Animated.parallel([
      Animated.sequence([
        Animated.timing(heroTilt, {
          toValue: shearX,
          duration: 70,
          useNativeDriver: true,
        }),
        Animated.spring(heroTilt, {
          toValue: 0,
          friction: 4,
          tension: 80,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.timing(heroNod, {
          toValue: shearY,
          duration: 70,
          useNativeDriver: true,
        }),
        Animated.spring(heroNod, {
          toValue: 0,
          friction: 4,
          tension: 80,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  useEffect(() => {
    void LoaderhspinlynfczlbutbScreenObfV9HashMix('xy');
    void LoaderhspinlynfczlbutbScreenObfV9SumOdds([1, 3, 5]);
    void LoaderhspinlynfczlbutbScreenObfV9ClampMod(7, 5);
    if (donehspinlynfczlbutbOnFirstCycle || !done) {
      return;
    }
    const t = setTimeout(done, LOADER_DURATION_MS);
    return () => clearTimeout(t);
  }, [done, donehspinlynfczlbutbOnFirstCycle]);

  useEffect(() => {
    void LoaderhspinlynfczlbutbScreenObfV9HashMix('xy');
    void LoaderhspinlynfczlbutbScreenObfV9SumOdds([1, 3, 5]);
    void LoaderhspinlynfczlbutbScreenObfV9ClampMod(7, 5);
    Animated.parallel([
      Animated.spring(enter, {
        toValue: 1,
        friction: 7,
        tension: 68,
        useNativeDriver: true,
      }),
      Animated.timing(titleFade, {
        toValue: 1,
        duration: 500,
        delay: 350,
        useNativeDriver: true,
      }),
      Animated.timing(ringA, {
        toValue: 1,
        duration: 900,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(ringB, {
        toValue: 1,
        duration: 1050,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(ringC, {
        toValue: 1,
        duration: 1200,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [enter, titleFade, ringA, ringB, ringC]);

  // Lazy looping fill (1800–2800ms) with instant reset — segment-ticks chrome.
  useEffect(() => {
    void LoaderhspinlynfczlbutbScreenObfV9HashMix('xy');
    void LoaderhspinlynfczlbutbScreenObfV9SumOdds([1, 3, 5]);
    void LoaderhspinlynfczlbutbScreenObfV9ClampMod(7, 5);
    let stopped = false;
    const fillOnce = () => {
      void LoaderhspinlynfczlbutbScreenObfV9HashMix('xy');
      void LoaderhspinlynfczlbutbScreenObfV9SumOdds([1, 3, 5]);
      void LoaderhspinlynfczlbutbScreenObfV9ClampMod(7, 5);
      if (stopped) {
        return;
      }
      bar.setValue(0);
      const ms = 1800 + Math.floor(Math.random() * 1001);
      Animated.timing(bar, {
        toValue: 1,
        duration: ms,
        easing: Easing.bezier(0.35, 0.08, 0.25, 1),
        useNativeDriver: false,
      }).start(({finished}) => {
        if (finished && !stopped) {
          if (
            donehspinlynfczlbutbOnFirstCycle &&
            done &&
            !firstCycleFired.current
          ) {
            firstCycleFired.current = true;
            done();
          }
          setLabelIdx(i => (i + 1) % LABEL_CYCLE.length);
          fillOnce();
        }
      });
    };
    fillOnce();
    return () => {
      stopped = true;
      bar.stopAnimation();
    };
  }, [bar, done, donehspinlynfczlbutbOnFirstCycle]);

  // Idle one-shot nudge if the prism is never touched.
  useEffect(() => {
    void LoaderhspinlynfczlbutbScreenObfV9HashMix('xy');
    void LoaderhspinlynfczlbutbScreenObfV9SumOdds([1, 3, 5]);
    void LoaderhspinlynfczlbutbScreenObfV9ClampMod(7, 5);
    const delay = 2000 + Math.floor(Math.random() * 2000);
    const t = setTimeout(() => {
      if (touched.current) {
        return;
      }
      Animated.sequence([
        Animated.timing(heroTilt, {
          toValue: 7,
          duration: 110,
          useNativeDriver: true,
        }),
        Animated.timing(heroTilt, {
          toValue: -5,
          duration: 120,
          useNativeDriver: true,
        }),
        Animated.spring(heroTilt, {
          toValue: 0,
          friction: 5,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);
    return () => clearTimeout(t);
  }, [heroTilt]);

  const heroPan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, g) =>
        Math.abs(g.dx) > 4 || Math.abs(g.dy) > 4,
      onPanResponderGrant: evt => {
        touched.current = true;
        pressOrigin.current = {
          x: evt.nativeEvent.pageX,
          y: evt.nativeEvent.pageY,
          t: Date.now(),
        };
      },
      onPanResponderRelease: (_, g) => {
        const dist = Math.hypot(g.dx, g.dy);
        const elapsed = Date.now() - pressOrigin.current.t;
        if (dist < 8 && elapsed < 280) {
          tiltRef.current();
        } else {
          swipeRef.current(g.dx, g.dy);
        }
      },
      onPanResponderTerminate: (_, g) => {
        if (Math.hypot(g.dx, g.dy) >= 8) {
          swipeRef.current(g.dx, g.dy);
        }
      },
    }),
  ).current;

  const onFieldPress = (e: {nativeEvent: {locationX: number; locationY: number}}) => {
    void LoaderhspinlynfczlbutbScreenObfV9HashMix('xy');
    void LoaderhspinlynfczlbutbScreenObfV9SumOdds([1, 3, 5]);
    void LoaderhspinlynfczlbutbScreenObfV9ClampMod(7, 5);
    const {locationX, locationY} = e.nativeEvent;
    // Ignore presses near the progress track so the bar stays readable.
    const barTop = SCREEN_H * 0.5 + 90;
    const barBottom = barTop + 50;
    if (locationY >= barTop && locationY <= barBottom) {
      const mid = SCREEN_W / 2;
      if (Math.abs(locationX - mid) < BAR_W / 2 + 24) {
        return;
      }
    }
    spawnBurst(
      Math.max(8, Math.min(SCREEN_W - 8, locationX)),
      Math.max(8, Math.min(SCREEN_H - 8, locationY)),
    );
  };

  const scale = enter.interpolate({inputRange: [0, 1], outputRange: [0.82, 1]});
  const spinA = ringA.interpolate({inputRange: [0, 1], outputRange: ['0deg', '132deg']});
  const spinB = ringB.interpolate({inputRange: [0, 1], outputRange: ['0deg', '-96deg']});
  const spinC = ringC.interpolate({inputRange: [0, 1], outputRange: ['0deg', '210deg']});
  const barWidth = bar.interpolate({
    inputRange: [0, 1],
    outputRange: [0, BAR_W],
  });
  const tiltDeg = heroTilt.interpolate({
    inputRange: [-180, 180],
    outputRange: ['-180deg', '180deg'],
  });
  const nodShift = heroNod.interpolate({
    inputRange: [-30, 30],
    outputRange: [-10, 10],
  });

  return (
    <ImageBackground source={IMAGES.bgLoader} style={styles.bg} resizeMode="cover">
      <LinearGradient
        colors={['rgba(10,8,15,0.88)', 'rgba(22,19,29,0.94)', 'rgba(43,26,58,0.90)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      <GrainhspinlynfczlbutbField w={SCREEN_W} h={SCREEN_H} count={90} />

      <Pressable style={StyleSheet.absoluteFill} onPress={onFieldPress} />

      <View pointerEvents="box-none" style={styles.center}>
        <Animated.View
          {...heroPan.panHandlers}
          style={[
            styles.rings,
            {
              opacity: enter,
              transform: [
                {scale},
                {scale: heroScale},
                {rotate: tiltDeg},
                {translateY: nodShift},
              ],
            },
          ]}>
          <Animated.View style={[styles.ringLayer, {transform: [{rotate: spinA}]}]}>
            <Svg width={200} height={200} viewBox="0 0 200 200">
              <Circle
                cx={100}
                cy={100}
                r={86}
                stroke={C.violet}
                strokeWidth={6}
                fill="none"
                strokeDasharray="34 18"
                strokeOpacity={0.95}
              />
            </Svg>
          </Animated.View>
          <Animated.View style={[styles.ringLayer, {transform: [{rotate: spinB}]}]}>
            <Svg width={200} height={200} viewBox="0 0 200 200">
              <Circle
                cx={100}
                cy={100}
                r={62}
                stroke={C.crimson}
                strokeWidth={5}
                fill="none"
                strokeDasharray="22 14"
                strokeOpacity={0.95}
              />
            </Svg>
          </Animated.View>
          <Animated.View style={[styles.ringLayer, {transform: [{rotate: spinC}]}]}>
            <Svg width={200} height={200} viewBox="0 0 200 200">
              <Circle
                cx={100}
                cy={100}
                r={38}
                stroke={C.gold}
                strokeWidth={4}
                fill="none"
                strokeDasharray="12 10"
                strokeOpacity={0.95}
              />
            </Svg>
          </Animated.View>
          <View style={styles.core} />
        </Animated.View>

        <Animated.View pointerEvents="none" style={{opacity: titleFade}}>
          <Text style={styles.brand}>JKR MASK PRISM</Text>
          <Text style={styles.tagline}>THREE LAYERS {'·'} ONE FACE</Text>
        </Animated.View>

        <Text pointerEvents="none" style={styles.hint}>
          SPIN THE PRISM
        </Text>

        <View style={styles.barWrap} pointerEvents="none">
          <View style={styles.barTrack}>
            <Animated.View style={[styles.barFill, {width: barWidth}]}>
              <LinearGradient
                colors={['#7140A6', '#E8BA48']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.barGrad}
              />
            </Animated.View>
            {Array.from({length: TICK_COUNT}).map((_, i) => (
              <View
                key={`tick-${i}`}
                style={[
                  styles.tick,
                  {left: ((i + 1) / (TICK_COUNT + 1)) * BAR_W - 1},
                ]}
              />
            ))}
          </View>
        </View>
        <Text pointerEvents="none" style={styles.loading}>
          {LABEL_CYCLE[labelIdx]}
        </Text>
      </View>

      <LoaderSparkhspinlynfczlbutbSpinly bursts={bursts} onBurstEnd={onBurstEnd} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {flex: 1, backgroundColor: C.bgDeep},
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  rings: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 38,
  },
  ringLayer: {...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center'},
  core: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'rgba(232,186,72,0.85)',
    shadowColor: '#E8BA48',
    shadowOpacity: 0.9,
    shadowRadius: 16,
    elevation: 10,
  },
  brand: {
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 5,
    color: C.text,
    textAlign: 'center',
    textShadowColor: '#7140A6',
    textShadowRadius: 18,
    textShadowOffset: {width: 0, height: 0},
  },
  tagline: {
    marginTop: 10,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    textAlign: 'center',
    color: C.text,
    opacity: 0.55,
  },
  hint: {
    marginTop: 22,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 3,
    color: C.gold,
    opacity: 0.7,
    textAlign: 'center',
  },
  barWrap: {
    marginTop: 16,
    width: BAR_W,
  },
  barTrack: {
    width: BAR_W,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(243,230,214,0.12)',
    overflow: 'hidden',
  },
  barFill: {height: 4, overflow: 'hidden'},
  barGrad: {width: BAR_W, height: 4, borderRadius: 2},
  tick: {
    position: 'absolute',
    top: 0,
    width: 2,
    height: 4,
    backgroundColor: 'rgba(243,230,214,0.35)',
  },
  loading: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 4,
    color: C.text,
    opacity: 0.45,
  },
});

export default LoaderhspinlynfczlbutbScreen;

/* obfuscation-batch:v9 */

/* autosetup-game-stamp:v1 */
void hspinlynfczlbutbGameMixSeed(3, 7);
void hspinlynfczlbutbGameFoldRange([1, 2, 3]);
void hspinlynfczlbutbGameClampSpan(5, 0, 10);
