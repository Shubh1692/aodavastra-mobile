import React, { useState } from "react";
import { View, Text, Image } from 'react-native';
import styles from "../styles";
import CardComponent from '../../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../../theme/resources";
import { deviceWidth } from "../../../utils/device";


function TopProductListComponents({item}) {
    const productConfig = item
    console.log(productConfig)
    return (
        //<CardComponent>
        <View style={{
            flexDirection: 'column',
            width: deviceWidth/3.3,
            position: 'relative',
            alignItems: 'center',
        }}>
            <FastImage style={styles.imgStyle} source={require('../../../assets/images/p2.png')} />
            {item.outOfStock && <View style={styles.outOfStockStyle}>
                <Text style={{ color: theme.White, fontSize: 14, fontFamily: theme.Poppins.semiBold,}}>Out of Stock</Text>
            </View>}

            <View style={styles.contentSection}>
                <View style={styles.titleStyle}>
                    <Text style={{ color: theme.textGrey, fontSize: 12, fontFamily: theme.Poppins.regular, width:'100%'}} numberOfLines={1}>{item.name}</Text>
                </View>
                {item.price != undefined && <View style={styles.priceStyle}>
                    <Text style={{ color: theme.textGrey, fontSize: 12, fontFamily: theme.Poppins.regular,}}>{item.price}</Text>
                </View>}
            </View>
        </View>
        //</CardComponent>
    )
}

export default TopProductListComponents;