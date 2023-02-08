import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from "../styles";
import CardComponent from '../../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../../theme/resources";
import { deviceWidth } from "../../../utils/device";


function CategoryListComponents({item}) {
    const productConfig = item
    console.log(productConfig)
    return (
        //<CardComponent>
        <View style={{
            // flexDirection: 'row',
            // width: '50%',
            position: 'relative',
            // alignItems: 'center'
            marginHorizontal:4
        }}>
            <FastImage style={{
                width: deviceWidth/2.3,
                height: deviceWidth/4.4,
                borderRadius: 4.5,
            }} source={ productConfig.id == 1 ? require('../../../assets/images/c1.png') : require('../../../assets/images/c2.png')} resizeMode='contain'/>
            <View style={styles.categoryTitleStyle}>
                <Text style={{ color: theme.White, fontSize: 14, fontFamily: 'Poppins-SemiBold',}}>{productConfig.name}</Text>
            </View>
        </View>
        //</CardComponent>
    )
}

export default CategoryListComponents;