import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import CardComponent from '../../../../components/card';
import theme from '../../../../theme/resources';
import FastImage from 'react-native-fast-image';
import Chip from '../../../../components/chip';


function OffersComponents({ chipText, isCouponApplied = false }) {
    return (
        <CardComponent cardStyle={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <FastImage source={require('../../../../assets/images/r1.png')} style={styles.imageStyle} />
                <Text style={styles.testStyle}>10% off on MODAVASTRA</Text>

                <Chip title={isCouponApplied ? 'Applied' : 'Apply'}
                    viewStyle={styles.chipViewStyle}
                    textStyle={styles.chipTextStyle}
                />
            </View>
        </CardComponent>
    )
}

export default OffersComponents;

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 168,
        backgroundColor: theme.lightPurple,
        borderRadius: 10,
        alignItems: 'center'
    },
    imageStyle: {
        width: 72,
        height: 72,
        marginTop: 18,
        backgroundColor: theme.lightPurple,
    },
    testStyle: {
        lineHeight: 18,
        fontSize: 12,
        fontFamily: theme.Poppins.regular,
        textAlign: 'center',
        marginTop: 6
    },
    chipViewStyle: {
        marginTop: 9,
        width: 80,
        height: 20,
        borderRadius: 10,
        backgroundColor: theme.White,
        alignItems: 'center',
        justifyContent: 'center'
    },
    chipTextStyle: {
        fontSize: 12,
        fontFamily: theme.Poppins.regular,
        lineHeight: 18,
        color: isCouponApplied ? theme.Purple : theme.TextBlack
    },

})