import {DefaultTheme } from 'react-native-paper';
import theme from './resources';

const paperTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      surface:'#fff',
      primary: theme.Primary,
      accent: '#fff',
      error: theme.Red,
      onBackground:'#fff',
      onSurface:'#fff',
      background:'#fff'
    },
    fonts: {
      regular: { fontFamily: 'Poppins-Regular' },
      light: { fontFamily: 'Poppins-Light' },
      medium: { fontFamily: 'Poppins-Medium' },
      thin: { fontFamily: 'Poppins-Thin' },
    },
  };

  export default paperTheme;