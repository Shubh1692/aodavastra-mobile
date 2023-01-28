import React, { useState } from "react";
import { View, Text, Image } from 'react-native';
import styles from "../styles";
import CardComponent from '../../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../../theme/resources";


function TopBrandListComponents({item}) {
    const productConfig = item
    console.log(productConfig)
    return (
        //<CardComponent>
        <View style={{
            flexDirection: 'column',
            //width: deviceWidth/4.35,
            position: 'relative',
            alignItems: 'center',
            padding: 5,
        }}>
            <FastImage style={styles.brandImgStyle} source={require('../../../assets/images/brand275.png')} />
        </View>
        //</CardComponent>
    )
}

export default TopBrandListComponents;