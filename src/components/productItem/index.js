import React, { useState } from "react";
import { View, Text, Image } from 'react-native';
import styles from "./styles";
import FastImage from 'react-native-fast-image';
import theme from "../../theme/resources";


function ProductItem({ item, isProductOutOfStock = false,price,title,imageUrl }) {
    const productConfig = item
    console.log(productConfig)
    return (
        <View style={styles.cardSection}>
            <View style={styles.cardInnerSection}>
                <FastImage style={styles.imgStyle} source={require('../../assets/images/p2.png')} />
                {isProductOutOfStock && <View style={styles.outOfStockStyle}>
                    <Text style={styles.outOfStocktextStyle}>Out of Stock</Text>
                </View>}

                <View style={styles.contentSection}>
                    <View style={styles.titleStyle}>
                        <Text style={styles.productName} numberOfLines={1}>{title}</Text>
                    </View>
                    {productConfig.price != undefined && <View style={styles.priceStyle}>
                        <Text style={styles.priceTextStyle}>{price}</Text>
                    </View>}
                </View>
            </View>
        </View>
    )
}

export default ProductItem;