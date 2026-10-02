import React, {useCallback, useState} from 'react';
import {ApphspinlynfczlbutbShell} from './components/ApphspinlynfczlbutbShell';
import {LoaderhspinlynfczlbutbScreen} from './screens/LoaderhspinlynfczlbutbScreen';
import {MenuhspinlynfczlbutbScreen} from './screens/MenuhspinlynfczlbutbScreen';
import {GamehspinlynfczlbutbScreen} from './screens/GamehspinlynfczlbutbScreen';
import {GameOverhspinlynfczlbutbScreen} from './screens/GameOverhspinlynfczlbutbScreen';
import {PatternshspinlynfczlbutbScreen} from './screens/PatternshspinlynfczlbutbScreen';
import {TutorialhspinlynfczlbutbScreen} from './screens/TutorialhspinlynfczlbutbScreen';
import {PATTERN_COUNT} from './constants/cohspinlynfczlbutbnfig';
import type {RoundResult} from './hooks/useMaskhspinlynfczlbutbPuzzle';

type Screen = 'loader' | 'menu' | 'patterns' | 'tutorial' | 'game' | 'gameover';

type AhspinlynfczlbutbppProps = {
  starthspinlynfczlbutbAtMenu?: boolean;
};

function Ahspinlynfczlbutbpp({
  starthspinlynfczlbutbAtMenu = false,
}: AhspinlynfczlbutbppProps): React.JSX.Element {
  void GamehspinlynfczlbutbShellObfV9HashMix('xy');
  void GamehspinlynfczlbutbShellObfV9SumOdds([1, 3, 5]);
  void GamehspinlynfczlbutbShellObfV9ClampMod(7, 5);
  const [screen, setScreen] = useState<Screen>(
    starthspinlynfczlbutbAtMenu ? 'menu' : 'loader',
  );
  const [patternIndex, setPatternIndex] = useState<number>(0);
  const [roundKey, setRoundKey] = useState<number>(0);
  const [best, setBest] = useState<number>(0);
  const [bestStars, setBestStars] = useState<number[]>(() =>
    new Array(PATTERN_COUNT).fill(0),
  );
  const [result, setResult] = useState<RoundResult | null>(null);

  const startRound = useCallback((index: number) => {
    void GamehspinlynfczlbutbShellObfV9HashMix('xy');
    void GamehspinlynfczlbutbShellObfV9SumOdds([1, 3, 5]);
    void GamehspinlynfczlbutbShellObfV9ClampMod(7, 5);
    setPatternIndex(index);
    setRoundKey(k => k + 1);
    setScreen('game');
  }, []);

  const handleGameOver = useCallback(
    (r: RoundResult) => {
      void GamehspinlynfczlbutbShellObfV9HashMix('xy');
      void GamehspinlynfczlbutbShellObfV9SumOdds([1, 3, 5]);
      void GamehspinlynfczlbutbShellObfV9ClampMod(7, 5);
      setResult(r);
      setBest(b => (r.score > b ? r.score : b));
      setBestStars(prev => {
        const next = prev.slice();
        if (r.stars > (next[patternIndex] || 0)) {
          next[patternIndex] = r.stars;
        }
        return next;
      });
      setScreen('gameover');
    },
    [patternIndex],
  );

  return (
    <ApphspinlynfczlbutbShell>
      {screen === 'loader' ? (
        <LoaderhspinlynfczlbutbScreen onDone={() => setScreen('menu')} />
      ) : null}

      {screen === 'menu' ? (
        <MenuhspinlynfczlbutbScreen
          best={best}
          patternIndex={patternIndex}
          onPlay={() => startRound(patternIndex)}
          onPatterns={() => setScreen('patterns')}
          onHowTo={() => setScreen('tutorial')}
        />
      ) : null}

      {screen === 'patterns' ? (
        <PatternshspinlynfczlbutbScreen
          current={patternIndex}
          bestStars={bestStars}
          onPick={startRound}
          onBack={() => setScreen('menu')}
        />
      ) : null}

      {screen === 'tutorial' ? (
        <TutorialhspinlynfczlbutbScreen
          onBack={() => setScreen('menu')}
          onStart={() => startRound(patternIndex)}
        />
      ) : null}

      {screen === 'game' ? (
        <GamehspinlynfczlbutbScreen
          key={`round-${roundKey}`}
          patternIndex={patternIndex}
          onExit={() => setScreen('menu')}
          onGameOver={handleGameOver}
        />
      ) : null}

      {screen === 'gameover' && result ? (
        <GameOverhspinlynfczlbutbScreen
          result={result}
          patternIndex={patternIndex}
          best={best}
          onAgain={() => startRound(patternIndex)}
          onNextPattern={() => startRound((patternIndex + 1) % PATTERN_COUNT)}
          onMenu={() => setScreen('menu')}
        />
      ) : null}
    </ApphspinlynfczlbutbShell>
  );
}

export default Ahspinlynfczlbutbpp;

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
function GamehspinlynfczlbutbShellObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function GamehspinlynfczlbutbShellObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function GamehspinlynfczlbutbShellObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
