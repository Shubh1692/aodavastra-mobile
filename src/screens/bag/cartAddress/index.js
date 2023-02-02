import React from 'react';
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
import AddressPlaceholder from '../../../assets/images/AddressPlaceholder.svg'
import {useRoute} from '@react-navigation/native'
import CartIndecatorComponents, { AddressIndecator, CartAddressIndecator } from '../cart/components/cartIndecatorComponent';

function CartAddress({ navigation }) {
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

    return (
        <MainContainer>
            <Header />
            <View style={{ marginTop: '8%', marginHorizontal: '4%', flex: 1 }}>
                <View style={{ flex: 1, marginTop: '8%' }}>
                    <CartAddressIndecator />
                    <Text style={{ marginTop: '6%', fontFamily: 'Poppins-Regular', fontSize: 16, color: theme.TextBlack }}>{listItems.length} item(s) in bag:</Text>
                    <ScrollView
                        // horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ flex: 1, marginBottom: 90, }}>
                            {list}
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ marginTop: '4%', fontFamily: 'Poppins-Regular', fontSize: 18, color: theme.TextBlack }}>Address</Text>
                                <Text onPress={() => {navigation.navigate('addAddress')}} style={{ marginTop: '4%', fontFamily: 'Poppins-SemiBold', fontSize: 14, textDecorationLine:'underline', color: theme.Purple, }}>Add Address</Text>
                            </View>
                            {addressList.length > 0 ?
                                <AddressListComponent />
                                : <View style={ {
                                    marginTop: '3%', 
                                    backgroundColor: theme.background,
                                    minHeight: 120,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <AddressPlaceholder />
                                    <Text onPress={() => console.log("hii")} style={{ marginTop: '4%', fontFamily: 'Poppins-Regular', fontSize: 14, color: theme.textGrey, }}>Please add your delivery address </Text>
                                </View>}
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 1, width: '100%', alignItems: 'center', position: 'absolute', bottom: 10 }}>
                    <Button mode="contained" textStyle={{ lineHeight: 18, fontSize: 14 }} style={{ width: 250, height: 40 }} onPress={() => { navigation.navigate('cartPayment',{listItems}) }}>Proceed to Checkout</Button>
                </View>
            </View>

        </MainContainer>
    )
}

export default CartAddress;