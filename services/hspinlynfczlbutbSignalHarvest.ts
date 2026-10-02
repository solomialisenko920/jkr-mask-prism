import { getApps } from '@react-native-firebase/app';
import {
  getInitialNotification,
  getMessaging,
  hasPermission,
  onMessage,
  onNotificationOpenedApp,
  onTokenRefresh,
} from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, PermissionsAndroid, Platform } from 'react-native';
import {
  hspinlynfczlbutbInitializationRuntime,
  hspinlynfczlbutbWaitForPushToken,
  hspinlynfczlbutbOnMessageRecieved,
  hspinlynfczlbutbTryOpenPushExternalUrl,
} from './initializationSharhspinlynfczlbutbed';

/** Ensure the foreground FCM handler is registered exactly once. */
let hspinlynfczlbutbForegroundHandlerRegistered = false;
function hspinlynfczlbutbEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

  void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV3HashMix('xy');
  void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV4HashMix('xy');
  void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  if (hspinlynfczlbutbForegroundHandlerRegistered) {
    return;
  }
  hspinlynfczlbutbForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

      void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
      void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hspinlynfczlbutbSigObfV3HashMix('xy');
      void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
      void hspinlynfczlbutbSigObfV4HashMix('xy');
      void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
      void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
      void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
      await hspinlynfczlbutbOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
    void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
    void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
    void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
    hspinlynfczlbutbForegroundHandlerRegistered = false;
    //console.log('Test Firebase: Error registering foreground handler:', error);
  }
}

export async function hspinlynfczlbutbGetAdvertisingId(): Promise<string> {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

  void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV3HashMix('xy');
  void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV4HashMix('xy');
  void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { AhspinlynfczlbutbdvertisingIdHelper } = NativeModules;

    if (!AhspinlynfczlbutbdvertisingIdHelper) {
      //console.log('AhspinlynfczlbutbdvertisingIdHelper module not found');
      return '';
    }
    const adId: string = await AhspinlynfczlbutbdvertisingIdHelper.getAdvertisingIhspinlynfczlbutbdId();
    return adId || '';
  } catch (error) {
    void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
    void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
    void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
    void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
    //console.log('Error getting Advertising ID:', error);
    return '';
  }
}

export async function hspinlynfczlbutbPushStep(): Promise<void> {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

  void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV3HashMix('xy');
  void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV4HashMix('xy');
  void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  try {
    if (!getApps().length) {
      //console.log('Test hspinlynfczlbutbPushStep: Firebase not initialized, but should be initialized via google-services.json');
    }

    const messaging = getMessaging();

    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      //console.log('[PushDebug] POST_NOTIFICATIONS granted:', granted);
    } else if (Platform.OS === 'ios') {
      void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
      void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
      const permStatus = await hasPermission(messaging);
      //console.log('[PushDebug] iOS notification permission status:', permStatus);
    }

    hspinlynfczlbutbEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

      void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
      void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hspinlynfczlbutbSigObfV3HashMix('xy');
      void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
      void hspinlynfczlbutbSigObfV4HashMix('xy');
      void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
      void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
      void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
      //console.log('[PushDebug] FCM token refreshed:', `${token.slice(0, 20)}... (len=${token.length})`);
      hspinlynfczlbutbInitializationRuntime.pushspinlynfczlbutbhToken = token;
    });

    const token = await hspinlynfczlbutbWaitForPushToken(10);

    if (token) {
      hspinlynfczlbutbInitializationRuntime.pushspinlynfczlbutbhToken = token;
      //console.log('[PushDebug] push token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
    } else {
      //console.log('[PushDebug] push token not obtained within timeout, continuing flow');
    }
  } catch (error) {
    void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
    void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
    void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
    void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
    //console.log('Test hspinlynfczlbutbPushStep: Error in hspinlynfczlbutbPushStep:', error);
  }
}

