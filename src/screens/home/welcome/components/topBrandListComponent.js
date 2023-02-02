import React, { useState } from "react";
import { View, Text, Image } from 'react-native';
import styles from "../styles";
import CardComponent from '../../../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../../../theme/resources";
import { deviceWidth } from "../../../../utils/device";


function TopBrandListComponents({item}) {
    const productConfig = item
    console.log(productConfig)
    return (
        <View style={{
            flexDirection: 'column',
            //width: deviceWidth/4.35,
            position: 'relative',
            alignItems: 'center',
            marginHorizontal: 13,
            marginVertical:9
        }}>
            <FastImage style={styles.brandImgStyle} source={require('../../../../assets/images/brand275.png')} />
        </View>
    )
}

export default TopBrandListComponents;