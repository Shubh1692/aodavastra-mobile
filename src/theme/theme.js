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
      light: { fontFamily: 'Poppins-Light' },
      thin: { fontFamily: 'Poppins-Thin' },
      regular: { fontFamily: 'Poppins-Regular' },
      medium: { fontFamily: 'Poppins-Medium' },
      semiBold: { fontFamily: 'Poppins-SemiBold' },
      bold: { fontFamily: 'Poppins-Bold' },
    },
  };

  export default paperTheme;