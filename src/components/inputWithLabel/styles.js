import { StyleSheet } from 'react-native';
import theme from '../../theme/resources';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 10,
        position:'relative',
    },
    input: {
        backgroundColor: theme.White,
        padding: 0,
        height: 40,
        paddingLeft:10,
        paddingVertical:10,
        paddingTop:10,
        fontFamily: theme.Poppins.regular,
        fontSize:14,
        borderWidth:1.2,
        borderRadius:4,
        color: theme.TextBlack
    },
    iconContainer: {
        position: 'absolute', 
        right: 8, 
        top:31 ,
        alignItems: 'center', 
        height: 40, 
        justifyContent: 'center'
    },
    toggleIconStyle: {
        width: 20, 
        height: 14
    },
    description: {
        fontFamily: theme.Poppins.regular,
        fontSize: 11,
        color: theme.TextBlack,
        paddingTop: 8,
    },
    error: {
        fontFamily: theme.Poppins.regular,
        fontSize: 11,
        color: theme.Red,
        paddingTop: 8,
    },
    titleStyle: {
        fontFamily: theme.Poppins.regular,
        fontSize: 18,
        color: theme.TextBlack,
        marginLeft: 5,
        paddingBottom: 6
    }
});

export default styles;