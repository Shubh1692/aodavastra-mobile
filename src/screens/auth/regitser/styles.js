import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';

const styles = StyleSheet.create({
    scrollContentContaine: {
        paddingBottom: 90,
    },
    formikSubContainer: {
        paddingHorizontal: 20,
    },
    checkBoxContainer: {
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        width: '80%', 
        marginVertical: 7, 
        marginBottom: 8
    },
    checkBox: {
        width: 20, 
        height: 20
    },
    tcppContainer: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        marginLeft: 5
    },
    tcppText: { 
        color: theme.Primary, 
        paddingHorizontal: 4, 
        fontWeight: '600' 
    },
    signupContainer: {
        alignItems: 'center'
    },
    btn: {
        width: 240,
        height: 40,
    },
    socialContainer: {
        marginVertical: 10,
    },
    alreadyHaveContainer: {
        alignItems: 'center',
        marginVertical: 14,
    },
    alreadyHaveText: {
        fontFamily: 'Poppins-Regular',
        color: theme.TextBlack
    },
    loginText: {
        color: theme.TextBlack,
        fontSize: 14,
    },
    loginBtn: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: theme.TextBlack,
        paddingVertical: 0
    },
});

export default styles;