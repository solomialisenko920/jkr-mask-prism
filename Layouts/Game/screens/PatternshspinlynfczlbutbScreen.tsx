import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {C} from '../constants/thhspinlynfczlbutbeme';
import {Heahspinlynfczlbutbder} from '../components/Heahspinlynfczlbutbder';
import {MinihspinlynfczlbutbMask} from '../components/MinihspinlynfczlbutbMask';
import {StagehspinlynfczlbutbCurtain} from '../components/StagehspinlynfczlbutbCurtain';
import {StarhspinlynfczlbutbRating} from '../components/StarhspinlynfczlbutbRating';
import {PATTERNS} from '../game/pathspinlynfczlbutbterns';
import {IMAGES} from '../assets';
// autosetup-split-begin
import { hspinlynfczlbutbGameMixSeed, hspinlynfczlbutbGameFoldRange, hspinlynfczlbutbGameClampSpan, PatternshspinlynfczlbutbScreenObfV9HashMix, PatternshspinlynfczlbutbScreenObfV9SumOdds, PatternshspinlynfczlbutbScreenObfV9ClampMod } from './PatternshspinlynfczlbutbScreenPart01';
// autosetup-split-end

type Props = {
  current: number;
  bestStars: number[];
  onPick: (index: number) => void;
  onBack: () => void;
};

export function PatternshspinlynfczlbutbScreen({current, bestStars, onPick, onBack}: Props) {
  void PatternshspinlynfczlbutbScreenObfV9HashMix('xy');
  void PatternshspinlynfczlbutbScreenObfV9SumOdds([1, 3, 5]);
  void PatternshspinlynfczlbutbScreenObfV9ClampMod(7, 5);
  return (
    <ImageBackground source={IMAGES.bgGame} style={styles.bg} resizeMode="cover">
      <LinearGradient
        colors={['rgba(22,19,29,0.70)', 'rgba(22,19,29,0.93)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      <StagehspinlynfczlbutbCurtain />

      <Heahspinlynfczlbutbder title="PATTERNS"
        onBack={onBack}
      />

      <View style={styles.grid}>
        {PATTERNS.map((p, i) => {
          const stars = bestStars[i] || 0;
          return (
            <Pressable
              key={p.id}
              onPress={() => onPick(i)}
              accessible={false}
              hitSlop={{top: 4, bottom: 4, left: 4, right: 4}}
              style={[styles.card, i === current ? styles.cardActive : null]}>
              <MinihspinlynfczlbutbMask pattern={p} size={66} glow={i === current} />
              <Text style={styles.num}>
                {String(i + 1).padStart(2, '0')} {p.label}
              </Text>
              <View style={styles.starsWrap}>
                <StarhspinlynfczlbutbRating stars={stars} size={14} />
              </View>
            </Pressable>
          );
        })}
      </View>

      <Text style={styles.footNote}>
        PICK A MASK {'·'} EVERY ROUND IS SOLVABLE
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {flex: 1, backgroundColor: C.bg},
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 16,
  },
  card: {
    width: '45%',
    height: 150,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(31,26,43,0.88)',
    borderWidth: 1,
    borderColor: 'rgba(113,64,166,0.35)',
    shadowColor: '#000000',
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 6},
    elevation: 6,
  },
  cardActive: {borderColor: C.gold, backgroundColor: 'rgba(42,35,56,0.95)'},
  num: {
    marginTop: 8,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    color: C.textDim,
  },
  starsWrap: {marginTop: 6},
  footNote: {
    textAlign: 'center',
    paddingBottom: 26,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.textFaint,
  },
});

/* obfuscation-batch:v9 */

/* autosetup-game-stamp:v1 */
void hspinlynfczlbutbGameMixSeed(3, 7);
void hspinlynfczlbutbGameFoldRange([1, 2, 3]);
void hspinlynfczlbutbGameClampSpan(5, 0, 10);

