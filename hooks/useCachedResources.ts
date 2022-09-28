import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          'gilroy-bold': require('../assets/fonts/Gilroy-Bold.ttf'),
          'gilroy-extrabold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
          'gilroy-medium': require('../assets/fonts/Gilroy-Medium.ttf'),
          'gilroy-light': require('../assets/fonts/Gilroy-Light.ttf'),
          'gilroy-regular': require('../assets/fonts/Gilroy-Regular.ttf'),
          'gilroy-semiBold': require('../assets/fonts/Gilroy-SemiBold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