export async function hspinlynfczlbutbReferrerStep(): Promise<void> {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

  void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV3HashMix('xy');
  void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV4HashMix('xy');
  void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

      void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
      void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hspinlynfczlbutbSigObfV3HashMix('xy');
      void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
      void hspinlynfczlbutbSigObfV4HashMix('xy');
      void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
      void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
      void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

          void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
          void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
          void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
          void hspinlynfczlbutbSigObfV3HashMix('xy');
          void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
          void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
          void hspinlynfczlbutbSigObfV4HashMix('xy');
          void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
          void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
          void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
          void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
          void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
          void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
          void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
          void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            hspinlynfczlbutbInitializationRuntime.insthspinlynfczlbutballRef = info.installReferrer;
            //console.log('Test hspinlynfczlbutbReferrerStep: Install Referrer obtained:', hspinlynfczlbutbInitializationRuntime.insthspinlynfczlbutballRef);
          } else {
            hspinlynfczlbutbInitializationRuntime.insthspinlynfczlbutballRef = '';
            if (error) {
              //console.log('Test hspinlynfczlbutbReferrerStep: Install Referrer error:', error);
            } else {
              //console.log('Test hspinlynfczlbutbReferrerStep: No referrer data');
            }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
        void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
        void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
        void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
        void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
        void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

          //console.log('Test hspinlynfczlbutbReferrerStep: Exception:', error);
          hspinlynfczlbutbInitializationRuntime.insthspinlynfczlbutballRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
    void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
    void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
    void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);

    //console.log('Test hspinlynfczlbutbReferrerStep: Error in hspinlynfczlbutbReferrerStep:', error);
    hspinlynfczlbutbInitializationRuntime.insthspinlynfczlbutballRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function hspinlynfczlbutbProcessDirectDeepLink(url: string): void {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

  void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV3HashMix('xy');
  void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV4HashMix('xy');
  void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (hspinlynfczlbutbInitializationRuntime.firshspinlynfczlbutbtParameterReceived) return;
  hspinlynfczlbutbInitializationRuntime.firshspinlynfczlbutbtParameterReceived = true;
  hspinlynfczlbutbInitializationRuntime.FinhspinlynfczlbutblOneLink = url.trim();
  hspinlynfczlbutbInitializationRuntime.FinhspinlynfczlbutblNaming = '';
}

