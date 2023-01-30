import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';

const styles = StyleSheet.create({
    profileContainer: { 
        alignItems: 'center', 
        marginTop: 24 
    },
    btnSection: { 
        alignItems: 'center',
        marginTop:5 
    },
    btnText: { 
        color: theme.TextBlack, 
        fontSize: 13, 
    },
    btn: { 
        width: 160, 
        height: 40, 
        borderWidth: 1, 
        borderColor: theme.TextBlack 
    },
    forgotPassword: {
        marginTop:8,
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 24,
    },
    forgot: {
        fontSize: 14,
        color:theme.Primary,
        textDecorationLine:'underline',
        fontWeight:'600',
        fontFamily:'Poppins-Regular'
    },
});

export default styles;