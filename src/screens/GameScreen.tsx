import React, {useCallback, useEffect, useRef} from 'react';
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
import {RotateCw, Undo2} from 'lucide-react-native';
import {C} from '../constants/theme';
import {Header} from '../components/Header';
import {MaskBoard} from '../components/MaskBoard';
import {MiniMask} from '../components/MiniMask';
import {LayerSelector} from '../components/LayerSelector';
import {StatStrip} from '../components/StatStrip';
import {PrimaryButton} from '../components/PrimaryButton';
import {SecondaryButton} from '../components/SecondaryButton';
import {getPattern} from '../game/patterns';
import {useMaskPuzzle, RoundResult} from '../hooks/useMaskPuzzle';
import {scoreRound} from '../game/puzzle';
import {IMAGES} from '../assets';

const {width: SCREEN_W, height: SCREEN_H} = Dimensions.get('window');

const HEADER_H = 116;
const STRIP_H = 52;
const CONTROLS_H = 160;
const TARGET_H = 92;
const SELECTOR_H = 48;

const VERT_ROOM =
  SCREEN_H - HEADER_H - STRIP_H - CONTROLS_H - TARGET_H - SELECTOR_H - 60;
const BOARD_W = Math.max(
  200,
  Math.min(Math.min(SCREEN_W - 32, 380), Math.floor(VERT_ROOM)),
);

type Props = {
  patternIndex: number;
  onExit: () => void;
  onGameOver: (result: RoundResult) => void;
};

export function GameScreen({patternIndex, onExit, onGameOver}: Props) {
  const pattern = getPattern(patternIndex);
  const puzzle = useMaskPuzzle({onFinish: onGameOver});
  const enter = useRef(new Animated.Value(0)).current;
  const movePulse = useRef(new Animated.Value(1)).current;
  const firstMove = useRef(true);

  useEffect(() => {
    Animated.timing(enter, {
      toValue: 1,
      duration: 260,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [enter]);

  useEffect(() => {
    if (firstMove.current) {
      firstMove.current = false;
      return;
    }
    Animated.sequence([
      Animated.timing(movePulse, {toValue: 1.18, duration: 110, useNativeDriver: true}),
      Animated.timing(movePulse, {toValue: 1, duration: 110, useNativeDriver: true}),
    ]).start();
  }, [puzzle.moves, movePulse]);

  const boardScale = enter.interpolate({inputRange: [0, 1], outputRange: [0.92, 1]});
  const liveScore = scoreRound(true, puzzle.moves, puzzle.checks);

  const handleSpin = useCallback(() => {
    puzzle.spin();
  }, [puzzle]);

  const headerTitle = `PATTERN ${String(patternIndex + 1).padStart(2, '0')}`;

  return (
    <ImageBackground source={IMAGES.bgGame} style={styles.bg} resizeMode="cover">
      <LinearGradient
        colors={['rgba(22,19,29,0.62)', 'rgba(22,19,29,0.88)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={StyleSheet.absoluteFill}
      />

      <Header title={headerTitle}
        onBack={onExit}
        right={
          <Animated.View
            pointerEvents="none"
            style={{transform: [{scale: movePulse}]}}>
            <Text style={styles.moves}>MOVES {puzzle.moves}</Text>
          </Animated.View>
        }
      />

      <View style={styles.area}>
        <View style={styles.targetRow}>
          <View style={styles.targetCard}>
            <MiniMask pattern={pattern} size={62} glow />
            <Text style={styles.targetLabel}>TARGET</Text>
          </View>
        </View>

        <Animated.View
          pointerEvents="box-none"
          style={{opacity: enter, transform: [{scale: boardScale}]}}>
          <MaskBoard
            pattern={pattern}
            angles={puzzle.angles}
            activeLayer={puzzle.activeLayer}
            matched={puzzle.matched}
            size={BOARD_W}
            status={puzzle.status}
            shakeTick={puzzle.shakeTick}
            onSelectLayer={puzzle.selectLayer}
          />
        </Animated.View>

        <LayerSelector
          active={puzzle.activeLayer}
          matched={puzzle.matched}
          onSelect={puzzle.selectLayer}
        />
      </View>

      <StatStrip
        layersDone={puzzle.matchedCount}
        checks={puzzle.checks}
        score={liveScore}
      />

      <View style={styles.controls}>
        <View style={styles.row}>
          <SecondaryButton
            label="UNDO"
            Icon={Undo2}
            height={52}
            disabled={!puzzle.canUndo}
            onPress={puzzle.undo}
          />
          <View style={styles.spinSlot}>
            <PrimaryButton label="SPIN" Icon={RotateCw} onPress={handleSpin} height={60} />
          </View>
        </View>
        <View style={styles.row2}>
          <SecondaryButton
            label="CHECK MASK"
            height={52}
            tint={C.teal}
            onPress={puzzle.check}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {flex: 1, backgroundColor: C.bg},
  moves: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1.5,
    lineHeight: 20,
    color: C.gold,
    fontVariant: ['tabular-nums' as const],
  },
  area: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  targetRow: {width: '100%', alignItems: 'flex-end'},
  targetCard: {
    width: TARGET_H,
    height: TARGET_H,
    borderRadius: 16,
    backgroundColor: 'rgba(31,26,43,0.85)',
    borderWidth: 1,
    borderColor: 'rgba(232,186,72,0.38)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 6},
    elevation: 8,
  },
  targetLabel: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 2,
    color: C.gold,
    marginTop: 1,
  },
  controls: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
    backgroundColor: 'rgba(31,26,43,0.94)',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  row: {flexDirection: 'row', alignItems: 'center', gap: 12},
  row2: {flexDirection: 'row', marginTop: 12},
  spinSlot: {flex: 1.4},
});
