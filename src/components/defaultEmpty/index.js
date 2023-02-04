import React from 'react';
import { View, Text } from 'react-native';
import {deviceHeight, deviceWidth} from '../../utils/device';
import FastImage from 'react-native-fast-image';
import theme from '../../theme/resources';
import Button from '../button';
import {navigate} from '../../services/NavigationService';


function DefaultEmpty() {
    return (
        <View style={{  flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center'}}>
                <View style={{ alignItems: 'flex-end', justifyContent: 'center',  width: deviceWidth,  }}>
                    <FastImage source={require('../../assets/images/empty_cart.png')} style={{ height: deviceHeight / 2, width: deviceWidth / 2, }} resizeMode="contain" />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', height: deviceHeight / 1.2, width: deviceWidth, position: 'absolute' }}>
                    <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', color: theme.TextBlack, width: deviceWidth / 1.6, textAlign: 'center' }}> Your Shopping Bag is Empty Right Now </Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Button mode="contained" textStyle={{ lineHeight: 18, fontSize: 14 }} style={{ width: 200, height: 40 }} onPress={() => { navigate('shopNow') }}>Shop Now</Button>
            </View>
        </View>
    )
}

export default DefaultEmpty;