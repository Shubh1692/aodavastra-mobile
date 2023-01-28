import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';


const styles = StyleSheet.create({
    cardSection: {
        // backgroundColor: theme.background,
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
        width: '70%',
    },
    outOfStockStyle: {
        position: 'absolute',
        width: 160,
        height: 200,
        backgroundColor: '#00000040',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        width: '92%',
        alignItems: 'center'
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
        backgroundColor: '#fff'
    }
});

export default styles;