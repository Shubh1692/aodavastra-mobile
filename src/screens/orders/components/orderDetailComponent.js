import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PriceText from '../../../components/priceText';
import theme from '../../../theme/resources';
import Heading from '../../../components/heading';
import PaymentCard from '../../../components/paymentCard';


function OrderDetailComponent({ orderDetailsItem }) {
    return (
        <PaymentCard>
            {orderDetailsItem.map((item, index) => (
                <View key={index.toString()}>
                    <View style={{
                        backgroundColor: theme.background,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: '4%',
                    }}>
                        <Heading viewStyle={{ marginVertical: '1%', width: '50%', paddingVertical: 0, }} textStyle={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: theme.TextBlack, }} title={item.title} />
                        {item.isPrice
                            ?
                            <PriceText viewStyle={{ marginVertical: '1%', }} textStyle={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: theme.Purple, }} price={item.value} />
                            :
                            <PriceText viewStyle={{ marginVertical: '1%', }} textStyle={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: theme.TextBlack, }} price={item.value} />
                        }
                    </View>
                </View>
            ))}
        </PaymentCard>
    )
}

export default OrderDetailComponent;