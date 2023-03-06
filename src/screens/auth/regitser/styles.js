import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';

const styles = StyleSheet.create({
    btn: { width: 240, height: 40, },
    loginBtnStyle: { width: 200, height: 40, },
    loginBtn: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: theme.TextBlack,
        paddingVertical: 0
    },

    verifyContainer: {
        marginTop: '5%',
        flex: 1,
        alignItems: 'center'
    },
    verifySubContainer: {
        flex: 1,
        alignItems: 'center'
    },
    verifyTextContainerView: {
        marginHorizontal: 18,
        marginTop: 16,
        marginBottom: 10,
        alignItems: 'center'
    },
    verifyTextStyle: {
        textAlign: 'center',
        fontSize: 14
    },
    verifyResndText: {
        color: theme.TextBlack,
        fontSize: 14,
    },
});

export default styles;