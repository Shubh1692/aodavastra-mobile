import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from "../styles";
import CardComponent from '../../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../../theme/resources";


function BestSellerListComponents({item}) {
    const productConfig = item
    console.log(productConfig)
    return (
        //<CardComponent>
                <View style={{
                    flexDirection: 'column',
                    width: '50%',
                    position: 'relative',
                    alignItems: 'center'
                }}>
                    <FastImage style={{
                         width: '90%',
                         height: 184,
                    }} source={require('../../../assets/images/p2.png')} />
                    
                    <View style={styles.contentSection}>
                        <View style={styles.titleStyle}>
                            <Text style={{ color: theme.TextBlack, width:'100%'}} numberOfLines={1}>{productConfig.name}</Text>
                        </View>
                    </View>
                </View>
        //</CardComponent>
    )
}

export default BestSellerListComponents;