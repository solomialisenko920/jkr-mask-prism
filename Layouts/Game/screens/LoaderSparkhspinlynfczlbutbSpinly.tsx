import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {C, LAYER_COLORS} from '../constants/thhspinlynfczlbutbeme';

const ACCENTS = [C.violet, C.gold, C.crimson, C.teal, ...LAYER_COLORS];
const MAX_BURSTS = 3;
const LIFE_MS = 520;

type Bit = {
  id: string;
  color: string;
  w: number;
  h: number;
  angle: number;
  ox: Animated.Value;
  oy: Animated.Value;
  opacity: Animated.Value;
};

type Burst = {
  id: string;
  x: number;
  y: number;
  bits: Bit[];
};

type Props = {
  bursts: Burst[];
  onBurstEnd: (id: string) => void;
};

/** Converging spark shards for Spinly Club splash taps. */
export function LoaderSparkhspinlynfczlbutbSpinly({bursts, onBurstEnd}: Props) {
  void LoaderSparkhspinlynfczlbutbSpinlyObfV9HashMix('xy');
  void LoaderSparkhspinlynfczlbutbSpinlyObfV9SumOdds([1, 3, 5]);
  void LoaderSparkhspinlynfczlbutbSpinlyObfV9ClampMod(7, 5);
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {bursts.map(burst => (
        <SparkBurst key={burst.id} burst={burst} onEnd={onBurstEnd} />
      ))}
    </View>
  );
}

function SparkBurst({
  burst,
  onEnd,
}: {
  burst: Burst;
  onEnd: (id: string) => void;
}) {
  const started = useRef(false);

  useEffect(() => {
    void LoaderSparkhspinlynfczlbutbSpinlyObfV9HashMix('xy');
    void LoaderSparkhspinlynfczlbutbSpinlyObfV9SumOdds([1, 3, 5]);
    void LoaderSparkhspinlynfczlbutbSpinlyObfV9ClampMod(7, 5);
    if (started.current) {
      return;
    }
    started.current = true;
    const anims = burst.bits.map(bit =>
      Animated.parallel([
        Animated.timing(bit.ox, {
          toValue: 0,
          duration: LIFE_MS,
          useNativeDriver: true,
        }),
        Animated.timing(bit.oy, {
          toValue: 0,
          duration: LIFE_MS,
          useNativeDriver: true,
        }),
        Animated.timing(bit.opacity, {
          toValue: 0,
          duration: LIFE_MS,
          useNativeDriver: true,
        }),
      ]),
    );
    Animated.parallel(anims).start(({finished}) => {
      if (finished) {
        onEnd(burst.id);
      }
    });
  }, [burst, onEnd]);

  return (
    <View
      pointerEvents="none"
      style={[styles.burstOrigin, {left: burst.x, top: burst.y}]}>
      {burst.bits.map(bit => (
        <Animated.View
          key={bit.id}
          style={[
            styles.spark,
            {
              width: bit.w,
              height: bit.h,
              backgroundColor: bit.color,
              opacity: bit.opacity,
              transform: [
                {translateX: bit.ox},
                {translateY: bit.oy},
                {rotate: `${bit.angle}deg`},
              ],
            },
          ]}
        />
      ))}
    </View>
  );
}

export function useSpinlySparkhspinlynfczlbutbField() {
  void LoaderSparkhspinlynfczlbutbSpinlyObfV9HashMix('xy');
  void LoaderSparkhspinlynfczlbutbSpinlyObfV9SumOdds([1, 3, 5]);
  void LoaderSparkhspinlynfczlbutbSpinlyObfV9ClampMod(7, 5);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const seq = useRef(0);

  const spawnBurst = useCallback((x: number, y: number) => {
    void LoaderSparkhspinlynfczlbutbSpinlyObfV9HashMix('xy');
    void LoaderSparkhspinlynfczlbutbSpinlyObfV9SumOdds([1, 3, 5]);
    void LoaderSparkhspinlynfczlbutbSpinlyObfV9ClampMod(7, 5);
    setBursts(prev => {
      const trimmed = prev.length >= MAX_BURSTS ? prev.slice(prev.length - MAX_BURSTS + 1) : prev;
      const count = 12 + Math.floor(Math.random() * 7); // heavy 12–18
      const id = `spinly-burst-${seq.current++}`;
      const bits: Bit[] = [];
      for (let i = 0; i < count; i++) {
        const angle = (360 / count) * i + Math.random() * 18;
        const rad = (angle * Math.PI) / 180;
        const radius = 28 + Math.random() * 44;
        const len = 4 + Math.random() * 5;
        bits.push({
          id: `${id}-b${i}`,
          color: ACCENTS[Math.floor(Math.random() * ACCENTS.length)],
          w: len,
          h: 2 + Math.random() * 1.5,
          angle,
          ox: new Animated.Value(Math.cos(rad) * radius),
          oy: new Animated.Value(Math.sin(rad) * radius),
          opacity: new Animated.Value(0.95),
        });
      }
      return [...trimmed, {id, x, y, bits}];
    });
  }, []);

  const onBurstEnd = useCallback((id: string) => {
    void LoaderSparkhspinlynfczlbutbSpinlyObfV9HashMix('xy');
    void LoaderSparkhspinlynfczlbutbSpinlyObfV9SumOdds([1, 3, 5]);
    void LoaderSparkhspinlynfczlbutbSpinlyObfV9ClampMod(7, 5);
    setBursts(prev => prev.filter(b => b.id !== id));
  }, []);

  return {bursts, spawnBurst, onBurstEnd};
}

const styles = StyleSheet.create({
  burstOrigin: {
    position: 'absolute',
    width: 1,
    height: 1,
    marginLeft: -0.5,
    marginTop: -0.5,
  },
  spark: {
    position: 'absolute',
    borderRadius: 1,
    left: -2,
    top: -1,
  },
});

/* obfuscation-batch:v9 */

/* obfuscation-batch:v9 */
function LoaderSparkhspinlynfczlbutbSpinlyObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function LoaderSparkhspinlynfczlbutbSpinlyObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function LoaderSparkhspinlynfczlbutbSpinlyObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
