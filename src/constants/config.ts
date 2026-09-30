// Tunable gameplay + capture-window constants for JkrMaskPrism.

/** Splash duration. Exactly 8000 — shorter races the UI-capture agent. */
export const LOADER_DURATION_MS = 8000;
/** Progress-bar tween is SHORT on purpose: a long tween keeps the window
 *  non-idle for 8s and stalls uiautomator, so the bar settles in 1.2s. */
export const LOADER_BAR_ANIM_MS = 1200;

export const SEGMENTS = 8;
export const LAYERS = 3;
export const MOVES_TOTAL = 8;
export const MAX_CHECKS = 3;
export const MAX_UNDO = 3;

/** Solvability budget: total spins needed to align all three layers. */
export const MIN_START_DISTANCE = 3;
export const MAX_START_DISTANCE = 5;

export const PATTERN_COUNT = 6;

export const SPIN_ANIM_MS = 320;
export const CELEBRATION_MS = 900;
export const LOSE_FADE_MS = 420;
export const MATCH_PULSE_MS = 380;
export const SHAKE_PHASE_MS = 65;

/** Armed once on GameScreen mount and never re-armed, so a passive test
 *  runner always gets a result frame even if it never finishes the puzzle. */
export const IDLE_RESULT_MS = 40000;
