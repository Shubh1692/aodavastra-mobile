import { StyleSheet } from 'react-native';
import theme from '../../theme/resources';

const styles = StyleSheet.create({
    topContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 24
    },
    leftLight: {
        borderWidth: 0.4,
        width: 80,
        marginRight: 10,
        borderColor: theme.TextBlack
    },
    rightLight: {
        borderWidth: 0.4,
        width: 80,
        marginLeft: 10,
        borderColor: theme.TextBlack
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: theme.TextBlack
    }
});

export default styles;