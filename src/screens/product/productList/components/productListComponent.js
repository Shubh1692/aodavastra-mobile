import React, { useState } from "react";
import { View, Text, Image } from 'react-native';
import styles from "../styles";
import CardComponent from '../../../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../../../theme/resources";


function ProductListComponents({item}) {
    const productConfig = item
    console.log(productConfig)
    return (
            <View style={styles.cardSection}>
                <View style={styles.cardInnerSection}>
                    <FastImage style={styles.imgStyle} source={require('../../../../assets/images/p2.png')} />
                    {productConfig.outOfStock && <View style={styles.outOfStockStyle}>
                        <Text style={{ color: theme.White, fontFamily: theme.Poppins.regular,fontSize: 14, fontFamily: theme.Poppins.regular, fontFamily:theme.Poppins.semiBold,}}>Out of Stock</Text>
                    </View>}

                    <View style={styles.contentSection}>
                        <View style={styles.titleStyle}>
                            <Text style={{ color: theme.TextBlack, width:'100%'}} numberOfLines={1}>{productConfig.name}</Text>
                        </View>
                        {productConfig.price != undefined && <View style={styles.priceStyle}>
                            <Text style={{ color: theme.TextBlack, fontFamily: theme.Poppins.regular,fontSize: 14, fontFamily: theme.Poppins.regular,}}>{productConfig.price}</Text>
                        </View>}
                    </View>
                </View>
            </View>
    )
}

export default ProductListComponents;