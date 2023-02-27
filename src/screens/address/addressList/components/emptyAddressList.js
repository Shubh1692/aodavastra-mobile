import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../../../theme/resources';
import AddressPlaceholder from '../../../../assets/images/AddressPlaceholder.svg'


function EmptyAddress() {
    return (
        <View style={styles.emptyAddressContainer}>
            <AddressPlaceholder />
            <Text style={styles.emptyAddressTextStyle}>Please add your address </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    emptyAddressContainer: {
        alignItems: 'center', 
        flex: 1, 
        justifyContent: 'center',
    },
    emptyAddressTextStyle: {
        color: theme.TextBlack, 
        fontFamily: theme.Poppins.regular,
        fontSize: 16, 
        textAlign: 'center',
        paddingTop:20
    },
})
export default EmptyAddress;