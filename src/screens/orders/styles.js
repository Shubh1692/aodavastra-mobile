import { StyleSheet } from 'react-native';
import theme from '../../theme/resources';

const styles = StyleSheet.create({
    cardSection: {
        backgroundColor: theme.background,
        borderRadius: 5,
        overflow: 'hidden'
    },
    headerSection: {
        backgroundColor: theme.Primary,
        flexDirection: 'row',
        height: 26,
        alignItems: 'center',
        paddingHorizontal: 8,
        justifyContent: 'space-between'
    },
    headerTitle: {
        color: theme.White,
        fontSize: 11
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

});

export default styles;