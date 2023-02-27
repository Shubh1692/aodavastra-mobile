import { StyleSheet } from 'react-native';
import theme from '../../theme/resources';


const styles = StyleSheet.create({
    priceStyle: {
        marginLeft: '4%',
        marginTop: '2%',
        marginRight: '4%',
        marginBottom: '2%',
        alignItems: 'center'
    },
    priceTextStyle: {
        color: theme.TextBlack,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
});

export default styles;