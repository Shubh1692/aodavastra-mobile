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
                if ((item.title == 'Discount: ') && (item.price != '₹ 0.00')) {
                    summaryItem.splice(index, 1);
                    setSummaryItem(summaryItem)
                }
                return (
                    <View key={index.toString()}>
                        <View style={{
                            backgroundColor: theme.background,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: '4%',
                        }}>
                            <Heading viewStyle={{ marginVertical: '1%', width: '50%', paddingVertical: 0, }} textStyle={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: theme.TextBlack, }} title={item.title} />
                            {item.title == 'Order Total: '
                                ?
                                <PriceText viewStyle={{ marginVertical: '1%', }} textStyle={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: theme.Purple, }} price={item.price} />
                                :
                                <PriceText viewStyle={{ marginVertical: '1%', }} textStyle={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: theme.TextBlack, }} price={item.price} />
                            }
                        </View>
                    </View>
                )
            })}
        </PaymentCard>
    )
}

export default OrderDetailsSummaryComponent;