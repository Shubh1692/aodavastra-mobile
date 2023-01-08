
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
import LoginScreen from './src/screens/auth/login';
import RegisterScreen from './src/screens/regitser';
import NonInfluencerEditProfile from './src/screens/nonInfluencer/editProfile';
import AddAddress from './src/screens/address/addAddress';
import EditAddress from './src/screens/address/editAddress';
import ForgotScreen from './src/screens/auth/forgotPassword';
import ChangePasswordScreen from './src/screens/auth/changePassword';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView
        style={{ flex: 0, backgroundColor: isDarkMode ? '#c4c4c4' : '#c4c4c4' }}
      />
      <SafeAreaView
        style={{ flex: 1, }}>
        {/* <LoginScreen /> */}
        {/* <RegisterScreen /> */}
        {/* <NonInfluencerEditProfile /> */}
        {/* <AddAddress /> */}
        {/* <EditAddress /> */}
        {/* <ForgotScreen /> */}
        <ChangePasswordScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};


export default App;
