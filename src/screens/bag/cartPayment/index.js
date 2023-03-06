import React, { useState } from 'react';
import { View, Text, FlatList, } from 'react-native';
import CardComponent from '../../../components/card';
import Header from '../../../components/header';
import theme from '../../../theme/resources';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { deviceHeight, deviceWidth } from '../../../utils/device';
import Button from '../../../components/button';
import MainContainer from '../../../components/mainContainer';
import { ScrollView } from 'react-native-gesture-handler';
import CartListComponents from '../../../screens/bag/cart/components/cartListComponent';
import AddressListComponent from '../../address/addressList/components/addressListComponents';
import AddAddress from '../../address/addAddress';
import Select from '../../../assets/images/select.svg'
import { useRoute } from '@react-navigation/native'
import CartIndecatorComponents, { CartPaymentIndecator } from '../cart/components/cartIndecatorComponent';
import LineDivider from '../../../components/lineDivider';
import { Card, shadow } from 'react-native-paper';
import BottomSheet from '../../../components/bottomSheet';
import BagIcon from '../../../assets/svg/bagCongrts.svg';
import { navigate, popToTop } from '../../../services/NavigationService';
import Heading from '../../../components/heading';
import TextWithUnderline from '../../../components/textWithUnderline';
import PriceText from '../../../components/priceText';
import PaymentCard from '../../../components/paymentCard';



function CartPayment({ navigation }) {
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
    const route = useRoute()
    const { listItems } = route.params;
    const list = listItems.map((item, index) => {
        return (
            <CartListComponents item={item} key={index.toString()} />
        )
    })
    const handleConfirm = () => {
        setIsConfirmationVisible(!isConfirmationVisible);
    }

    const addressList = [
        { id: 1, name: 'Net Multi Work Saree', price: '2,099.00', outOfStock: false },
    ]

    const payment = ['PayTM', 'Cash on Delivery'].map((item, index) => {
        return (
            <View key={index.toString()}>
                <View style={styles.paymentOptionContainer}>
                    <Text onPress={() => console.log("hii")} style={styles.paymentOptionTextStyle}>{item}</Text>
                    <Select />
                </View>
                <LineDivider />
            </View>
        )
    })

    const [summaryItem, setSummaryItem] = useState([
        { title: 'Items: ', price: '999.00' },
        { title: 'Discount: ', price: '20.00' },
        { title: 'Handling & Shipping: ', price: '0.00' },
        { title: 'Total Before Tax: ', price: '999.00' },
        { title: 'Tax: ', price: '40.00' },
        { title: 'Order Total: ', price: '1039.00' },
    ])
    const summary = summaryItem.map((item, index) => {
        if ((item.title == 'Discount: ') && (item.price != '0.00')) {
            summaryItem.splice(index, 1);
            setSummaryItem(summaryItem)
        }
        return (
            <View key={index.toString()}>
                <View style={styles.orderSummaryContainer}>
                    <Heading viewStyle={styles.orderSummaryHeading} textStyle={styles.orderSummaryHeadingTextStyle} title={item.title} />
                    {item.title == 'Order Total: '
                        ?
                        <PriceText viewStyle={{ marginVertical: '1%', }} textStyle={styles.orderSummaryTotalTextStyle} price={item.price} />
                        :
                        <PriceText viewStyle={{ marginVertical: '1%', }} textStyle={styles.orderSummaryTextStyle} price={item.price} />
                    }
                </View>
            </View>
        )
    })


    const [isComplete, setIsComplete] = useState(false)

    return (
        <>
            <MainContainer>
                <Header />
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <CartPaymentIndecator isComplete={isComplete} />
                        <Heading title={`${listItems.length} item(s) in bag:`} viewStyle={{ marginTop: '6%', }} style={styles.title} />
                        <ScrollView
                            // horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.listContainer}>
                                {list}
                                <View style={styles.choosePaymentModeContainer}>
                                    <Heading title={'Choose Payment Mode'} viewStyle={{ marginTop: '4%', }} style={styles.choosePaymentModeText} />
                                </View>
                                {/* payment options */}
                                <PaymentCard>
                                    {payment}
                                </PaymentCard>
                                <View style={styles.estimateDeliveryContainer}>
                                    <Text style={styles.estimateDeliveryText}>
                                        Estimated Delivery by <Text style={{ fontFamily: theme.Poppins.semiBold, }}>
                                            25th February, 2022
                                        </Text>
                                    </Text>
                                </View>

                                {/* order summery */}
                                <View style={styles.orderSummaryContainer}>
                                    <Heading title={'Order Summary'} viewStyle={{ marginTop: '4%', }} />
                                    <TextWithUnderline title="Apply Coupon" textStyle={styles.applyCouponText} onPress={() => navigate('coupon')} />
                                </View>

                                <PaymentCard>
                                    {summary}
                                </PaymentCard>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.placeOrderBtnContiner}>
                        <Button mode="contained" textStyle={styles.placeOrderBtnTextStyle} style={styles.placeOrderBtnStyle} onPress={() => {
                            setIsComplete(true)
                            handleConfirm()
                        }}>Place Your Order</Button>
                    </View>
                </View>
            </MainContainer>
            {isConfirmationVisible &&
                <BottomSheet title={"Order Placed Successfully"} actionHandler={() => {
                    handleConfirm()
                    popToTop()
                }} >
                    <View style={styles.orderPlacedContainer}>
                        <View style={styles.orderPlacedSubContainer}>
                            <BagIcon />
                            <View style={styles.orderPlacedConfirmationView}>
                                <Text style={styles.orderPlacedConfirmationTextStyle}>You’ll receive a confirmation email shortly with expected delivery date.</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Button mode="outlined" textStyle={styles.btnReviewTextStyle} style={styles.reviewBtnStyle} onPress={() => {
                                    handleConfirm()
                                    popToTop()
                                    navigate("orderDetails")
                                }}>Review Your Order</Button>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Button mode="contained" textStyle={{ fontSize: 14, }} style={styles.shoppingBtnStyle} onPress={() => {
                                    handleConfirm()
                                    popToTop()
                                    navigate('shopNow')
                                }}>Continue Shopping</Button>
                            </View>
                        </View>
                    </View>
                </BottomSheet>}
        </>
    )
}

export default CartPayment;