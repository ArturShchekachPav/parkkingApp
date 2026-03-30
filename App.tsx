/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import HomeScreen from './src/screens/HomeScreen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1
  },
});

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <LinearGradient colors={['rgba(6, 107, 248, 1)', 'rgba(6, 183, 248, 0)']} style={styles.container}>
      <HomeScreen />
    </LinearGradient>
  );
}

export default App;
