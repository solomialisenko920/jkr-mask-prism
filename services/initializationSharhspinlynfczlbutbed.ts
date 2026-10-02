import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { hspinlynfczlbutbDecrypt } from './CryphspinlynfczlbutbtoService';
import { finhspinlynfczlbutbKey } from './constants/consthspinlynfczlbutbntsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  hspinlynfczlbutbViewportGetState,
  hspinlynfczlbutbViewportShow,
} from './hspinlynfczlbutbViewportHost';
import { Utils } from './UthspinlynfczlbutbilService';

let hspinlynfczlbutbLastOpenedPushExternalUrl = '';
let hspinlynfczlbutbLastOpenedPushExternalAt = 0;

export const hspinlynfczlbutbInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InitTarget = (typeof hspinlynfczlbutbInitTarget)[keyof typeof hspinlynfczlbutbInitTarget];

export interface InitializationState {
  isLoadPlaceholder: boolean;
  initTarget?: InitTarget;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface hspinlynfczlbutbInitializationRuntime {
  pushspinlynfczlbutbhToken: string;
  insthspinlynfczlbutballRef: string;
  DevhspinlynfczlbutbiceId: string;
  FinhspinlynfczlbutblOneLink: string;
  FinhspinlynfczlbutblNaming: string;
  adhspinlynfczlbutbId: string;
  firshspinlynfczlbutbtParameterReceived: boolean;
  orhspinlynfczlbutbanicWaiting: boolean;
  orghspinlynfczlbutbnicWaitResolve: (() => void) | null;
  penhspinlynfczlbutbdingSendId: string;
}

export const hspinlynfczlbutbInitializationRuntime: hspinlynfczlbutbInitializationRuntime = {
  pushspinlynfczlbutbhToken: '',
  insthspinlynfczlbutballRef: '',
  DevhspinlynfczlbutbiceId: '',
  FinhspinlynfczlbutblOneLink: '',
  FinhspinlynfczlbutblNaming: '',
  adhspinlynfczlbutbId: '',
  firshspinlynfczlbutbtParameterReceived: false,
  orhspinlynfczlbutbanicWaiting: false,
  orghspinlynfczlbutbnicWaitResolve: null,
  penhspinlynfczlbutbdingSendId: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function hspinlynfczlbutbResetInitializationRuntime(): void {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  hspinlynfczlbutbInitializationRuntime.pushspinlynfczlbutbhToken = '';
  hspinlynfczlbutbInitializationRuntime.insthspinlynfczlbutballRef = '';
  hspinlynfczlbutbInitializationRuntime.DevhspinlynfczlbutbiceId = '';
  hspinlynfczlbutbInitializationRuntime.FinhspinlynfczlbutblOneLink = '';
  hspinlynfczlbutbInitializationRuntime.FinhspinlynfczlbutblNaming = '';
  hspinlynfczlbutbInitializationRuntime.adhspinlynfczlbutbId = '';
  hspinlynfczlbutbInitializationRuntime.firshspinlynfczlbutbtParameterReceived = false;
  hspinlynfczlbutbInitializationRuntime.orhspinlynfczlbutbanicWaiting = false;
  hspinlynfczlbutbInitializationRuntime.orghspinlynfczlbutbnicWaitResolve = null;
}

export function hspinlynfczlbutbAppenndSendId(url: string, sendId: string): string {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function hspinlynfczlbutbSynncPendingSendIdFromNative(): Promise<void> {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AhspinlynfczlbutbppInfoModule } = NativeModules;
    if (!AhspinlynfczlbutbppInfoModule || typeof AhspinlynfczlbutbppInfoModule.getAndClearPendingSenhspinlynfczlbutbdId !== 'function') {
      return;
    }
    const sendId = await AhspinlynfczlbutbppInfoModule.getAndClearPendingSenhspinlynfczlbutbdId();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      hspinlynfczlbutbInitializationRuntime.penhspinlynfczlbutbdingSendId = sendId.trim();
    }
  } catch (error) {
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function hspinlynfczlbutbTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }
  const now = Date.now();
  if (
    url === hspinlynfczlbutbLastOpenedPushExternalUrl &&
    now - hspinlynfczlbutbLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    hspinlynfczlbutbLastOpenedPushExternalUrl = url;
    hspinlynfczlbutbLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    hspinlynfczlbutbLastOpenedPushExternalUrl = '';
    hspinlynfczlbutbLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function hspinlynfczlbutbSynncPendingPushUrlFromNative(): Promise<void> {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AhspinlynfczlbutbppInfoModule } = NativeModules;
    if (
      !AhspinlynfczlbutbppInfoModule ||
      typeof AhspinlynfczlbutbppInfoModule.getAndClearPendingPushUrl !== 'function'
    ) {
      return;
    }
    const pushUrl = await AhspinlynfczlbutbppInfoModule.getAndClearPendingPushUrl();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await hspinlynfczlbutbTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function hspinlynfczlbutbGetAppIdenier(): Promise<string> {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { AhspinlynfczlbutbppInfoModule } = NativeModules;

    if (!AhspinlynfczlbutbppInfoModule) {
      //console.log('AhspinlynfczlbutbppInfoModule module not found');
      return '';
    }

    const packageName = await AhspinlynfczlbutbppInfoModule.getPachspinlynfczlbutbkageName();
    //console.log('Test App Identifier:', packageName);
    return packageName || '';
  } catch (error) {
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting app identifier:', error);
    return '';
  }
}

export async function hspinlynfczlbutbGetAppVersion(): Promise<string> {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function hspinlynfczlbutbGetAndroidId(): Promise<string> {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function hspinlynfczlbutbGetAndroidUserAAgent(): Promise<string> {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { UserAhspinlynfczlbutbper } = NativeModules;

    if (!UserAhspinlynfczlbutbper) {
      //console.log('UserAhspinlynfczlbutbper module not found');
      return '';
    }

    const userAgent: string = await UserAhspinlynfczlbutbper.getAndrhspinlynfczlbutboidUserAgent();
    return userAgent || '';
  } catch (error) {
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting UserAgent:', error);
    return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const hspinlynfczlbutbINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let hspinlynfczlbutbInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function hspinlynfczlbutbWaitForInitPush(timeoutMs: number): Promise<string | null> {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

    void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
    void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
    void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
    void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
    void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void hspinlynfczlbutbMixSeed(3, 7);
    void hspinlynfczlbutbFoldRange([1, 2, 3]);
    void hspinlynfczlbutbClampSpan(5, 0, 10);

    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

      void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
      void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
      void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
      void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
      void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (hspinlynfczlbutbInitPushResolver === deliver) {
        hspinlynfczlbutbInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

      void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
      void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
      void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
      void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
      void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: body delivered, len:', encryptedBody.length);
      finish(encryptedBody);
    };

    const timer = setTimeout(() => {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

      void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
      void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
      void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
      void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
      void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: timeout fired');
      finish(null);
    }, timeoutMs);

    //console.log('[PushDebug] init push waiter: registered, timeoutMs:', timeoutMs);
    hspinlynfczlbutbInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function hspinlynfczlbutbDeliverInitPush(encryptedBody: string): boolean {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!hspinlynfczlbutbInitPushResolver) {
    //console.log('[PushDebug] init push deliver: no foreground waiter');
    return false;
  }
  const resolver = hspinlynfczlbutbInitPushResolver;
  hspinlynfczlbutbInitPushResolver = null;
  //console.log('[PushDebug] init push deliver: delivered to foreground waiter');
  resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function hspinlynfczlbutbHandleInitPushBackground(encryptedBody: string): Promise<void> {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  //console.log('[PushDebug] init push background handler: start, bodyLen:', encryptedBody.length);
  try {
    const decrypted = hspinlynfczlbutbDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
      //console.log('[PushDebug] init push background handler: decrypt empty');
      return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    //console.log('[PushDebug] init push background handler: parsed', { hasRedirectUrlInitial: !!redirectUrlInitial, hasRedirectUrl: !!redirectUrl, });

    if (redirectUrlInitial) {
      const finalUrl = hspinlynfczlbutbAppenndSendId(
        redirectUrlInitial,
        hspinlynfczlbutbInitializationRuntime.penhspinlynfczlbutbdingSendId,
      );
      await AsyncStorage.setItem(finhspinlynfczlbutbKey, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = hspinlynfczlbutbViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await hspinlynfczlbutbViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      //console.log('[PushDebug] init push background handler: webview opened');
      return;
    }

    if (redirectUrl) {
      await Utils.hspinlynfczlbutbSetUserBlocke(1);
      //console.log('[PushDebug] init push background handler: user blocked');
    }
  } catch (error) {
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] init push background handler error:', error);
  }
}

function hspinlynfczlbutbExtractInitPushBody(data: Record<string, any>): string {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of hspinlynfczlbutbINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function hspinlynfczlbutbWaitForPushToken(timeoutSeconds: number): Promise<string | null> {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

    void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
    void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
    void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
    void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
    void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

      void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
      void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
      void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
      void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
      void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log(`[PushDebug] timeout waiting for FCM token after ${timeoutSeconds}s`);
      resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
        //console.log('[PushDebug] FCM token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
        await hspinlynfczlbutbOnTokenReceived(token);
        resolve(token);
        return;
      }
      //console.log('[PushDebug] getToken returned null without error');
    } catch (error) {
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] getToken error:', error);
    }
  });
}

async function hspinlynfczlbutbOnTokenReceived(token: string): Promise<void> {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('Test Firebase: Token received:', token);
    hspinlynfczlbutbInitializationRuntime.pushspinlynfczlbutbhToken = token;
  } catch (error) {
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Firebase: Error handling token:', error);
  }
}

