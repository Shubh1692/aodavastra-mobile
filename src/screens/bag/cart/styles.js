import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';


const styles = StyleSheet.create({
    container: {
        marginTop: '8%',
        marginHorizontal: '4%',
        flex: 1
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
    btnContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10
    },
    btnTextStyle: {
        lineHeight: 18,
        fontFamily: theme.Poppins.regular,
        fontSize: 14
    },
    btnStyle: {
        width: 250,
        height: 40
    },

    cartIndicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    purpleLine: {
        backgroundColor: theme.Purple,
        height: 4,
        width: '20%',
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2
    },

    cartIndicatorSubContanier: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    bagTitle: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        width: 25.5,
        height: 50,
        fontFamily: theme.Poppins.regular,
        fontSize: 12,
        color: theme.TextBlack
    },
    fillCircle: {
        backgroundColor:
            theme.Purple,
        height: 10,
        width: 10,
        borderRadius: 5
    },
    grayLine: {
        backgroundColor: theme.bagHighlighterGrey,
        height: 4,
        width: '20%'
    },
    addressTitle: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        width: 53,
        height: 50,
        fontFamily: theme.Poppins.regular,
        fontSize: 12,
        color: theme.TextBlack
    },
    emptyCircle: {
        backgroundColor: theme.White,
        height: 10,
        width: 10,
        borderRadius: 5,
        borderWidth: 2.5,
        borderColor: theme.bagHighlighterGrey
    },
    paymentTitle: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        width: 56.5,
        height: 50,
        fontFamily: theme.Poppins.regular,
        fontSize: 12,
        color: theme.TextBlack
    },
    paymentCompleteLine: {
        height: 4,
        width: '20%',
        borderTopRightRadius: 2,
        borderBottomRightRadius: 2
    },
    purpleLine: {
        backgroundColor: theme.Purple,
        height: 4,
        width: '20%'
    },

    cartListContainer: {
        backgroundColor: theme.background,
        padding: '2%',
        marginTop: '2%',
    },
    cartListSubContaner: {
        width: '100%',
        position: 'relative',
    },
    cartListSubContanerChild: {
        flexDirection: 'row',
        width: '100%',
        position: 'relative',
    },

    cartListImageStyle: {
        width: 110,
        height: 150
    },
    cartListTitleContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    cartListQtyView: {
        marginLeft: '4%',
        marginTop: '2%',
        width: '35%',
        backgroundColor: theme.Peach,
        padding: '4%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cartListPriceView: {
        marginLeft: '4%',
        marginTop: '4%',
        alignItems: 'flex-start',
    },

    cartListBottomBtn: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        marginTop: 4,
        alignItems: 'center',
    },
    cartListBtnTextStyle: {
        color: theme.TextBlack,
        fontFamily: theme.Poppins.regular,
        fontSize: 10,
        lineHeight: 14,
    },
    cartListBtnStyle: {
        height: 32,
        paddingVertical: 0,
        marginVertical: 0
    },
    cartListBtnSeaprator: {
        width: 1,
        height: "70%",
        backgroundColor: theme.TextBlack,
    },
})

export default styles;