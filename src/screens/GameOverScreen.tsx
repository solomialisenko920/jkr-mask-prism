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
import {RotateCw} from 'lucide-react-native';
import {C} from '../constants/theme';
import {MiniMask} from '../components/MiniMask';
import {StatCard} from '../components/StatCard';
import {StarRating} from '../components/StarRating';
import {StageCurtain} from '../components/StageCurtain';
import {PrimaryButton} from '../components/PrimaryButton';
import {SecondaryButton} from '../components/SecondaryButton';
import {getPattern} from '../game/patterns';
import type {RoundResult} from '../hooks/useMaskPuzzle';
import {IMAGES} from '../assets';

const {width: SCREEN_W} = Dimensions.get('window');

type Props = {
  result: RoundResult;
  patternIndex: number;
  best: number;
  onAgain: () => void;
  onNextPattern: () => void;
  onMenu: () => void;
};

export function GameOverScreen({
  result,
  patternIndex,
  best,
  onAgain,
  onNextPattern,
  onMenu,
}: Props) {
  const maskIn = useRef(new Animated.Value(0)).current;
  const titleIn = useRef(new Animated.Value(0)).current;
  const starsIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(maskIn, {
        toValue: 1,
        tension: 50,
        friction: 9,
        useNativeDriver: true,
      }),
      Animated.timing(titleIn, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(starsIn, {
        toValue: 1,
        duration: 360,
        delay: 240,
        useNativeDriver: true,
      }),
    ]).start();
  }, [maskIn, titleIn, starsIn]);

  const won = result.won;
  const pattern = getPattern(patternIndex);
  const maskScale = maskIn.interpolate({inputRange: [0, 1], outputRange: [0.85, 1]});
  const titleShift = titleIn.interpolate({inputRange: [0, 1], outputRange: [20, 0]});

  return (
    <ImageBackground source={IMAGES.bgGame} style={styles.bg} resizeMode="cover">
      <LinearGradient
        colors={['rgba(22,19,29,0.80)', 'rgba(22,19,29,0.96)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      {won ? (
        <View pointerEvents="none" style={StyleSheet.absoluteFill}>
          <Svg width={SCREEN_W} height={460}>
            <Circle cx={SCREEN_W / 2} cy={230} r={210} fill={C.gold} fillOpacity={0.16} />
          </Svg>
        </View>
      ) : null}
      <StageCurtain />

      <View style={styles.body}>
        <Animated.View
          pointerEvents="none"
          style={{opacity: titleIn, transform: [{translateY: titleShift}]}}>
          <Text style={[styles.title, won ? styles.titleWin : styles.titleLose]}>
            {won ? 'YOU WON!' : 'NO LUCK!'}
          </Text>
          <Text style={styles.subtitle}>
            {won ? 'THE FACE IS COMPLETE' : 'THE LAYERS NEVER LINED UP'}
          </Text>
        </Animated.View>

        <Animated.View
          pointerEvents="none"
          style={[styles.maskWrap, {transform: [{scale: maskScale}]}]}>
          <MiniMask pattern={pattern} size={168} angles={result.angles} glow={won} />
        </Animated.View>

        <Animated.View pointerEvents="none" style={{opacity: starsIn}}>
          <StarRating stars={result.stars} />
        </Animated.View>

        <View style={styles.statsRow}>
          <View style={styles.statSlot}>
            <StatCard value={`${result.movesLeft}`} label="MOVES LEFT" valueColor={C.teal} />
          </View>
          <View style={styles.statSlot}>
            <StatCard value={`${result.checks}`} label="CHECKS" valueColor={C.crimson} />
          </View>
          <View style={styles.statSlot}>
            <StatCard value={`${result.score}`} label="SCORE" valueColor={C.gold} />
          </View>
        </View>

        <Text style={styles.bestLine}>BEST SCORE {Math.max(best, result.score)}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.hint}>TAP SPIN AGAIN TO RETRY</Text>
        <PrimaryButton label="SPIN AGAIN" Icon={RotateCw} onPress={onAgain} height={60} />
        <View style={styles.secondRow}>
          <SecondaryButton label="NEXT PATTERN" onPress={onNextPattern} />
          <SecondaryButton label="MENU" onPress={onMenu} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {flex: 1, backgroundColor: C.bg},
  body: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: 3,
    textAlign: 'center',
    textShadowRadius: 20,
    textShadowOffset: {width: 0, height: 0},
  },
  titleWin: {color: C.gold, textShadowColor: 'rgba(232,186,72,0.75)'},
  titleLose: {color: C.crimson, textShadowColor: 'rgba(210,58,96,0.65)'},
  subtitle: {
    marginTop: 10,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    textAlign: 'center',
    color: C.textFaint,
  },
  maskWrap: {alignItems: 'center', justifyContent: 'center'},
  statsRow: {flexDirection: 'row', gap: 10, width: '100%'},
  statSlot: {flex: 1},
  bestLine: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2.5,
    color: C.textDim,
    fontVariant: ['tabular-nums' as const],
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 26,
    paddingTop: 14,
    backgroundColor: 'rgba(31,26,43,0.92)',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    borderColor: 'rgba(243,230,214,0.10)',
  },
  hint: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.5,
    color: C.textFaint,
    textAlign: 'center',
    marginBottom: 10,
  },
  secondRow: {flexDirection: 'row', gap: 12, marginTop: 12},
});
