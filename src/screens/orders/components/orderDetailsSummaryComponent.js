import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PriceText from '../../../components/priceText';
import theme from '../../../theme/resources';
import Heading from '../../../components/heading';
import PaymentCard from '../../../components/paymentCard';


function OrderDetailsSummaryComponent({ summaryItem,setSummaryItem }) {
    return (
        <PaymentCard>
            {summaryItem.map((item, index) => {
                if ((item.title == 'Discount: ') && (item.price != '0.00')) {
                    summaryItem.splice(index, 1);
                    setSummaryItem(summaryItem)
                }
                return (
                    <View key={index.toString()}>
                        <View style={styles.container}>
                            <Heading viewStyle={styles.headingStyle} textStyle={styles.headingTextStyle} title={item.title} />
                            {item.title == 'Order Total: '
                                ?
                                <PriceText viewStyle={{ marginVertical: '1%', }} textStyle={styles.totalPriceTextStyle} price={item.price} />
                                :
                                <PriceText viewStyle={{ marginVertical: '1%', }} textStyle={styles.priceTextStyle} price={item.price} />
                            }
                        </View>
                    </View>
                )
            })}
        </PaymentCard>
    )
}

export default OrderDetailsSummaryComponent;

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

    totalPriceTextStyle: {
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