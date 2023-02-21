import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';


const styles = StyleSheet.create({
    loginBtnStyle: { width: 200, height: 40, },
    loginBtn: { 
        width: 200, 
        height: 40, 
        borderWidth: 1, 
        borderColor: theme.TextBlack,
        paddingVertical:0
     }
})
export default styles;