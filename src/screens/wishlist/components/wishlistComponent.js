import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from "../styles";
import CardComponent from '../../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../../theme/resources";
import Title from "../../../components/title";
import Button from '../../../components/button';


function WishlistComponents() {
    return (
        <CardComponent>
            <View style={styles.cardSection}>
                <View style={styles.cardInnerSection}>
                    <FastImage style={styles.imgStyle} source={require('../../../assets/images/p1.png')} />
                    <View style={styles.contentSection}>
                        <View style={styles.titleStyle}>
                            <Title numberOfLines={2} name="American Diamond Bangles" />
                            <View style={styles.priceStyle}>
                                <Text style={{ color: theme.TextBlack }}>₹ 999.00</Text>
                            </View>
                        </View>

                        <View style={styles.btnSection}>
                            <Button mode="outlined" textStyle={[styles.btnText,{lineHeight:14}]} style={{ width: '46%',height:32,paddingVertical:0,marginVertical:0 }} onPress={() => console.log('hii')}>Remove </Button>
                            <Button mode="contained" textStyle={{ fontSize: 10,lineHeight:14 }} style={{ width: '48%',height:32,paddingVertical:0,marginVertical:0 }} onPress={() => console.log('hii')}>Add to bag </Button>
                        </View>

                    </View>
                </View>
            </View>
        </CardComponent>
    )
}

export default WishlistComponents;