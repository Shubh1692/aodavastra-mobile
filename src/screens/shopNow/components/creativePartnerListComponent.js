import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from "../styles";
import CardComponent from '../../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../../theme/resources";
import { deviceWidth } from "../../../utils/device";


function CreativePartnerListComponents({item}) {
    const productConfig = item
    console.log(productConfig)
    return (
        //<CardComponent>
        <View style={{
            flexDirection: 'column',
            width: '20%',
            position: 'relative',
            alignItems: 'center'
        }}>
            <FastImage style={{
                width: deviceWidth/5,
                height: deviceWidth/5
            }} source={require('../../../assets/images/unsplash_3T.png')} />
        </View>
        //</CardComponent>
    )
}

export default CreativePartnerListComponents;