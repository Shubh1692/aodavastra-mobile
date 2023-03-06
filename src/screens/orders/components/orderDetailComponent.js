import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PriceText from '../../../components/priceText';
import theme from '../../../theme/resources';
import Heading from '../../../components/heading';
import PaymentCard from '../../../components/paymentCard';


function OrderDetailComponent({ orderDetailsItem }) {
    return (
        <PaymentCard>
            {orderDetailsItem.map((item, index) => (
                <View key={index.toString()}>
                    <View style={styles.container}>
                        <Heading viewStyle={styles.headingStyle} textStyle={styles.headingTextStyle} title={item.title} />
                        {item.isPrice
                            ?
                            <PriceText viewStyle={{ marginVertical: '1%', }} textStyle={styles.isPriceTextStyle} price={item.value} />
                            :
                            <PriceText viewStyle={{ marginVertical: '1%', }} textStyle={styles.priceTextStyle} price={item.value} />
                        }
                    </View>
                </View>
            ))}
        </PaymentCard>
    )
}

export default OrderDetailComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.background,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '4%',
    },
    headingStyle: {
        marginVertical: '1%',
        width: '50%',
        paddingVertical: 0,
    },
    headingTextStyle: {
        fontFamily: theme.Poppins.medium,
        fontSize: 14,
        color: theme.TextBlack,
    },
    isPriceTextStyle: {
        fontFamily: theme.Poppins.medium,
        fontSize: 14,
        color: theme.Purple,
    },
    priceTextStyle: {
        fontFamily: theme.Poppins.regular,
        fontSize: 14,
        color: theme.TextBlack,
    },
})