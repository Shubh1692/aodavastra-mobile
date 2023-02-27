import { StyleSheet } from 'react-native';
import theme from '../../theme/resources';
import { deviceWidth } from '../../utils/device';


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
        height: 184
    },
    contentSection: {
        flexDirection: 'column',
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
    shopNowTitle: {
        fontSize: 16,
        fontFamily: theme.Poppins.semiBold,
        color: theme.DarkerPurple,
        alignItems: 'center'
    },

    categoryImgStyle: {
        width: deviceWidth/2.4,
        height: deviceWidth/4.4,
        borderRadius: 4.5,
    },
    categoryTitleStyle: {
        position: 'absolute',
        width: deviceWidth/2.4,
        height: deviceWidth/4.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    brandImgStyle: {
        width: 104,
        height: 104
    },

    creativePartnerImgStyle: {
        width: deviceWidth/5,
        height: deviceWidth/5
    },
});

export default styles;