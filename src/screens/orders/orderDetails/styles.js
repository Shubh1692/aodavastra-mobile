import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';


const styles = StyleSheet.create({
    btnSection: {
        alignItems: 'center',
        marginTop: 5
    },
    btnText: {
        color: theme.TextBlack,
        fontSize: 10,
    },
    btn: {
        borderWidth: 1,
        borderColor: theme.TextBlack
    },
    cardSection: {
        backgroundColor: theme.background,
        padding: '2%'
    },
    cardInnerSection: {
        flexDirection: 'row',
        width: '100%',
        position: 'relative',
        justifyContent:'space-between',
    },
    imgStyle: {
        width: 104,
        height: 120
    },
    contentSection: {
        flexDirection: 'column',
        width: '70%',
    },
    titleStyle: {
        width: '90%',
    },
    priceStyle: {
        marginLeft: '4%',
        marginVertical:6
    },
    btnSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 8,
    },
    separator: {
        height: 2.5,
        width: '100%',
        marginBottom: 2,
        backgroundColor: theme.White
    }
});

export default styles;