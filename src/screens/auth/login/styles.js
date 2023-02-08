import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';

const styles = StyleSheet.create({
    scrollContentContaine: {
        paddingBottom: 90,
    },
    formikSubContainer: {
        paddingHorizontal: 20,
    },
    forgotPassword: {
        marginTop: 5,
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    forgot: {
        fontSize: 16,
        color: theme.Primary,
        fontWeight: '600',
        fontFamily: 'Poppins-Regular'
    },
    loginButtonConatiner: {
        alignItems: 'center',
    },
    loginButton: {
        width: 200,
        height: 40,
    },
    socialContainer: {
        marginVertical: 10,
    },
    newHereContainer: {
        alignItems: 'center',
        marginVertical: 14,
    },
    newHereText: {
        fontFamily: 'Poppins-Regular',
        color: theme.TextBlack
    },
    createAccountText: {
        color: theme.TextBlack,
        fontSize: 14,
    },
    createAccountButton: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: theme.TextBlack
    }
});

export default styles;