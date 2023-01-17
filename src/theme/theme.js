import {DefaultTheme } from "react-native-paper";
import theme from './resources';

const paperTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.Primary,
      accent: "#f1c40f",
      error: theme.Red
    },
    fonts: {
      regular: { fontFamily: "Poppins-Regular" },
      light: { fontFamily: "Poppins-Light" },
      medium: { fontFamily: "Poppins-Medium" },
      thin: { fontFamily: "Poppins-Light" },
    },
  };

  export default paperTheme;