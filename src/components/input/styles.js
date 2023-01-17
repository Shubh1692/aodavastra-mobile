import { StyleSheet } from 'react-native';
import theme from '../../theme/resources';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 5,
      //   borderWidth:4
      },
      input: {
        backgroundColor: theme.White,
        padding:0,
        // paddingVertical:0,
        // height:40,
        fontSize:14,
      },
      description: {
        fontSize: 11,
        color: theme.TextBlack,
        paddingTop: 8,
      },
      error: {
        fontSize: 11,
        color: theme.Red,
        paddingTop: 8,
      },
});

export default styles;