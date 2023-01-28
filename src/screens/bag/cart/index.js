import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CardComponent from '../../../components/card';
import Header from '../../../components/header';
import theme from '../../../theme/resources';
import LineDivider from '../../../components/lineDivider';
import Icon from '../../../components/icon';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import SeparatorComponent from '../../../components/Separator';
import { deviceHeight, deviceWidth } from '../../../utils/device';
import Button from '../../../components/button';
import MainContainer from '../../../components/mainContainer';


function Cart() {
    const emptyCart = true
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
                        <Button mode="contained" textStyle={{ lineHeight: 18, fontSize: 14 }} style={{ width: 200, height: 40 }} onPress={() => console.log("hii")}>Shop Now</Button>
                    </View>
                </View>
                :
                <View style={{ marginTop: '8%', marginHorizontal: '4%' }}>
                    {/*  */}
                </View>
            }

        </MainContainer>
    )
}

export default Cart;