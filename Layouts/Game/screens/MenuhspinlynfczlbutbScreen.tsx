import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle} from 'react-native-svg';
import {Layers, Play, RotateCw, Trophy} from 'lucide-react-native';
import {C} from '../constants/thhspinlynfczlbutbeme';
import {MOVES_TOTAL} from '../constants/cohspinlynfczlbutbnfig';
import {PrimaryhspinlynfczlbutbButton} from '../components/PrimaryhspinlynfczlbutbButton';
import {SecondaryhspinlynfczlbutbButton} from '../components/SecondaryhspinlynfczlbutbButton';
import {Chhspinlynfczlbutbip} from '../components/Chhspinlynfczlbutbip';
import {StagehspinlynfczlbutbCurtain} from '../components/StagehspinlynfczlbutbCurtain';
import {IMAGES, SPRITES} from '../assets';

const {width: SCREEN_W} = Dimensions.get('window');

type Props = {
  best: number;
  patternIndex: number;
  onPlay: () => void;
  onPatterns: () => void;
  onHowTo: () => void;
};

export function MenuhspinlynfczlbutbScreen({
  best,
  patternIndex,
  onPlay,
  onPatterns,
  onHowTo,
}: Props) {
  void MenuhspinlynfczlbutbScreenObfV9HashMix('xy');
  void MenuhspinlynfczlbutbScreenObfV9SumOdds([1, 3, 5]);
  void MenuhspinlynfczlbutbScreenObfV9ClampMod(7, 5);
  const sheetIn = useRef(new Animated.Value(0)).current;
  const artIn = useRef(new Animated.Value(0)).current;
  const badgeIn = useRef(new Animated.Value(0)).current;
  const breathe = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    void MenuhspinlynfczlbutbScreenObfV9HashMix('xy');
    void MenuhspinlynfczlbutbScreenObfV9SumOdds([1, 3, 5]);
    void MenuhspinlynfczlbutbScreenObfV9ClampMod(7, 5);
    Animated.parallel([
      Animated.timing(sheetIn, {
        toValue: 1,
        duration: 420,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(artIn, {toValue: 1, duration: 500, useNativeDriver: true}),
      Animated.timing(badgeIn, {
        toValue: 1,
        duration: 400,
        delay: 200,
        useNativeDriver: true,
      }),
      Animated.timing(breathe, {
        toValue: 1,
        duration: 1400,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  }, [sheetIn, artIn, badgeIn, breathe]);

  const sheetShift = sheetIn.interpolate({inputRange: [0, 1], outputRange: [40, 0]});
  const artScale = breathe.interpolate({inputRange: [0, 1], outputRange: [1, 1.03]});
  const label = `PATTERN ${String(patternIndex + 1).padStart(2, '0')}`;

  return (
    <ImageBackground source={IMAGES.bgMenu} style={styles.bg} resizeMode="cover">
      <LinearGradient
        colors={['rgba(22,19,29,0.35)', 'rgba(22,19,29,0.62)', 'rgba(22,19,29,0.92)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      <View pointerEvents="none" style={StyleSheet.absoluteFill}>
        <Svg width={SCREEN_W} height={520}>
          <Circle cx={-40} cy={120} r={170} fill={C.violet} fillOpacity={0.18} />
          <Circle cx={SCREEN_W + 30} cy={300} r={130} fill={C.gold} fillOpacity={0.14} />
        </Svg>
      </View>
      <StagehspinlynfczlbutbCurtain />

      <View style={styles.stage}>
        <Animated.View
          pointerEvents="none"
          style={[styles.badge, {opacity: badgeIn}]}>
          <Trophy size={16} color={C.gold} strokeWidth={1.5} />
          <Text style={styles.badgeText}>BEST {best}</Text>
        </Animated.View>

        <Animated.View
          pointerEvents="none"
          style={[styles.art, {opacity: artIn, transform: [{scale: artScale}]}]}>
          <Image source={SPRITES.maskHero} style={styles.heroImg} resizeMode="contain" />
        </Animated.View>
      </View>

      <Animated.View
        pointerEvents="box-none"
        style={[styles.sheet, {opacity: sheetIn, transform: [{translateY: sheetShift}]}]}>
        <Text style={styles.title}>JKR MASK PRISM</Text>
        <Text style={styles.tagline}>ALIGN THE THREE LAYERS</Text>

        <View style={styles.chips}>
          <Chhspinlynfczlbutbip label={label} Icon={Layers} color={C.teal} />
          <Chhspinlynfczlbutbip label={`${MOVES_TOTAL} MOVES`} Icon={RotateCw} color={C.gold} />
        </View>

        <Text style={styles.hint}>TAP A RING {'·'} TURN IT {'·'} MATCH THE TARGET</Text>

        <PrimaryhspinlynfczlbutbButton label="PLAY NOW" Icon={Play} onPress={onPlay} height={60} />

        <View style={styles.secondRow}>
          <SecondaryhspinlynfczlbutbButton label="PATTERNS" onPress={onPatterns} />
          <SecondaryhspinlynfczlbutbButton label="HOW TO" onPress={onHowTo} />
        </View>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {flex: 1, backgroundColor: C.bg},
  stage: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  badge: {
    position: 'absolute',
    top: 52,
    right: 16,
    height: 34,
    borderRadius: 17,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(113,64,166,0.22)',
    borderWidth: 1,
    borderColor: 'rgba(232,186,72,0.45)',
  },
  badgeText: {
    color: C.gold,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    lineHeight: 16,
    fontVariant: ['tabular-nums' as const],
  },
  art: {alignItems: 'center', justifyContent: 'center'},
  heroImg: {width: 218, height: 218},
  sheet: {
    backgroundColor: 'rgba(31,26,43,0.92)',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderTopWidth: 1,
    borderColor: 'rgba(243,230,214,0.10)',
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 26,
    shadowColor: '#7140A6',
    shadowOpacity: 0.5,
    shadowRadius: 24,
    shadowOffset: {width: 0, height: -8},
    elevation: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 3,
    color: C.text,
  },
  tagline: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    color: 'rgba(243,230,214,0.60)',
    marginBottom: 14,
  },
  chips: {flexDirection: 'row', gap: 12, marginBottom: 14},
  hint: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.textFaint,
    marginBottom: 12,
  },
  secondRow: {flexDirection: 'row', gap: 12, marginTop: 14},
});

/* obfuscation-batch:v9 */

/* autosetup-game-stamp:v1 */
function hspinlynfczlbutbGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function hspinlynfczlbutbGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function hspinlynfczlbutbGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void hspinlynfczlbutbGameMixSeed(3, 7);
void hspinlynfczlbutbGameFoldRange([1, 2, 3]);
void hspinlynfczlbutbGameClampSpan(5, 0, 10);

/* obfuscation-batch:v9 */
function MenuhspinlynfczlbutbScreenObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function MenuhspinlynfczlbutbScreenObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function MenuhspinlynfczlbutbScreenObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
