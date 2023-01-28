import React, { useState } from "react";
import { View, Text, Image } from 'react-native';
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
        <View style={{backgroundColor: theme.lightPurple, padding: 5, borderRadius: 20, margin: 5}}>
            <View style={{
                flexDirection: 'column',
                //width: deviceWidth/6.2,
                position: 'relative',
                alignItems: 'center',
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2%'
                }}>
                    <Text style={{ color: theme.TextBlack, fontSize: 10, fontFamily: 'Poppins-Regular',}}>{item.name}</Text>
                </View>
            </View>
        </View>
        //</CardComponent>
    )
}

export default CategoryListComponents;