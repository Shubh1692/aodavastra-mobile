import React, { useState } from "react";
import { View, Text, Image } from 'react-native';
import styles from "../styles";
import CardComponent from '../../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../../theme/resources";
import { deviceWidth } from "../../../utils/device";


function BrandListComponent({item}) {
    const productConfig = item
    console.log(productConfig)
    return (
        //<CardComponent>
        <View style={{
            // flexDirection: 'column',
            //width: '33.33%',
            width:'33.33%',
            position: 'relative',
            alignItems: 'center',
            // padding: 7,
            // marginHorizontal:4,
            // justifyContent:'space-between',
            marginVertical:4,
        }}>
            <FastImage 
            resizeMode="cover"
            style={{
                width: deviceWidth/3-24,
                height: deviceWidth/3-24,
                alignSelf:'center'
            }} source={require('../../../assets/images/brand275.png')} />
        </View>
        //</CardComponent>
    )
}

export default BrandListComponent;