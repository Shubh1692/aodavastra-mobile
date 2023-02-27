import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';

function PriceText({price,viewStyle,textStyle}) {
    return (
        <View style={[styles.priceStyle,viewStyle]}>
            <Text style={[styles.priceTextStyle,textStyle]}>₹ {price}</Text>
        </View>
    )
}

export default PriceText;