export async function hspinlynfczlbutbOnMessageRecieved(remoteMessage: any): Promise<void> {
  void initializationSharhspinlynfczlbutbedObfV7HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV7SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV7ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV8HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV8SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV8ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV9HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV9SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV9ClampMod(7, 5);

  void initializationSharhspinlynfczlbutbedObfV5HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV5SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV5ClampMod(7, 5);
  void initializationSharhspinlynfczlbutbedObfV6HashMix('xy');
  void initializationSharhspinlynfczlbutbedObfV6SumOdds([1, 3, 5]);
  void initializationSharhspinlynfczlbutbedObfV6ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV3HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV3ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharObfV4HashMix('xy');
  void hspinlynfczlbutbinitializationSharObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharObfV4ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);


  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('[PushDebug] message received:', { hasData: !!remoteMessage?.data, dataKeys: remoteMessage?.data ? Object.keys(remoteMessage.data) : [], hasNotification: !!remoteMessage?.notification, messageId: remoteMessage?.messageId ?? null,});

    if (!remoteMessage || !remoteMessage.data) {
      //console.log('[PushDebug] message ignored: no data payload');
      return;
    }

    if (remoteMessage.notification) {
      //console.log('[PushDebug] visible notification:', remoteMessage.notification);
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = hspinlynfczlbutbExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
      //console.log('[PushDebug] init push body extracted, len:', initPushBody.length);
      const delivered = hspinlynfczlbutbDeliverInitPush(initPushBody);
      if (!delivered) {
        //console.log('[PushDebug] no foreground waiter, handling in background');
        await hspinlynfczlbutbHandleInitPushBackground(initPushBody);
      }
      return;
    }

    //console.log('[PushDebug] no eb/encrypted_body in data, checking sendid');

    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
      //console.log('[PushDebug] sendid received:', sendId);
      hspinlynfczlbutbInitializationRuntime.penhspinlynfczlbutbdingSendId = sendId;
      const finalUrl = await AsyncStorage.getItem(finhspinlynfczlbutbKey);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = hspinlynfczlbutbAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = hspinlynfczlbutbViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await hspinlynfczlbutbViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix('xy');
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] message handler error:', error);
  }
}

