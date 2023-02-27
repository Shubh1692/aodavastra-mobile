import React from 'react';
import { View,Text,Alert, StyleSheet } from 'react-native';
import CardComponent from '../../../../components/card';
import theme from '../../../../theme/resources';
import Button from '../../../../components/button';
import LineDivider from '../../../../components/lineDivider';
import { navigate } from '../../../../services/NavigationService';
 


function AddressListComponent() {

    const handleRemove = ()=>{
        Alert.alert(
            'Alert',
            'Are Your sure you want to remove this address?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel button is clicked') },
                { text: 'Remove', onPress: () => console.log('Remove button is clicked') },
            ],
            {
                cancelable: false
            }
        );
    }

    return (
        <CardComponent>
            <View style={styles.cardSection}>
                <View style={styles.titleSection}>
                    <Text style={styles.titleText} numberOfLines={1}>Sukrut Patil </Text>
                    <Text numberOfLines={2} style={styles.addressText}>J2 303, Nyati Equatorial, Bavdhan, Pune - 411023 </Text>
                    <Text style={styles.titleText} numberOfLines={1}>9896927760 </Text>
                </View>
                <LineDivider />
                <View style={styles.btnSection}>
                    <Button mode="text" textStyle={{ color: theme.Primary}} style={styles.btn} onPress={() => navigate('editAddress')}>Edit </Button>
                    <Button mode="text" textStyle={{ color: theme.TextBlack}} style={styles.btn} onPress={() => handleRemove()}>Remove</Button>
                </View>
            </View>
        </CardComponent>
    )
}

const styles = StyleSheet.create({
    cardSection: {
        backgroundColor: theme.background,
        minHeight: 120
    },
    titleSection: {
        paddingHorizontal: '4%',
        paddingVertical: '4%',
        paddingBottom: '6%'
    },
    addressText: {
        fontFamily: theme.Poppins.regular,
        fontSize: 10,
        fontWeight: '600',
        color: theme.TextBlack,
        marginVertical: 6,
        width: '90%'
    },
    titleText: {
        fontFamily: theme.Poppins.regular,
        fontSize: 12,
        fontWeight: '600'
    },
    btnSection: {
        flexDirection: 'row',
        paddingVertical: '1.5%'
    },
    btn: {
        width: '50%',
        height:40, 
        marginVertical:0,
        paddingVertical:0
    },
})

export default AddressListComponent;