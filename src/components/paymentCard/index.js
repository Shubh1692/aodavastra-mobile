import React from 'react';
import { View } from 'react-native';
import styles from './styles';

function PaymentCard({ children,viewStyle }) {
    return (
        <View style={[styles.containerStyle,viewStyle]}>
            {children}
        </View>
    )
}

export default PaymentCard;