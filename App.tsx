import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useApphspinlynfczlbutbInitialization } from './services/inithspinlynfczlbutbializationFlow';
import ApphspinlynfczlbutbPlaceholder from './Layouts/Game/GamehspinlynfczlbutbInit';
import LoaderhspinlynfczlbutbScreen from './Layouts/Game/screens/LoaderhspinlynfczlbutbScreen';
import { hspinlynfczlbutbViewportGetState, hspinlynfczlbutbViewportRestore } from './services/hspinlynfczlbutbViewportHost';

function Ahspinlynfczlbutbpp() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <ApphspinlynfczlbutbContent />
    </SafeAreaProvider>
  );
}

function ApphspinlynfczlbutbContent() {
  const { ishspinlynfczlbutbLoading, ishspinlynfczlbutbLoadPlaceholder } = useApphspinlynfczlbutbInitialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menuhspinlynfczlbutbArmed, setMenuhspinlynfczlbutbArmed] = useState(false);
  const apphspinlynfczlbutbState = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const showhspinlynfczlbutbGame =
    !ishspinlynfczlbutbLoading && ishspinlynfczlbutbLoadPlaceholder;

  const handlehspinlynfczlbutbFirstProgress = useCallback(() => {
    setMenuhspinlynfczlbutbArmed(true);
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = apphspinlynfczlbutbState.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = hspinlynfczlbutbViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          hspinlynfczlbutbViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      apphspinlynfczlbutbState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menuhspinlynfczlbutbArmed || showhspinlynfczlbutbGame) && (
        <ApphspinlynfczlbutbPlaceholder starthspinlynfczlbutbAtMenu />
      )}
      {!showhspinlynfczlbutbGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LoaderhspinlynfczlbutbScreen
            donehspinlynfczlbutbOnFirstCycle
            onhspinlynfczlbutbDone={handlehspinlynfczlbutbFirstProgress}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Ahspinlynfczlbutbpp;
