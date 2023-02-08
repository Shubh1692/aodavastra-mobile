import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
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
import {useRoute} from '@react-navigation/native'
import CartIndecatorComponents, { CartPaymentIndecator } from '../cart/components/cartIndecatorComponent';
import LineDivider from '../../../components/lineDivider';
import { Card, shadow } from 'react-native-paper';

function CartPayment({ navigation }) {
    const route = useRoute()
    const {listItems} = route.params;
    const list = listItems.map((item, index) => {
        return (
            <CartListComponents item={item} key={index.toString()} />
        )
    })

    const addressList = [
        { id: 1, name: 'Net Multi Work Saree', price: '₹ 2,099.00', outOfStock: false },
    ]

    const payment = ['PayTM', 'Cash on Delivery'].map((item, index) => {
        return (
            <View key={index.toString()}>
                <View style={ {
                    backgroundColor: theme.background,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: '4%', 
                }}>
                    <Text onPress={() => console.log("hii")} style={{ marginVertical: '4%', fontFamily: 'Poppins-Regular', fontSize: 14, color: theme.TextBlack, }}>{item}</Text>
                    <Select />
                </View>
                <LineDivider/>
            </View>
        )
    })

    const [summaryItem, setSummaryItem] = useState([
        {title: 'Items: ', price: '₹ 999.00'},
        {title: 'Discount: ', price: '₹ 20.00'},
        {title: 'Handling & Shipping: ', price: '₹ 0.00'},
        {title: 'Total Before Tax: ', price: '₹ 999.00'},
        {title: 'Tax: ', price: '₹ 40.00'},
        {title: 'Order Total: ', price: '₹ 1039.00'},
    ])
    const summary = summaryItem.map((item, index) => {
        if ((item.title == 'Discount: ') && (item.price != '₹ 0.00')) {
            summaryItem.splice(index, 1);
            setSummaryItem(summaryItem)
        }
        return (
            <View key={index.toString()}>
                <View style={ {
                    backgroundColor: theme.background,
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: 'space-between',
                    paddingHorizontal: '4%', 
                }}>
                    <Text style={{ marginVertical: '1%', width: '55%', fontFamily: 'Poppins-Medium', fontSize: 14, color: theme.TextBlack, }}>{item.title}</Text>
                    {item.title == 'Order Total: '
                    ?
                    <Text style={{ marginVertical: '1%', fontFamily: 'Poppins-Medium', fontSize: 14, color: theme.Purple, }}>{item.price}</Text>
                    :
                    <Text style={{ marginVertical: '1%', fontFamily: 'Poppins-Regular', fontSize: 14, color: theme.TextBlack, }}>{item.price}</Text>
                    }
                </View>
            </View>
        )
    })


    const [isComplete, setIsComplete] = useState(false)

    return (
        <MainContainer>
            <Header />
            <View style={{ marginTop: '8%', marginHorizontal: '4%', flex: 1 }}>
                <View style={{ flex: 1, marginTop: '8%' }}>
                    <CartPaymentIndecator isComplete={isComplete}/>
                    <Text style={{ marginTop: '6%', fontFamily: 'Poppins-Regular', fontSize: 16, color: theme.TextBlack }}>{listItems.length} item(s) in bag:</Text>
                    <ScrollView
                        // horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ flex: 1, marginBottom: 90, }}>
                            {list}
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ marginTop: '4%', fontFamily: 'Poppins-Regular', fontSize: 18, color: theme.TextBlack }}>Choose Payment Mode</Text>
                            </View>
                            {/* payment options */}
                            <View style={{
                                marginTop: '3%',
                                backgroundColor: theme.background,
                                elivation: 2,
                                shadowColor: theme.TextBlack, 
                                shadowOffset: { width: 1, height: 1 }, 
                                shadowOpacity: 0.2, 
                                shadowRadius: 2,
                                margin: 2
                                }}>
                                {payment}
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ marginTop: '1%', fontFamily: 'Poppins-Regular', fontSize: 12, color: theme.TextBlack }}>
                                    Estimated Delivery by <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 12, color: theme.TextBlack }}>
                                        25th February, 2022
                                    </Text>
                                </Text>
                            </View>
                            {/* order summery */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ marginTop: '4%', fontFamily: 'Poppins-Regular', fontSize: 18, color: theme.TextBlack }}>Order Summary</Text>
                                <Text onPress={() => {navigation.navigate('')}} style={{ marginTop: '4%', fontFamily: 'Poppins-SemiBold', fontSize: 14, textDecorationLine:'underline', color: theme.Purple, }}>Apply Coupon</Text>
                            </View>

                            <View style={{
                                marginTop: '3%',
                                backgroundColor: theme.background,
                                elivation: 2,
                                shadowColor: theme.TextBlack, 
                                shadowOffset: { width: 1, height: 1 }, 
                                shadowOpacity: 0.2, 
                                shadowRadius: 2,
                                margin: 2
                                }}>
                                {summary}
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 1, width: '100%', alignItems: 'center', position: 'absolute', bottom: 10 }}>
                    <Button mode="contained" textStyle={{ lineHeight: 18, fontSize: 14 }} style={{ width: 250, height: 40 }} onPress={() => { setIsComplete(true) }}>Place Your Order</Button>
                </View>
            </View>

        </MainContainer>
    )
}

export default CartPayment;