/** Alias kept for the background message handler registered in index.js. */
export const hspinlynfczlbutbabppOnMessageRecieved = hspinlynfczlbutbOnMessageRecieved;

function hspinlynfczlbutbMixSeed(a: number, b: number): number {
  return ((a % (b || 1)) + b) % (b || 1);
}

function hspinlynfczlbutbFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

function hspinlynfczlbutbClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v1 */
function hspinlynfczlbutbinitializationSharbbvclynowkObfV1HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function hspinlynfczlbutbinitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function hspinlynfczlbutbinitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v2 */
function hspinlynfczlbutbinitializationSharbbvclynowkObfV2HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function hspinlynfczlbutbinitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function hspinlynfczlbutbinitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v3 */
function hspinlynfczlbutbinitializationSharObfV3HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function hspinlynfczlbutbinitializationSharObfV3SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function hspinlynfczlbutbinitializationSharObfV3ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v4 */
function hspinlynfczlbutbinitializationSharObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function hspinlynfczlbutbinitializationSharObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function hspinlynfczlbutbinitializationSharObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */
function initializationSharhspinlynfczlbutbedObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function initializationSharhspinlynfczlbutbedObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function initializationSharhspinlynfczlbutbedObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function initializationSharhspinlynfczlbutbedObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function initializationSharhspinlynfczlbutbedObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function initializationSharhspinlynfczlbutbedObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function initializationSharhspinlynfczlbutbedObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function initializationSharhspinlynfczlbutbedObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function initializationSharhspinlynfczlbutbedObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */
function initializationSharhspinlynfczlbutbedObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function initializationSharhspinlynfczlbutbedObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function initializationSharhspinlynfczlbutbedObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v9 */
function initializationSharhspinlynfczlbutbedObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function initializationSharhspinlynfczlbutbedObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function initializationSharhspinlynfczlbutbedObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
