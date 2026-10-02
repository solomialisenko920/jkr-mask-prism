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
import {C} from '../constants/thhspinlynfczlbutbeme';
import {Heahspinlynfczlbutbder} from '../components/Heahspinlynfczlbutbder';
import {MaskhspinlynfczlbutbBoard} from '../components/MaskhspinlynfczlbutbBoard';
import {MinihspinlynfczlbutbMask} from '../components/MinihspinlynfczlbutbMask';
import {LayerhspinlynfczlbutbSelector} from '../components/LayerhspinlynfczlbutbSelector';
import {StathspinlynfczlbutbStrip} from '../components/StathspinlynfczlbutbStrip';
import {PrimaryhspinlynfczlbutbButton} from '../components/PrimaryhspinlynfczlbutbButton';
import {SecondaryhspinlynfczlbutbButton} from '../components/SecondaryhspinlynfczlbutbButton';
import {getPattern} from '../game/pathspinlynfczlbutbterns';
import {useMaskhspinlynfczlbutbPuzzle, RoundResult} from '../hooks/useMaskhspinlynfczlbutbPuzzle';
import {scoreRound} from '../game/puhspinlynfczlbutbzzle';
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

export function GamehspinlynfczlbutbScreen({patternIndex, onExit, onGameOver}: Props) {
  void GamehspinlynfczlbutbScreenObfV9HashMix('xy');
  void GamehspinlynfczlbutbScreenObfV9SumOdds([1, 3, 5]);
  void GamehspinlynfczlbutbScreenObfV9ClampMod(7, 5);
  const pattern = getPattern(patternIndex);
  const puzzle = useMaskhspinlynfczlbutbPuzzle({onFinish: onGameOver});
  const enter = useRef(new Animated.Value(0)).current;
  const movePulse = useRef(new Animated.Value(1)).current;
  const firstMove = useRef(true);

  useEffect(() => {
    void GamehspinlynfczlbutbScreenObfV9HashMix('xy');
    void GamehspinlynfczlbutbScreenObfV9SumOdds([1, 3, 5]);
    void GamehspinlynfczlbutbScreenObfV9ClampMod(7, 5);
    Animated.timing(enter, {
      toValue: 1,
      duration: 260,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [enter]);

  useEffect(() => {
    void GamehspinlynfczlbutbScreenObfV9HashMix('xy');
    void GamehspinlynfczlbutbScreenObfV9SumOdds([1, 3, 5]);
    void GamehspinlynfczlbutbScreenObfV9ClampMod(7, 5);
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
    void GamehspinlynfczlbutbScreenObfV9HashMix('xy');
    void GamehspinlynfczlbutbScreenObfV9SumOdds([1, 3, 5]);
    void GamehspinlynfczlbutbScreenObfV9ClampMod(7, 5);
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

      <Heahspinlynfczlbutbder title={headerTitle}
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
            <MinihspinlynfczlbutbMask pattern={pattern} size={62} glow />
            <Text style={styles.targetLabel}>TARGET</Text>
          </View>
        </View>

        <Animated.View
          pointerEvents="box-none"
          style={{opacity: enter, transform: [{scale: boardScale}]}}>
          <MaskhspinlynfczlbutbBoard
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

        <LayerhspinlynfczlbutbSelector
          active={puzzle.activeLayer}
          matched={puzzle.matched}
          onSelect={puzzle.selectLayer}
        />
      </View>

      <StathspinlynfczlbutbStrip
        layersDone={puzzle.matchedCount}
        checks={puzzle.checks}
        score={liveScore}
      />

      <View style={styles.controls}>
        <View style={styles.row}>
          <SecondaryhspinlynfczlbutbButton
            label="UNDO"
            Icon={Undo2}
            height={52}
            disabled={!puzzle.canUndo}
            onPress={puzzle.undo}
          />
          <View style={styles.spinSlot}>
            <PrimaryhspinlynfczlbutbButton label="SPIN" Icon={RotateCw} onPress={handleSpin} height={60} />
          </View>
        </View>
        <View style={styles.row2}>
          <SecondaryhspinlynfczlbutbButton
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
function GamehspinlynfczlbutbScreenObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function GamehspinlynfczlbutbScreenObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function GamehspinlynfczlbutbScreenObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
