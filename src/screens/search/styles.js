import { StyleSheet } from 'react-native';
import theme from '../../theme/resources';
import { deviceWidth } from '../../utils/device';


const styles = StyleSheet.create({
    cardSection: {
        backgroundColor: theme.White,
        padding: '2%',
    },
    cardInnerSection: {
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        alignItems: 'center'
    },
    imgStyle: {
        width: deviceWidth/3.5,
        height: 120
    },
    contentSection: {
        flexDirection: 'column',
    },
    titleStyle: {
        width: deviceWidth/3.5,
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
        backgroundColor: '#fff'
    },
    searchTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: theme.Purple,
        alignItems: 'center'
    },

    categoryTitleStyle: {
        width: deviceWidth/5.2,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    brandImgStyle: {
        width: deviceWidth/5,
        height: deviceWidth/5
    },

    userImgStyle: {
        width: 45,
        height: 45,
        borderRadius: 45/2,
    },
    userTitleStyle: {
        width: deviceWidth/6.8,
        alignItems: 'center',
    },
});

export default styles;