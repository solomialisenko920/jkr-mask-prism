import React, {useCallback, useState} from 'react';
import {AppShell} from './src/components/AppShell';
import {LoaderScreen} from './src/screens/LoaderScreen';
import {MenuScreen} from './src/screens/MenuScreen';
import {GameScreen} from './src/screens/GameScreen';
import {GameOverScreen} from './src/screens/GameOverScreen';
import {PatternsScreen} from './src/screens/PatternsScreen';
import {TutorialScreen} from './src/screens/TutorialScreen';
import {PATTERN_COUNT} from './src/constants/config';
import type {RoundResult} from './src/hooks/useMaskPuzzle';

type Screen = 'loader' | 'menu' | 'patterns' | 'tutorial' | 'game' | 'gameover';

function App(): React.JSX.Element {
  const [screen, setScreen] = useState<Screen>('loader');
  const [patternIndex, setPatternIndex] = useState<number>(0);
  const [roundKey, setRoundKey] = useState<number>(0);
  const [best, setBest] = useState<number>(0);
  const [bestStars, setBestStars] = useState<number[]>(() =>
    new Array(PATTERN_COUNT).fill(0),
  );
  const [result, setResult] = useState<RoundResult | null>(null);

  const startRound = useCallback((index: number) => {
    setPatternIndex(index);
    setRoundKey(k => k + 1);
    setScreen('game');
  }, []);

  const handleGameOver = useCallback(
    (r: RoundResult) => {
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
    <AppShell>
      {screen === 'loader' ? (
        <LoaderScreen onDone={() => setScreen('menu')} />
      ) : null}

      {screen === 'menu' ? (
        <MenuScreen
          best={best}
          patternIndex={patternIndex}
          onPlay={() => startRound(patternIndex)}
          onPatterns={() => setScreen('patterns')}
          onHowTo={() => setScreen('tutorial')}
        />
      ) : null}

      {screen === 'patterns' ? (
        <PatternsScreen
          current={patternIndex}
          bestStars={bestStars}
          onPick={startRound}
          onBack={() => setScreen('menu')}
        />
      ) : null}

      {screen === 'tutorial' ? (
        <TutorialScreen
          onBack={() => setScreen('menu')}
          onStart={() => startRound(patternIndex)}
        />
      ) : null}

      {screen === 'game' ? (
        <GameScreen
          key={`round-${roundKey}`}
          patternIndex={patternIndex}
          onExit={() => setScreen('menu')}
          onGameOver={handleGameOver}
        />
      ) : null}

      {screen === 'gameover' && result ? (
        <GameOverScreen
          result={result}
          patternIndex={patternIndex}
          best={best}
          onAgain={() => startRound(patternIndex)}
          onNextPattern={() => startRound((patternIndex + 1) % PATTERN_COUNT)}
          onMenu={() => setScreen('menu')}
        />
      ) : null}
    </AppShell>
  );
}

export default App;
