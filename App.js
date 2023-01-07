
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import paperTheme from './src/theme/theme';
import { ThemeProvider } from '@shopify/restyle';
import LoginScreen from './src/screens/login';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaView >
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <LoginScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};


export default App;