export async function hspinlynfczlbutbDataCollectStep(): Promise<void> {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

  void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV3HashMix('xy');
  void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV4HashMix('xy');
  void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    hspinlynfczlbutbInitializationRuntime.firshspinlynfczlbutbtParameterReceived = false;
    hspinlynfczlbutbInitializationRuntime.orhspinlynfczlbutbanicWaiting = false;
    hspinlynfczlbutbInitializationRuntime.orghspinlynfczlbutbnicWaitResolve = null;
    hspinlynfczlbutbInitializationRuntime.DevhspinlynfczlbutbiceId = '';
    hspinlynfczlbutbInitializationRuntime.FinhspinlynfczlbutblOneLink = '';
    hspinlynfczlbutbInitializationRuntime.FinhspinlynfczlbutblNaming = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      hspinlynfczlbutbProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

      void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
      void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hspinlynfczlbutbSigObfV3HashMix('xy');
      void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
      void hspinlynfczlbutbSigObfV4HashMix('xy');
      void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
      void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
      void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
      void hspinlynfczlbutbMixSeed(3, 7);
      void hspinlynfczlbutbFoldRange([1, 2, 3]);
      void hspinlynfczlbutbClampSpan(5, 0, 10);

      void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
      void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        hspinlynfczlbutbProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !hspinlynfczlbutbInitializationRuntime.firshspinlynfczlbutbtParameterReceived &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

        void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
        void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
        void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (setTimeout(() => {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

        void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
        void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
        void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    hspinlynfczlbutbInitializationRuntime.FinhspinlynfczlbutblNaming = '';
  } catch (error) {
    void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
    void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
    void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
    void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
    hspinlynfczlbutbInitializationRuntime.DevhspinlynfczlbutbiceId = '';
    hspinlynfczlbutbInitializationRuntime.FinhspinlynfczlbutblOneLink = '';
    hspinlynfczlbutbInitializationRuntime.FinhspinlynfczlbutblNaming = '';
  }
}

let hspinlynfczlbutbNotificationOpenHandlerRegistered = false;
function hspinlynfczlbutbEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

  void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV3HashMix('xy');
  void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV4HashMix('xy');
  void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  if (hspinlynfczlbutbNotificationOpenHandlerRegistered) {
    return;
  }
  hspinlynfczlbutbNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

      void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
      void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hspinlynfczlbutbSigObfV3HashMix('xy');
      void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
      void hspinlynfczlbutbSigObfV4HashMix('xy');
      void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
      void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
      void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
      void hspinlynfczlbutbMixSeed(3, 7);
      void hspinlynfczlbutbFoldRange([1, 2, 3]);
      void hspinlynfczlbutbClampSpan(5, 0, 10);

      void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
      void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
      void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
      void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await hspinlynfczlbutbTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
    void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
    void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
    void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
    hspinlynfczlbutbNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function hspinlynfczlbutbSetupPushOpenHandlers(): Promise<void> {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

  void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV3HashMix('xy');
  void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV4HashMix('xy');
  void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    hspinlynfczlbutbEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await hspinlynfczlbutbTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
    void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
    void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
    void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
    void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
    void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface hspinlynfczlbutbParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function hspinlynfczlbutbParallelCollectStep(): Promise<hspinlynfczlbutbParallelCollectResult> {
  void hspinlynfczlbutbSignalHarvestObfV7HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV7ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV8HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV8SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV8ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV9HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV9SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV9ClampMod(7, 5);

  void hspinlynfczlbutbSignalHarvestObfV5HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV5ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix('xy');
  void hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV3HashMix('xy');
  void hspinlynfczlbutbSigObfV3SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV3ClampMod(7, 5);
  void hspinlynfczlbutbSigObfV4HashMix('xy');
  void hspinlynfczlbutbSigObfV4SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSigObfV4ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  void hspinlynfczlbutbMixSeed(3, 7);
  void hspinlynfczlbutbFoldRange([1, 2, 3]);
  void hspinlynfczlbutbClampSpan(5, 0, 10);

  void hspinlynfczlbutbSignalHarveObfV1HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV1SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV1ClampMod(7, 5);
  void hspinlynfczlbutbSignalHarveObfV2HashMix('xy');
  void hspinlynfczlbutbSignalHarveObfV2SumOdds([1, 3, 5]);
  void hspinlynfczlbutbSignalHarveObfV2ClampMod(7, 5);
  await hspinlynfczlbutbReferrerStep();

  const [, advertisingId] = await Promise.all([
    hspinlynfczlbutbPushStep(),
    hspinlynfczlbutbGetAdvertisingId(),
    hspinlynfczlbutbDataCollectStep(),
  ]);

  hspinlynfczlbutbInitializationRuntime.adhspinlynfczlbutbId = advertisingId ?? '';

  return {
    advertisingId: hspinlynfczlbutbInitializationRuntime.adhspinlynfczlbutbId,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

void hspinlynfczlbutbSignalHarvestPart01ObfV5HashMix('xy');
void hspinlynfczlbutbSignalHarvestPart01ObfV5SumOdds([1, 3, 5]);
void hspinlynfczlbutbSignalHarvestPart01ObfV5ClampMod(7, 5);

/* obfuscation-batch:v7 */
function hspinlynfczlbutbSignalHarvestObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function hspinlynfczlbutbSignalHarvestObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function hspinlynfczlbutbSignalHarvestObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

function hspinlynfczlbutbSignalHarvestObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function hspinlynfczlbutbSignalHarvestObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function hspinlynfczlbutbSignalHarvestObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function hspinlynfczlbutbMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function hspinlynfczlbutbFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

function hspinlynfczlbutbClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function hspinlynfczlbutbSignalHarveObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function hspinlynfczlbutbSignalHarveObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function hspinlynfczlbutbSignalHarveObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function hspinlynfczlbutbSignalHarveObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function hspinlynfczlbutbSignalHarveObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function hspinlynfczlbutbSignalHarveObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function hspinlynfczlbutbSigObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function hspinlynfczlbutbSigObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function hspinlynfczlbutbSigObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function hspinlynfczlbutbSigObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function hspinlynfczlbutbSigObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function hspinlynfczlbutbSigObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function hspinlynfczlbutbSignalHarvestObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function hspinlynfczlbutbSignalHarvestObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function hspinlynfczlbutbSignalHarvestObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function hspinlynfczlbutbSignalHarvestPart01ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function hspinlynfczlbutbSignalHarvestPart01ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function hspinlynfczlbutbSignalHarvestPart01ObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function hspinlynfczlbutbSignalHarvestPart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function hspinlynfczlbutbSignalHarvestPart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function hspinlynfczlbutbSignalHarvestPart01ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function hspinlynfczlbutbSignalHarvestPart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function hspinlynfczlbutbSignalHarvestPart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function hspinlynfczlbutbSignalHarvestPart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */
function hspinlynfczlbutbSignalHarvestObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function hspinlynfczlbutbSignalHarvestObfV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function hspinlynfczlbutbSignalHarvestObfV8ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v9 */
function hspinlynfczlbutbSignalHarvestObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function hspinlynfczlbutbSignalHarvestObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function hspinlynfczlbutbSignalHarvestObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
