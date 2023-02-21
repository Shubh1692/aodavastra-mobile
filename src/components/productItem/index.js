import React, { useState } from "react";
import { View, Text, Image,TouchableOpacity } from 'react-native';
import styles from "./styles";
import FastImage from 'react-native-fast-image';
import theme from "../../theme/resources";
import RectangleImage from '../rectangleImage';
import PriceText from '../priceText';
import { navigate } from "../../services/NavigationService";


function ProductItem({ item, isProductOutOfStock = false,price,title,imageUrl }) {
    const productConfig = item
    console.log(productConfig)
    return (
        <TouchableOpacity onPress={() => navigate('productDetails')} activeOpacity={0.8} style={styles.cardSection}>
            <View style={styles.cardInnerSection}>
                <RectangleImage imageStyle={styles.imgStyle} imgUrl={require('../../assets/images/p2.png')} />
                {isProductOutOfStock && <View style={styles.outOfStockStyle}>
                    <Text style={styles.outOfStocktextStyle}>Out of Stock</Text>
                </View>}

                <View style={styles.contentSection}>
                    <View style={styles.titleStyle}>
                        <Text style={styles.productName} numberOfLines={1}>{title}</Text>
                    </View>
                    {productConfig.price != undefined && <PriceText price={price}/>}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem;