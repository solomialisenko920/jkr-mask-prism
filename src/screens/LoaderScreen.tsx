import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle} from 'react-native-svg';
import {C} from '../constants/theme';
import {LOADER_BAR_ANIM_MS, LOADER_DURATION_MS} from '../constants/config';
import {GrainField} from '../components/GrainField';
import {IMAGES} from '../assets';

const {width: SCREEN_W, height: SCREEN_H} = Dimensions.get('window');
const BAR_W = 190;

type Props = {onDone: () => void};

/** Brand card. No controls of any kind — it hands over on a timer. */
export function LoaderScreen({onDone}: Props) {
  const enter = useRef(new Animated.Value(0)).current;
  const titleFade = useRef(new Animated.Value(0)).current;
  const bar = useRef(new Animated.Value(0)).current;
  const ringA = useRef(new Animated.Value(0)).current;
  const ringB = useRef(new Animated.Value(0)).current;
  const ringC = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const t = setTimeout(onDone, LOADER_DURATION_MS);
    return () => clearTimeout(t);
  }, [onDone]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(enter, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.cubic),
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
      // Short, one-shot bar tween. A long-running tween would repaint for the
      // whole splash and stall the accessibility/idle pipeline.
      Animated.timing(bar, {
        toValue: 1,
        duration: LOADER_BAR_ANIM_MS,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  }, [enter, titleFade, bar, ringA, ringB, ringC]);

  const scale = enter.interpolate({inputRange: [0, 1], outputRange: [0.82, 1]});
  const spinA = ringA.interpolate({inputRange: [0, 1], outputRange: ['0deg', '132deg']});
  const spinB = ringB.interpolate({inputRange: [0, 1], outputRange: ['0deg', '-96deg']});
  const spinC = ringC.interpolate({inputRange: [0, 1], outputRange: ['0deg', '210deg']});
  const barShift = bar.interpolate({inputRange: [0, 1], outputRange: [-BAR_W, 0]});

  return (
    <ImageBackground source={IMAGES.bgLoader} style={styles.bg} resizeMode="cover">
      <LinearGradient
        colors={['rgba(10,8,15,0.88)', 'rgba(22,19,29,0.94)', 'rgba(43,26,58,0.90)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      <GrainField w={SCREEN_W} h={SCREEN_H} count={90} />

      <View style={styles.center}>
        <Animated.View
          pointerEvents="none"
          style={[styles.rings, {opacity: enter, transform: [{scale}]}]}>
          <Animated.View style={[styles.ringLayer, {transform: [{rotate: spinA}]}]}>
            <Svg width={200} height={200} viewBox="0 0 200 200">
              <Circle
                cx={100} cy={100} r={86}
                stroke={C.violet} strokeWidth={6} fill="none"
                strokeDasharray="34 18" strokeOpacity={0.95}
              />
            </Svg>
          </Animated.View>
          <Animated.View style={[styles.ringLayer, {transform: [{rotate: spinB}]}]}>
            <Svg width={200} height={200} viewBox="0 0 200 200">
              <Circle
                cx={100} cy={100} r={62}
                stroke={C.crimson} strokeWidth={5} fill="none"
                strokeDasharray="22 14" strokeOpacity={0.95}
              />
            </Svg>
          </Animated.View>
          <Animated.View style={[styles.ringLayer, {transform: [{rotate: spinC}]}]}>
            <Svg width={200} height={200} viewBox="0 0 200 200">
              <Circle
                cx={100} cy={100} r={38}
                stroke={C.gold} strokeWidth={4} fill="none"
                strokeDasharray="12 10" strokeOpacity={0.95}
              />
            </Svg>
          </Animated.View>
          <View style={styles.core} />
        </Animated.View>

        <Animated.View pointerEvents="none" style={{opacity: titleFade}}>
          <Text style={styles.brand}>JKR MASK PRISM</Text>
          <Text style={styles.tagline}>THREE LAYERS {'·'} ONE FACE</Text>
        </Animated.View>

        <View style={styles.barTrack}>
          <Animated.View
            pointerEvents="none"
            style={[styles.barFill, {transform: [{translateX: barShift}]}]}>
            <LinearGradient
              colors={['#7140A6', '#E8BA48']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.barGrad}
            />
          </Animated.View>
        </View>
        <Text style={styles.loading}>LOADING{'…'}</Text>
      </View>
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
  barTrack: {
    marginTop: 40,
    width: BAR_W,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(243,230,214,0.12)',
    overflow: 'hidden',
  },
  barFill: {width: BAR_W, height: 4},
  barGrad: {width: BAR_W, height: 4, borderRadius: 2},
  loading: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 4,
    color: C.text,
    opacity: 0.45,
  },
});
