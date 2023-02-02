
import React, { useCallback, useState } from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';


import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import paperTheme from './src/theme/theme';
import { Main } from './src/services/rootnavigation';
import { ThemeProvider } from '@shopify/restyle';
import LoginScreen from './src/screens/auth/login';
import RegisterScreen from './src/screens/auth/regitser';
import NonInfluencerEditProfile from './src/screens/nonInfluencer/editProfile';
import AddAddress from './src/screens/address/addAddress';
import EditAddress from './src/screens/address/editAddress';
import ForgotScreen from './src/screens/auth/forgotPassword';
import ChangePasswordScreen from './src/screens/auth/changePassword';
import NonInfluencerProfile from './src/screens/nonInfluencer/myAccount';
import FollowingList from './src/screens/nonInfluencer/followingList';
import Wishlist from './src/screens/wishlist';
import AddressList from './src/screens/address/addressList';
import Orders from './src/screens/orders';
import { MenuProvider } from 'react-native-popup-menu';

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import { navigationRef } from './src/services/NavigationService';
import theme from './src/theme/resources';

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
      {/* <FollowingList /> */}
      {/* <Orders /> */}
      {/* <AddressList /> */}
      {/* <Wishlist /> */}
      {/* <NonInfluencerProfile /> */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <NonInfluencerEditProfile /> */}
      {/* <AddAddress /> */}
      {/* <EditAddress /> */}
      {/* <ForgotScreen /> */}
      {/* <ChangePasswordScreen /> */}
      {/* </SafeAreaView> */}
      </MenuProvider>
    </PaperProvider>
  );
};


export default App;
