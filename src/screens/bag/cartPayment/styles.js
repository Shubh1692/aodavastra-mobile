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
        fontFamily: theme.Poppins.regular,
        fontSize: 16,
        color: theme.TextBlack
    },
    listContainer: {
        flex: 1,
        marginBottom: 90,
    },
    choosePaymentModeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    choosePaymentModeText: {
        fontFamily: theme.Poppins.regular,
        fontSize: 18,
        color: theme.TextBlack
    },
    estimateDeliveryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    estimateDeliveryText: {
        marginTop: '1%',
        fontFamily: theme.Poppins.regular,
        fontSize: 12,
        color: theme.TextBlack
    },
    orderSummaryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    applyCouponText: {
        marginTop: '4%',
        fontFamily: theme.Poppins.semiBold,
        fontSize: 14,
        textDecorationLine: 'underline',
        color: theme.Purple,
    },
    placeOrderBtnContiner: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10
    },
    placeOrderBtnTextStyle: {
        lineHeight: 18,
        fontSize: 14,
        fontFamily: theme.Poppins.semiBold,
    },
    placeOrderBtnStyle: {
        width: 250,
        height: 40
    },

    shoppingBtnStyle: {
        width: 200,
        height: 40,
    },
    reviewBtnStyle: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: theme.TextBlack,
        paddingVertical: 0
    },


    orderPlacedContainer: {
        marginTop: '5%',
        flex: 1,
        alignItems: 'center'
    },
    orderPlacedSubContainer: {
        flex: 1,
        alignItems: 'center'
    },
    orderPlacedConfirmationView: {
        marginHorizontal: 18,
        marginTop: 16,
        marginBottom: 10,
        alignItems: 'center'
    },
    orderPlacedConfirmationTextStyle: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: theme.Poppins.regular,
    },
    btnReviewTextStyle: {
        color: theme.TextBlack,
        fontSize: 14,
        fontFamily: theme.Poppins.regular,
    },


    paymentOptionContainer: {
        backgroundColor: theme.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
    },
    paymentOptionTextStyle: {
        marginVertical: '4%',
        fontFamily: theme.Poppins.regular,
        fontSize: 14,
        color: theme.TextBlack,
    },

    orderSummaryContainer: {
        backgroundColor: theme.background,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingHorizontal: '4%',
    },
    orderSummaryHeading: {
        marginVertical: '1%',
        width: '50%',
        paddingVertical: 0,
    },
    orderSummaryHeadingTextStyle: {
        fontFamily: theme.Poppins.medium,
        fontSize: 14,
        color: theme.TextBlack,
    },

    orderSummaryTotalTextStyle: {
        fontFamily: theme.Poppins.medium,
        fontSize: 14,
        color: theme.Purple,
    },

    orderSummaryTextStyle: {
        fontFamily: theme.Poppins.regular,
        fontSize: 14,
        color: theme.TextBlack,
    },

})
export default styles;