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
        height: 50, 
        borderWidth: 1, 
        borderColor: theme.TextBlack 
    }
});

export default styles;