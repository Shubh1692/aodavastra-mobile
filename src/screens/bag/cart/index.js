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
import DefaultEmpty from '../../../components/defaultEmpty';

function Cart({ navigation }) {
    const emptyCart = false

    const listItems = [
        { id: 1, name: 'Net Multi Work Saree', price: '2,099.00', outOfStock: false },
        // { id:2, name:'Net Multi Work Saree', price:'2,099.00', outOfStock:false}, 
        // { id:3, name:'Net Multi Work Saree', price:'2,099.00', outOfStock:true}, 
        // { id:4, name:'Net Multi Work Saree', price:'2,099.00', outOfStock:false},
    ]
    const list = listItems.map((item, index) => {
        return (
            <CartListComponents item={item} isCart={true} key={index.toString()} />
        )
    })

    return (
        <MainContainer>
            <Header isBack={false} />
            {listItems.length == 0
                ?
                <DefaultEmpty containerStyle={{ marginTop: '8%', }} description={'Your Shopping Bag is \nEmpty Right Now'} buttonTitle={'Shop Now'} buttonCallBack={() => { navigate('shopNow') }} />
                :
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <CartBagIndecator />
                        <Text style={styles.title}>{listItems.length} item(s) in bag:</Text>
                        <ScrollView
                            // horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.listContainer}>
                                {list}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.btnContainer}>
                        <Button mode="contained" textStyle={styles.btnTextStyle} style={styles.btnStyle} onPress={() => { navigation.navigate('cartAddress', { listItems }) }}>Proceed to Checkout</Button>
                    </View>
                </View>
            }

        </MainContainer>
    )
}

export default Cart;