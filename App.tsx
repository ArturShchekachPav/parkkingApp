import HomeScreen from './src/screens/HomeScreen';
import { ScrollView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Navigation from './src/components/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheetModalProvider from '@gorhom/bottom-sheet/src/components/bottomSheetModalProvider';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1,
    position: 'relative'
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 350
  }
});

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <LinearGradient colors={['rgba(6, 107, 248, 1)', 'rgba(6, 183, 248, 0)']} style={styles.gradient} />
      <BottomSheetModalProvider>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <HomeScreen />
        </ScrollView>
      </BottomSheetModalProvider>
      <Navigation />
    </View>
  );
}

export default App;
