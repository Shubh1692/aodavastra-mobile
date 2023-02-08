import React from 'react';
import styles from '../styles';
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
            'Are Your sure you want to remove this ?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel button is clicked') },
                { text: 'OK', onPress: () => console.log('OK button clicked') },
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
                    <Button mode="text" textStyle={{ color: theme.Primary }} style={styles.buttonText} onPress={() => navigate('editAddress')}>Edit </Button>
                    <Button mode="text" textStyle={{ color: theme.TextBlack }} style={styles.buttonText} onPress={() => handleRemove()}>Remove</Button>
                </View>
            </View>
        </CardComponent>
    )
}

export default AddressListComponent;