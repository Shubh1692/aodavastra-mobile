import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';
import { deviceWidth } from '../../../utils/device';

const styles = StyleSheet.create({
    profileContainer: {
        // alignItems: 'center',
        marginTop: 24,
        position: 'relative',
        flexDirection:'column',
        
    },
    profileView: {
        position: 'absolute',
        top: -60,
        marginBottom: 60,
        width: deviceWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    btnSection: {
        alignItems: 'center',
        marginTop: '5.5%',
        marginLeft:10
    },
    btnText: {
        color: theme.TextBlack,
        fontSize: 12,
        lineHeight: 16
    },
    btn: {
        width: 160,
        height: 40,
        borderWidth: 1,
        marginHorizontal:0,
        paddingVertical:0,
        alignItems:'flex-start',
        borderColor: theme.TextBlack
    },
    forgotPassword: {
        marginTop: 8,
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 24,
    },
    forgot: {
        fontSize: 14,
        color: theme.Primary,
        textDecorationLine: 'underline',
        fontWeight: '600',
        fontFamily: 'Poppins-Regular'
    },
});

export default styles;