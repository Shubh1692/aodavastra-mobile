import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';

const styles = StyleSheet.create({
   btn: { width: 240, height: 50, },
   loginBtn: { 
       width: 200, 
       height: 50, 
       borderWidth: 1, 
       borderColor: theme.TextBlack 
    }
});

export default styles;