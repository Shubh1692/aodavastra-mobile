import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardComponent from '../../../../components/card';
import theme from '../../../../theme/resources';
import styles from '../styles';

export function CartBagIndecator() {
    return (
        <View style={styles.cartIndicatorContainer}>
            {/* Bag */}
            <View style={styles.cartIndicatorActiveLeftContainer} />
            <View style={styles.cartIndicatorTextContainer}>
                <Text style={[styles.cartIndicatorText, {width: 25.5,}]}>Bag</Text>
                <View style={styles.cartIndicatorInActiveDot} />
            </View>
            {/* Address */}
            <View style={styles.cartIndicatorInActiveContainer} />
            <View style={styles.cartIndicatorTextContainer}>
                <Text style={[styles.cartIndicatorText, {width: 53,}]}>Address</Text>
                <View style={styles.cartIndicatorInInactiveDot} />
            </View>
            {/* Payment */}
            <View style={styles.cartIndicatorInActiveContainer} />
            <View style={styles.cartIndicatorTextContainer}>
                <Text style={[styles.cartIndicatorText, {width: 56.5,}]}>Payment</Text>
                <View style={styles.cartIndicatorInInactiveDot} />
            </View>
            <View style={styles.cartIndicatorInactiveRightContainer} />
        </View>
    )
}
export function CartAddressIndecator() {
    return (
        <View style={styles.cartIndicatorContainer}>
            {/* Bag */}
            <View style={styles.cartIndicatorActiveLeftContainer} />
            <View style={styles.cartIndicatorTextContainer}>
                <Text style={[styles.cartIndicatorText, {width: 25.5,}]}>Bag</Text>
                <View style={styles.cartIndicatorInActiveDot} />
            </View>
            {/* Address */}
            <View style={styles.cartIndicatorActiveContainer} />
            <View style={styles.cartIndicatorTextContainer}>
                <Text style={[styles.cartIndicatorText, {width: 53,}]}>Address</Text>
                <View style={styles.cartIndicatorInActiveDot} />
            </View>
            {/* Payment */}
            <View style={styles.cartIndicatorInactiveContainer} />
            <View style={styles.cartIndicatorTextContainer}>
                <Text style={[styles.cartIndicatorText, {width: 56.5,}]}>Payment</Text>
                <View style={styles.cartIndicatorInInactiveDot} />
            </View>
            <View style={styles.cartIndicatorInactiveRightContainer} />
        </View>
    )
}
export function CartPaymentIndecator({ isComplete = false }) {
    return (
        <View style={styles.cartIndicatorContainer}>
            {/* Bag */}
            <View style={styles.cartIndicatorActiveLeftContainer} />
            <View style={styles.cartIndicatorTextContainer}>
                <Text style={[styles.cartIndicatorText, {width: 25.5,}]}>Bag</Text>
                <View style={styles.cartIndicatorInActiveDot} />
            </View>
            {/* Address */}
            <View style={styles.cartIndicatorActiveContainer} />
            <View style={styles.cartIndicatorTextContainer}>
                <Text style={[styles.cartIndicatorText, {width: 53,}]}>Address</Text>
                <View style={styles.cartIndicatorInActiveDot} />
            </View>
            {/* Payment */}
            <View style={styles.cartIndicatorActiveContainer} />
            <View style={styles.cartIndicatorTextContainer}>
                <Text style={[styles.cartIndicatorText, {width: 56.5,}]}>Payment</Text>
                <View style={styles.cartIndicatorInActiveDot} />
            </View>
            {isComplete ?
                <View style={styles.cartIndicatorActiveRightContainer} />
                :
                <View style={styles.cartIndicatorInactiveRightContainer} />
            }
        </View>
    )
}