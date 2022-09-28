import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NativeBaseConfigProvider } from "native-base/lib/typescript/core/NativeBaseContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider
          style={{
            flex: 1,
          }}
        >
          <NativeBaseProvider>
            <Navigation colorScheme={"light"} />
          </NativeBaseProvider>
          <StatusBar style="inverted" />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
