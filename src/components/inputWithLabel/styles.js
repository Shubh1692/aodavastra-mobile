import { StyleSheet } from 'react-native';
import theme from '../../theme/resources';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 5,
    },
    input: {
        backgroundColor: theme.White,
        padding: 0,
        height: 40
    },
    description: {
        fontSize: 11,
        color: theme.TextBlack,
        paddingTop: 8,
    },
    error: {
        fontSize: 11,
        color: theme.Red,
        paddingTop: 8,
    },
    titleStyle: {
        fontSize: 18,
        color: theme.TextBlack,
        marginLeft: 8,
        paddingBottom: 4
    }
});

export default styles;