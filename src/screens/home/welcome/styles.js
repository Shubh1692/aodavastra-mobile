import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';
import { deviceWidth } from '../../../utils/device';


const styles = StyleSheet.create({
    cardSection: {
        backgroundColor: theme.White,
        padding: '1%'
    },
    cardInnerSection: {
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        alignItems: 'center',
        backgroundColor: theme.background,
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
        backgroundColor: theme.White
    },
    welcomeTitle: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: theme.DarkerPurple,
        alignItems: 'center'
    },
    userTitle: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: theme.TextBlack,
        alignItems: 'center',
        textAlign: 'center',
    },
    brandTitle: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: theme.TextBlack,
        alignItems: 'center'
    },
    brandImgStyle: {
        width: 60,
        height: 60
    },

    userImgStyle: {
        width: 45,
        height: 45,
        borderRadius: (45)/2,
    },
    userTitleStyle: {
        width: deviceWidth/6.8,
        alignItems: 'center',
        marginTop:4,
        marginBottom:10
    },
});

export default styles;