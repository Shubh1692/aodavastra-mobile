import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';


const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: '400',
        color: theme.TextBlack
    },
    cardSection: {
        backgroundColor: theme.background,
        minHeight: 120
    },
    titleSection: {
        paddingHorizontal: '4%',
        paddingVertical: '4%',
        paddingBottom: '6%'
    },
    addressText: {
        fontSize: 10,
        fontWeight: '600',
        color: theme.TextBlack,
        marginVertical: 6,
        width: '90%'
    },
    titleText: {
        fontSize: 12,
        fontWeight: '600'
    },
    btnSection: {
        flexDirection: 'row',
        paddingVertical: '1.5%'
    }
});

export default styles;