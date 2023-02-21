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
import CartListComponents from './components/cartListComponent';
import CartIndecatorComponents, { CartBagIndecator } from './components/cartIndecatorComponent';

function Cart({ navigation }) {
    const emptyCart = false

    const listItems = [
        { id: 1, name: 'Net Multi Work Saree', price: '₹ 2,099.00', outOfStock: false },
        // { id:2, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false}, 
        // { id:3, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:true}, 
        // { id:4, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false},
    ]
    const list = listItems.map((item, index) => {
        return (
            <CartListComponents item={item} isCart={true} key={index.toString()} />
        )
    })

    return (
        <MainContainer>
            <Header isBack={false} />
            {emptyCart
                ?
                <View style={{ marginTop: '8%', flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ alignItems: 'flex-end', justifyContent: 'center', height: deviceHeight / 1.2, width: deviceWidth, position: 'absolute' }}>
                            <FastImage source={require('../../../assets/images/empty_cart.png')} style={{ height: deviceHeight / 2, width: deviceWidth / 2, }} resizeMode="contain" />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: deviceHeight / 1.2, width: deviceWidth, position: 'absolute' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', color: theme.TextBlack, width: deviceWidth / 1.6, textAlign: 'center' }}> Your Shopping Bag is Empty Right Now </Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button mode="contained" textStyle={{ lineHeight: 18, fontSize: 14 }} style={{ width: 200, height: 40 }} onPress={() => { navigation.navigate('shopNow') }}>Shop Now</Button>
                    </View>
                </View>
                :
                <View style={{ marginTop: '8%', marginHorizontal: '4%', flex: 1 }}>
                    <View style={{ flex: 1, marginTop: '8%' }}>
                        <CartBagIndecator />
                        <Text style={{ marginTop: '6%', fontFamily: 'Poppins-Regular', fontSize: 16, color: theme.TextBlack }}>{listItems.length} item(s) in bag:</Text>
                        <ScrollView
                            // horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={{ flex: 1, marginBottom: 90,}}>
                                {list}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ flex: 1, width: '100%', alignItems: 'center', position: 'absolute', bottom: 10 }}>
                        <Button mode="contained" textStyle={{ lineHeight: 18, fontSize: 14 }} style={{ width: 250, height: 40 }} onPress={() => { navigation.navigate('cartAddress', {listItems}) }}>Proceed to Checkout</Button>
                    </View>
                </View>
            }

        </MainContainer>
    )
}

export default Cart;