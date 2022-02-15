import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import Header from './components/Header';
import DrinksList from './components/DrinksList';
import DrinksProvider from './components/Context/DrinksContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Staatliches-Regular': require('./assets/Staatliches-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaProvider>
      <DrinksProvider>
        <Header />
        <View>
          <DrinksList />
          <StatusBar style="auto" />
        </View>
      </DrinksProvider>
    </SafeAreaProvider>
  );
}
