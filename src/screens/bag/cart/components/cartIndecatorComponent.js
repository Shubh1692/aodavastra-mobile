import React from 'react';
import { View, Text, } from 'react-native';
import CardComponent from '../../../../components/card';
import theme from '../../../../theme/resources';
import styles from './../styles';

export function CartBagIndecator() {
    return (
        <View style={styles.cartIndicatorContainer}>
            {/* Bag */}
            <View style={styles.purpleLine} />
            <View style={styles.cartIndicatorSubContanier}>
                <Text style={styles.bagTitle}>Bag</Text>
                <View style={styles.fillCircle} />
            </View>
            {/* Address */}
            <View style={styles.grayLine} />
            <View style={styles.cartIndicatorSubContanier}>
                <Text style={styles.addressTitle}>Address</Text>
                <View style={styles.emptyCircle} />
            </View>
            {/* Payment */}
            <View style={styles.grayLine} />
            <View style={styles.cartIndicatorSubContanier}>
                <Text style={styles.paymentTitle}>Payment</Text>
                <View style={styles.emptyCircle} />
            </View>
            <View style={[{ backgroundColor: theme.bagHighlighterGrey }, styles.paymentCompleteLine]} />
        </View>
    )
}
export function CartAddressIndecator() {
    return (
        <View style={styles.cartIndicatorContainer}>
            {/* Bag */}
            <View style={styles.purpleLine} />
            <View style={styles.cartIndicatorSubContanier}>
                <Text style={styles.bagTitle}>Bag</Text>
                <View style={styles.fillCircle} />
            </View>
            {/* Address */}
            <View style={styles.purpleLine} />
            <View style={styles.cartIndicatorSubContanier}>
                <Text style={styles.addressTitle}>Address</Text>
                <View style={styles.fillCircle} />
            </View>
            {/* Payment */}
            <View style={styles.grayLine} />
            <View style={styles.cartIndicatorSubContanier}>
                <Text style={styles.paymentTitle}>Payment</Text>
                <View style={styles.emptyCircle} />
            </View>
            <View style={[{ backgroundColor: theme.bagHighlighterGrey }, styles.paymentCompleteLine]} />
        </View>
    )
}
export function CartPaymentIndecator({ isComplete = false }) {
    return (
        <View style={styles.cartIndicatorContainer}>
            {/* Bag */}
            <View style={styles.purpleLine} />
            <View style={styles.cartIndicatorSubContanier}>
                <Text style={styles.bagTitle}>Bag</Text>
                <View style={styles.fillCircle} />
            </View>
            {/* Address */}
            <View style={styles.purpleLine} />
            <View style={styles.cartIndicatorSubContanier}>
                <Text style={styles.addressTitle}>Address</Text>
                <View style={styles.fillCircle} />
            </View>
            {/* Payment */}
            <View style={styles.purpleLine} />
            <View style={styles.cartIndicatorSubContanier}>
                <Text style={styles.paymentTitle}>Payment</Text>
                <View style={styles.fillCircle} />
            </View>
            {isComplete ?
                <View style={[{ backgroundColor: theme.Purple }, styles.paymentCompleteLine]} />
                :
                <View style={[{ backgroundColor: theme.bagHighlighterGrey }, styles.paymentCompleteLine]} />
            }
        </View>
    )
}