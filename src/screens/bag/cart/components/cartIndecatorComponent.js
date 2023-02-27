import React from 'react';
import { View, Text, } from 'react-native';
import CardComponent from '../../../../components/card';
import theme from '../../../../theme/resources';
import styles from './../styles';

export function CartBagIndecator() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {/* Bag */}
            <View style={{ backgroundColor: theme.Purple, height: 4, width: '20%', borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }} />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ flex: 1, alignItems: 'center', position: 'absolute', width: 25.5, height: 50, fontFamily: theme.Poppins.regular, fontSize: 12, color: theme.TextBlack }}>Bag</Text>
                <View style={{ backgroundColor: theme.Purple, height: 10, width: 10, borderRadius: 5 }} />
            </View>
            {/* Address */}
            <View style={{ backgroundColor: theme.bagHighlighterGrey, height: 4, width: '20%' }} />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ flex: 1, alignItems: 'center', position: 'absolute', width: 53, height: 50, fontFamily: theme.Poppins.regular, fontSize: 12, color: theme.TextBlack }}>Address</Text>
                <View style={{ backgroundColor: theme.White, height: 10, width: 10, borderRadius: 5, borderWidth: 2.5, borderColor: theme.bagHighlighterGrey }} />
            </View>
            {/* Payment */}
            <View style={{ backgroundColor: theme.bagHighlighterGrey, height: 4, width: '20%' }} />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ flex: 1, alignItems: 'center', position: 'absolute', width: 56.5, height: 50, fontFamily: theme.Poppins.regular, fontSize: 12, color: theme.TextBlack }}>Payment</Text>
                <View style={{ backgroundColor: theme.White, height: 10, width: 10, borderRadius: 5, borderWidth: 2.5, borderColor: theme.bagHighlighterGrey }} />
            </View>
            <View style={{ backgroundColor: theme.bagHighlighterGrey, height: 4, width: '20%', borderTopRightRadius: 2, borderBottomRightRadius: 2 }} />
        </View>
    )
}
export function CartAddressIndecator() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {/* Bag */}
            <View style={{ backgroundColor: theme.Purple, height: 4, width: '20%', borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }} />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ flex: 1, alignItems: 'center', position: 'absolute', width: 25.5, height: 50, fontFamily: theme.Poppins.regular, fontSize: 12, color: theme.TextBlack }}>Bag</Text>
                <View style={{ backgroundColor: theme.Purple, height: 10, width: 10, borderRadius: 5 }} />
            </View>
            {/* Address */}
            <View style={{ backgroundColor: theme.Purple, height: 4, width: '20%' }} />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ flex: 1, alignItems: 'center', position: 'absolute', width: 53, height: 50, fontFamily: theme.Poppins.regular, fontSize: 12, color: theme.TextBlack }}>Address</Text>
                <View style={{ backgroundColor: theme.Purple, height: 10, width: 10, borderRadius: 5 }} />
            </View>
            {/* Payment */}
            <View style={{ backgroundColor: theme.bagHighlighterGrey, height: 4, width: '20%' }} />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ flex: 1, alignItems: 'center', position: 'absolute', width: 56.5, height: 50, fontFamily: theme.Poppins.regular, fontSize: 12, color: theme.TextBlack }}>Payment</Text>
                <View style={{ backgroundColor: theme.White, height: 10, width: 10, borderRadius: 5, borderWidth: 2.5, borderColor: theme.bagHighlighterGrey }} />
            </View>
            <View style={{ backgroundColor: theme.bagHighlighterGrey, height: 4, width: '20%', borderTopRightRadius: 2, borderBottomRightRadius: 2 }} />
        </View>
    )
}
export function CartPaymentIndecator({ isComplete = false }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {/* Bag */}
            <View style={{ backgroundColor: theme.Purple, height: 4, width: '20%', borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }} />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ flex: 1, alignItems: 'center', position: 'absolute', width: 25.5, height: 50, fontFamily: theme.Poppins.regular, fontSize: 12, color: theme.TextBlack }}>Bag</Text>
                <View style={{ backgroundColor: theme.Purple, height: 10, width: 10, borderRadius: 5 }} />
            </View>
            {/* Address */}
            <View style={{ backgroundColor: theme.Purple, height: 4, width: '20%' }} />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ flex: 1, alignItems: 'center', position: 'absolute', width: 53, height: 50, fontFamily: theme.Poppins.regular, fontSize: 12, color: theme.TextBlack }}>Address</Text>
                <View style={{ backgroundColor: theme.Purple, height: 10, width: 10, borderRadius: 5 }} />
            </View>
            {/* Payment */}
            <View style={{ backgroundColor: theme.Purple, height: 4, width: '20%' }} />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ flex: 1, alignItems: 'center', position: 'absolute', width: 56.5, height: 50, fontFamily: theme.Poppins.regular, fontSize: 12, color: theme.TextBlack }}>Payment</Text>
                <View style={{ backgroundColor: theme.Purple, height: 10, width: 10, borderRadius: 5 }} />
            </View>
            {isComplete ?
                <View style={{ backgroundColor: theme.Purple, height: 4, width: '20%', borderTopRightRadius: 2, borderBottomRightRadius: 2 }} />
                :
                <View style={{ backgroundColor: theme.bagHighlighterGrey, height: 4, width: '20%', borderTopRightRadius: 2, borderBottomRightRadius: 2 }} />
            }
        </View>
    )
}