import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subConatiner: {
        marginTop: '8%',
        marginHorizontal: '4%',
        flex: 1
    },
    heading: {
        fontSize: 18,
        fontWeight: '400',
        color: theme.TextBlack
    },
    headingContainer: {
        marginTop: '4%',
        flex: 1
    },
    headingSubContainer: {
        paddingVertical: '2%',
    },
    contentContainer: {
        paddingBottom: 90,
    },
    buttonContanier: {
        paddingVertical: '3%',
        bottom: 20,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        width: '100%'
    },
    addAddressButton: {
        width: 200,
        height: 40,
        paddingVertical: 0
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
    },
    buttonText: {
        width: '50%',
        height: 40,
        marginVertical: 0,
        paddingVertical: 0
    }
});

export default styles;