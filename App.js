
import AsyncStorage from '@react-native-community/async-storage';
import {
  NavigationContainer
} from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
  SafeAreaView, StatusBar, useColorScheme
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { MenuProvider } from 'react-native-popup-menu';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { navigationRef } from './src/services/NavigationService';
import { Main } from './src/services/rootnavigation';
import theme from './src/theme/resources';
import paperTheme from './src/theme/theme';






const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${1}`;


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [initialState, setInitialState] = useState();
  const onStateChange = useCallback(
    state => AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
    [],
  );

  return (
    <PaperProvider theme={paperTheme}>
      <MenuProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView
        style={{ flex: 0, backgroundStyle }}
      />

      <NavigationContainer
        ref={navigationRef}
        {...{ onStateChange, initialState }}>
        <SafeAreaView style={{flex:1,backgroundColor:theme.White}}>
          <Main />
        </SafeAreaView>

      </NavigationContainer>

      </MenuProvider>
    </PaperProvider>
  );
};


export default App;
