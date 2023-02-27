import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 30,
    },
    item: {
        //   padding: 10,
        fontFamily: theme.Poppins.regular,
        fontSize: 14,
        //   height: 44,
    },
    itemSection: {
        flexDirection: 'row',
        backgroundColor: theme.background,
        paddingHorizontal: 8,
        paddingVertical: 8
    },
    contentSection: {
        flexDirection: 'column',
        overflow: 'hidden',
        width: '84%'
    },
    titleSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '84%'
    },
    descSection: {
        width: '100%',
        marginLeft: '3%',
        marginTop: 3,
        // borderWidth:1
    },
    innerTitleSection: {
        marginHorizontal: 8,
        width:'60%',
    },
    btnStyle: {
        height: 36,
        width: 120,
        paddingVertical: 0,
        marginVertical: 0
    },
    btnTextStyle: {
        fontFamily: theme.Poppins.regular,
        fontSize: 12,
        lineHeight: 20
    },
    separator: {
        height: 2.5,
        width: '100%',
        marginBottom: 2,
        backgroundColor: theme.White
    }
});

export default styles;