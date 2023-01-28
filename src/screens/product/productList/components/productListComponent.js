import React, { useState } from "react";
import { View, Text, Image } from 'react-native';
import styles from "../styles";
import CardComponent from '../../../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../../../theme/resources";
import Title from "../../../../components/title";
import Button from '../../../../components/button';


function ProductListComponents(props) {
    const productConfig = props.item.item
    //console.log(productConfig)
    return (

            <View style={styles.cardSection}>
                <View style={styles.cardInnerSection}>
                    <FastImage style={styles.imgStyle} source={require('../../../../assets/images/p2.png')} />
                    {productConfig.outOfStock && <View style={styles.outOfStockStyle}>
                        <Text style={{ color: theme.White, fontSize: 14, fontWeight: '500'}}>Out of Stock</Text>
                    </View>}

                    <View style={styles.contentSection}>
                        <View style={styles.titleStyle}>
                            <Text style={{ color: theme.TextBlack}} numberOfLines={1}>{productConfig.name}</Text>
                        </View>
                        <View style={styles.priceStyle}>
                            <Text style={{ color: theme.TextBlack }}>{productConfig.price}</Text>
                        </View>
                    </View>
                </View>
            </View>
    )
}

export default ProductListComponents;