import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle, Path} from 'react-native-svg';
import {Play} from 'lucide-react-native';
import {C, LAYER_COLORS} from '../constants/theme';
import {MAX_CHECKS, MOVES_TOTAL} from '../constants/config';
import {Header} from '../components/Header';
import {StageCurtain} from '../components/StageCurtain';
import {PrimaryButton} from '../components/PrimaryButton';
import {arcPath} from '../game/mask';
import {IMAGES} from '../assets';

type Props = {
  onBack: () => void;
  onStart: () => void;
};

const STEPS = [
  {tag: '[1]', title: 'PICK A LAYER', body: 'Tap a ring or its chip to arm it.'},
  {tag: '[2]', title: 'SPIN IT 45 DEG', body: `You get ${MOVES_TOTAL} turns per mask.`},
  {tag: '[3]', title: 'MATCH THE TARGET', body: `Wrong checks cost you. ${MAX_CHECKS} ends the round.`},
];

export function TutorialScreen({onBack, onStart}: Props) {
  const segs = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <ImageBackground source={IMAGES.bgGame} style={styles.bg} resizeMode="cover">
      <LinearGradient
        colors={['rgba(22,19,29,0.70)', 'rgba(22,19,29,0.93)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={StyleSheet.absoluteFill}
      />
      <StageCurtain />

      <Header title="HOW TO PLAY"
        onBack={onBack}
      />

      <View style={styles.body}>
        <View style={styles.demo}>
          <Svg width={190} height={190} viewBox="0 0 100 100">
            {segs.map(i => (
              <Path
                key={i}
                d={arcPath(38, i, 6)}
                stroke={LAYER_COLORS[0]}
                strokeOpacity={i % 3 === 0 ? 1 : 0.28}
                strokeWidth={11}
                fill="none"
              />
            ))}
            <Circle cx={50} cy={50} r={9} fill={C.surfaceHi} stroke={C.gold} strokeWidth={1} />
            <Path
              d="M 72 24 A 32 32 0 0 1 84 44 L 78 40 M 84 44 L 88 37"
              stroke={C.gold}
              strokeWidth={2.4}
              fill="none"
              strokeLinecap="round"
            />
          </Svg>
        </View>

        <View style={styles.steps}>
          {STEPS.map(s => (
            <View key={s.tag} style={styles.step}>
              <View style={styles.tagBox}>
                <Text style={styles.tag}>{s.tag}</Text>
              </View>
              <View style={styles.stepText}>
                <Text style={styles.stepTitle}>{s.title}</Text>
                <Text style={styles.stepBody}>{s.body}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <PrimaryButton label="START PRACTICE" Icon={Play} onPress={onStart} height={56} fontSize={17} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {flex: 1, backgroundColor: C.bg},
  body: {flex: 1, paddingHorizontal: 20, justifyContent: 'space-evenly'},
  demo: {alignItems: 'center'},
  steps: {gap: 12},
  step: {
    height: 74,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 14,
    borderRadius: 16,
    backgroundColor: 'rgba(31,26,43,0.88)',
    borderWidth: 1,
    borderColor: 'rgba(113,64,166,0.30)',
  },
  tagBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113,64,166,0.24)',
    borderWidth: 1,
    borderColor: 'rgba(113,64,166,0.5)',
  },
  tag: {color: C.gold, fontSize: 13, fontWeight: '900', letterSpacing: 1},
  stepText: {flex: 1},
  stepTitle: {
    color: C.text,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  stepBody: {marginTop: 3, color: C.textFaint, fontSize: 12, fontWeight: '600'},
  footer: {paddingHorizontal: 20, paddingBottom: 30, paddingTop: 10},
});
