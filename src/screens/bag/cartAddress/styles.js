import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';


const styles = StyleSheet.create({
    container: {
        marginTop: '8%',
        marginHorizontal: '4%',
        flex: 1,
    },
    subContainer: {
        flex: 1,
        marginTop: '8%'
    },
    title: {
        marginTop: '6%',
        fontFamily: theme.Poppins.regular,
        fontSize: 16,
        color: theme.TextBlack
    },
    listContainer: {
        flex: 1,
        marginBottom: 90,
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addressText: {
        marginTop: '4%',
        fontFamily: theme.Poppins.regular,
        fontSize: 18,
        color: theme.TextBlack
    },
    addAddressText: {
        marginTop: '4%',
        fontFamily: theme.Poppins.semiBold,
        fontSize: 14,
        textDecorationLine: 'underline',
        color: theme.Purple,
    },
    emptyAddressContainer: {
        marginTop: '3%',
        backgroundColor: theme.background,
        minHeight: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyAddressText: {
        marginTop: '4%',
        fontFamily: theme.Poppins.regular,
        fontSize: 14,
        color: theme.textGrey,
    },
    btnContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10
    },
    btnTextStyle: {
        lineHeight: 18,
        fontSize: 14
    },
    btnStyle: {
        width: 250,
        height: 40
    },
})

export default styles;