import { StyleSheet } from 'react-native';
import theme from '../../theme/resources';


const styles = StyleSheet.create({
    cardSection: {
        backgroundColor: theme.White,
        padding: '2%'
    },
    cardInnerSection: {
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        alignItems: 'center'
    },
    imgStyle: {
        width: 160,
        height: 200
    },
    contentSection: {
        flexDirection: 'column',
        marginTop: 4,
    },
    outOfStockStyle: {
        position: 'absolute',
        width: 160,
        height: 200,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceStyle: {
        marginLeft: '4%',
        marginTop: '2%',
        marginRight: '4%',
        marginBottom: '2%',
        alignItems: 'center'
    },
    titleStyle: {
        width: '92%',
        alignItems: 'center',
    },
    outOfStocktextStyle: {
        color: theme.White,
        fontSize: 14,
        fontFamily: theme.Poppins.semiBold,
    },
    priceTextStyle: {
        color: theme.TextBlack,
        fontSize: 14,
        fontFamily: theme.Poppins.regular,
    },
    productName: { 
        color: theme.TextBlack, 
        width: '100%' 
    }
});

export default styles;