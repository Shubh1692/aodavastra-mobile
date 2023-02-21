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
import { navigate } from '../../../services/NavigationService';
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
        { id: 1, name: 'Net Multi Work Saree', price: '₹ 2,099.00', outOfStock: false },
    ]

    const payment = ['PayTM', 'Cash on Delivery'].map((item, index) => {
        return (
            <View key={index.toString()}>
                <View style={{
                    backgroundColor: theme.background,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: '4%',
                }}>
                    <Text onPress={() => console.log("hii")} style={{ marginVertical: '4%', fontFamily: 'Poppins-Regular', fontSize: 14, color: theme.TextBlack, }}>{item}</Text>
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
        if ((item.title == 'Discount: ') && (item.price != '₹ 0.00')) {
            summaryItem.splice(index, 1);
            setSummaryItem(summaryItem)
        }
        return (
            <View key={index.toString()}>
                <View style={{
                    backgroundColor: theme.background,
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: 'space-between',
                    paddingHorizontal: '4%',
                }}>
                    <Heading viewStyle={{marginVertical: '1%',width:'50%',paddingVertical:0,}} textStyle={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: theme.TextBlack, }} title={item.title} />
                    {item.title == 'Order Total: '
                        ?
                        <PriceText viewStyle={{marginVertical: '1%',}} textStyle={{fontFamily: 'Poppins-Medium', fontSize: 14, color: theme.Purple, }} price={item.price} />
                        :
                        <PriceText viewStyle={{marginVertical: '1%',}} textStyle={{  fontFamily: 'Poppins-Regular', fontSize: 14, color: theme.TextBlack, }} price={item.price} />
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
                <View style={{ marginTop: '8%', marginHorizontal: '4%', flex: 1 }}>
                    <View style={{ flex: 1, marginTop: '8%' }}>
                        <CartPaymentIndecator isComplete={isComplete} />
                        <Heading title={`${listItems.length} item(s) in bag:`} viewStyle={{marginTop: '6%',}}  textStyle={{  fontFamily: 'Poppins-Regular', fontSize: 16, color: theme.TextBlack }} />
                        <ScrollView
                            // horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={{ flex: 1, marginBottom: 90, }}>
                                {list}
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Heading title={'Choose Payment Mode'} viewStyle={{ marginTop: '4%', }} textStyle={{ fontFamily: 'Poppins-Regular', fontSize: 18, color: theme.TextBlack }} />
                                </View>
                                {/* payment options */}
                                <PaymentCard>
                                    {payment}
                                </PaymentCard>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ marginTop: '1%', fontFamily: 'Poppins-Regular', fontSize: 12, color: theme.TextBlack }}>
                                        Estimated Delivery by <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 12, color: theme.TextBlack }}>
                                            25th February, 2022
                                        </Text>
                                    </Text>
                                </View>

                                {/* order summery */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Heading title={'Order Summary'} viewStyle={{ marginTop: '4%', }} />
                                    <TextWithUnderline title="Apply Coupon" textStyle={{ marginTop: '4%', fontFamily: 'Poppins-SemiBold', fontSize: 14, textDecorationLine: 'underline', color: theme.Purple, }} onPress={() => navigate('coupon')} />
                                </View>

                                <PaymentCard>
                                    {summary}
                                </PaymentCard>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ flex: 1, width: '100%', alignItems: 'center', position: 'absolute', bottom: 10 }}>
                        <Button mode="contained" textStyle={{ lineHeight: 18, fontSize: 14 }} style={{ width: 250, height: 40 }} onPress={() => {
                            setIsComplete(true)
                            handleConfirm()
                        }}>Place Your Order</Button>
                    </View>
                </View>
            </MainContainer>
            {isConfirmationVisible &&
                <BottomSheet bottomSheetHeigh={'55%'} title={"Email Verification"} setIsSettingIcon={setIsConfirmationVisible} actionHandler={handleConfirm} >
                    <View style={{ marginTop: '5%', flex: 1, alignItems: 'center' }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <BagIcon />
                            <View style={{ marginHorizontal: 18, marginTop: 16, marginBottom: 10, alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center', fontSize: 14 }}>You’ll receive a confirmation email shortly with expected delivery date.</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Button mode="outlined" textStyle={{ color: theme.TextBlack, fontSize: 14, }} style={styles.loginBtn} onPress={() => {
                                    handleConfirm()
                                    navigate("orderDetails")
                                    }}>Review Your Order</Button>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Button mode="contained" textStyle={{ fontSize: 14, }} style={styles.loginBtnStyle} onPress={() => {
                                    handleConfirm()
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