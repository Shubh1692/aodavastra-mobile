import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';


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
        marginTop:4,
    },
    outOfStockStyle: {
        position: 'absolute',
        width: 160,
        height: 200,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        width: '92%',
        alignItems: 'center',
    },
    priceStyle: {
        marginLeft: '4%',
        marginTop: '2%',
        marginRight: '4%',
        marginBottom: '2%',
        alignItems: 'center'
    },
    separator: {
        height: 2.5,
        width: '100%',
        marginBottom: 2,
        backgroundColor: theme.White
    },
    bottomSheetContent: {
      padding: 40,
      alignItems: 'center',
    },
    bottomSheetText: {
        fontFamily: theme.Poppins.regular,
      fontSize: 24,
      marginBottom: 80,
    },
    bottomSheetCloseButton: {
      padding: 16,
      backgroundColor: 'deeppink',
      borderRadius: 8,
    },
});

export default styles;