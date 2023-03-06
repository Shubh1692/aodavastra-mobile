import React from 'react';
import { View, Text, } from 'react-native';
import CardComponent from '../../../../components/card';
import theme from '../../../../theme/resources';
import styles from './../styles';
import FastImage from 'react-native-fast-image';
import Button from '../../../../components/button';
import Title from "../../../../components/title";
import DownArrow from "../../../../assets/images/DownArrow.svg"
import PriceText from '../../../../components/priceText';

function CartListComponents({ item, isCart, navigation }) {
    return (
        <View style={styles.cartListContainer}>
            <View style={styles.cartListSubContaner}>
                <View style={styles.cartListSubContanerChild}>
                    <FastImage style={styles.cartListImageStyle} source={require('../../../../assets/images/p1.png')} />
                    <View style={styles.cartListTitleContainer}>
                        <Title numberOfLines={2} name="American Diamond Bangles" />
                        <View style={styles.cartListQtyView}>
                            <Text style={{ color: theme.TextBlack }}>Qty: 1</Text>
                            <DownArrow />
                        </View>
                        <PriceText viewStyle={styles.cartListPriceView} price={'999.00'} />
                    </View>
                </View>
                {isCart && <View style={styles.cartListBottomBtn}>
                    <Button mode="text" textStyle={styles.cartListBtnTextStyle} style={[{ width: 110 }, styles.cartListBtnStyle]} onPress={() => console.log('hii')}>Remove</Button>
                    <View style={styles.cartListBtnSeaprator} />
                    <Button mode="text" textStyle={styles.cartListBtnTextStyle} style={[{ flex: 1 }, styles.cartListBtnStyle]} onPress={() => console.log('hii')}>Move to Wishlist</Button>
                </View>}
            </View>
        </View>
    )
}

export default CartListComponents;