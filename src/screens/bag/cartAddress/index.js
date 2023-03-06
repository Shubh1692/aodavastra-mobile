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
import { useRoute } from '@react-navigation/native'
import CartIndecatorComponents, { AddressIndecator, CartAddressIndecator } from '../cart/components/cartIndecatorComponent';

function CartAddress({ navigation }) {
    const route = useRoute()
    const { listItems } = route.params;
    const list = listItems.map((item, index) => {
        return (
            <CartListComponents item={item} key={index.toString()} />
        )
    })

    const addressList = [
        { id: 1, name: 'Net Multi Work Saree', price: '2,099.00', outOfStock: false },
    ]

    return (
        <MainContainer>
            <Header />
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <CartAddressIndecator />
                    <Text style={styles.title}>{listItems.length} item(s) in bag:</Text>
                    <ScrollView
                        // horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.listContainer}>
                            {list}
                            <View style={styles.addressContainer}>
                                <Text style={styles.addressText}>Address</Text>
                                <Text onPress={() => { navigation.navigate('addAddress') }} style={styles.addAddressText}>Add Address</Text>
                            </View>
                            {addressList.length > 0 ?
                                <AddressListComponent isCheckShow={true} />
                                : <View style={styles.emptyAddressContainer}>
                                    <AddressPlaceholder />
                                    <Text onPress={() => console.log("hii")} style={styles.emptyAddressText}>Please add your delivery address </Text>
                                </View>}
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.btnContainer}>
                    <Button mode="contained" textStyle={styles.btnTextStyle} style={styles.btnStyle} onPress={() => { navigation.navigate('cartPayment', { listItems }) }}>Proceed to Checkout</Button>
                </View>
            </View>

        </MainContainer>
    )
}

export default CartAddress;