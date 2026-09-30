import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

type Props = {
  w: number;
  h: number;
  count?: number;
  tint?: string;
};

/** Hard ceiling. Every dot is a native RNSVG shadow node; a few hundred of
 *  them mounted synchronously stall the UI thread and the app never reaches
 *  the foreground (ANR at startup). Texture reads the same at ~90. */
const MAX_DOTS = 120;

/** Deterministic dust/grain overlay. Static on purpose — nothing animates,
 *  so it never keeps the window busy, it only adds texture and film grain.
 *  Mounts one frame LATE so the first frame paints before the SVG tree is
 *  built. */
export function GrainField({w, h, count = 90, tint = '#F3E6D6'}: Props) {
  const [ready, setReady] = useState(false);
  const n = Math.min(count, MAX_DOTS);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const dots = useMemo(() => {
    if (!ready) {
      return [];
    }
    let seed = 0x9e3779b9;
    const rnd = () => {
      seed ^= seed << 13;
      seed ^= seed >>> 17;
      seed ^= seed << 5;
      return ((seed >>> 0) % 100000) / 100000;
    };
    const out: {x: number; y: number; r: number; o: number}[] = [];
    for (let i = 0; i < n; i++) {
      out.push({
        x: rnd() * w,
        y: rnd() * h,
        r: 0.9 + rnd() * 1.4,
        o: 0.06 + rnd() * 0.1,
      });
    }
    return out;
  }, [w, h, n, ready]);

  if (!ready) {
    return null;
  }

  return (
    <View pointerEvents="none" style={styles.wrap}>
      <Svg width={w} height={h}>
        {dots.map((d, i) => (
          <Circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={d.r}
            fill={tint}
            fillOpacity={d.o}
          />
        ))}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {...StyleSheet.absoluteFillObject},
});
