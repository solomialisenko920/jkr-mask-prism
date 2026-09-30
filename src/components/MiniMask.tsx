import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {SEGMENTS} from '../constants/config';
import {arcPath, MINI_RINGS, segmentCentre} from '../game/mask';
import {rotateLayer} from '../game/puzzle';
import type {PatternDef} from '../game/patterns';
import {C, LAYER_COLORS} from '../constants/theme';

type Props = {
  pattern: PatternDef;
  size: number;
  angles?: number[];
  glow?: boolean;
};

const SEG_LIST = new Array(SEGMENTS).fill(0).map((_, i) => i);

/** Static mirror of the board: target card, pattern grid and result screen.
 *  Returns a FLAT element list — no Fragments nested inside <Svg>. */
export function MiniMask({pattern, size, angles, glow = false}: Props) {
  const parts: React.ReactElement[] = [];

  MINI_RINGS.forEach((ring, li) => {
    const rot = angles ? angles[li] : 0;
    const values = rotateLayer(pattern.layers[li], rot);
    const color = LAYER_COLORS[li];
    SEG_LIST.forEach(si => {
      const v = values[si];
      parts.push(
        <Path
          key={`arc-${li}-${si}`}
          d={arcPath(ring.radius, si, 6)}
          stroke={color}
          strokeOpacity={v === 0 ? 0.2 : 0.95}
          strokeWidth={ring.width}
          strokeLinecap="butt"
          fill="none"
        />,
      );
      if (v === 2) {
        const centre = segmentCentre(ring.radius, si);
        parts.push(
          <Circle
            key={`mark-${li}-${si}`}
            cx={centre.x}
            cy={centre.y}
            r={ring.markerR}
            fill={C.gold}
          />,
        );
      }
    });
  });

  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      {glow ? (
        <Circle
          key="glow"
          cx={50}
          cy={50}
          r={46}
          stroke={C.gold}
          strokeOpacity={0.55}
          strokeWidth={1.4}
          fill="none"
        />
      ) : null}
      {parts}
      <Circle
        key="hub"
        cx={50}
        cy={50}
        r={6}
        fill={C.surfaceHi}
        stroke={C.gold}
        strokeOpacity={0.6}
        strokeWidth={1}
      />
    </Svg>
  );
}
