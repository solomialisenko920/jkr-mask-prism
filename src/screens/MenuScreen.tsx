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
import {C} from '../constants/theme';
import {MOVES_TOTAL} from '../constants/config';
import {PrimaryButton} from '../components/PrimaryButton';
import {SecondaryButton} from '../components/SecondaryButton';
import {Chip} from '../components/Chip';
import {StageCurtain} from '../components/StageCurtain';
import {IMAGES, SPRITES} from '../assets';

const {width: SCREEN_W} = Dimensions.get('window');

type Props = {
  best: number;
  patternIndex: number;
  onPlay: () => void;
  onPatterns: () => void;
  onHowTo: () => void;
};

export function MenuScreen({
  best,
  patternIndex,
  onPlay,
  onPatterns,
  onHowTo,
}: Props) {
  const sheetIn = useRef(new Animated.Value(0)).current;
  const artIn = useRef(new Animated.Value(0)).current;
  const badgeIn = useRef(new Animated.Value(0)).current;
  const breathe = useRef(new Animated.Value(0)).current;

  useEffect(() => {
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
      <StageCurtain />

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
          <Chip label={label} Icon={Layers} color={C.teal} />
          <Chip label={`${MOVES_TOTAL} MOVES`} Icon={RotateCw} color={C.gold} />
        </View>

        <Text style={styles.hint}>TAP A RING {'·'} TURN IT {'·'} MATCH THE TARGET</Text>

        <PrimaryButton label="PLAY NOW" Icon={Play} onPress={onPlay} height={60} />

        <View style={styles.secondRow}>
          <SecondaryButton label="PATTERNS" onPress={onPatterns} />
          <SecondaryButton label="HOW TO" onPress={onHowTo} />
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
