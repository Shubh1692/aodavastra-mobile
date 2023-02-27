import React, { useState } from 'react';
import styles from '../styles';
import { View, Text, Alert } from 'react-native';
import CardComponent from '../../../../components/card';
import theme from '../../../../theme/resources';
import Button from '../../../../components/button';
import LineDivider from '../../../../components/lineDivider';
import { navigate } from '../../../../services/NavigationService';
import CheckboxComponent from '../../../../components/checkbox';



function AddressListComponent({ isCheckShow = false }) {
    const [checked, setChecked] = useState(false);
    const handleRemove = () => {
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
        <CardComponent cardStyle={{backgroundColor:theme.background}}>
            <View style={styles.cardSection}>
                <View style={styles.titleSection}>

                    <View style={{ flexDirection: 'row', position: 'relative' }}>
                        <Text style={styles.titleText} numberOfLines={1}>Sukrut Patil </Text>
                        {isCheckShow &&
                            <View style={{ position: 'absolute', right: 5, top: 0 }}>
                                <CheckboxComponent checked={checked}
                                    handleCheckbox={() => {
                                        setChecked(!checked);
                                    }} />
                            </View>
                        }
                    </View>
                    <Text numberOfLines={2} style={styles.addressText}>J2 303, Nyati Equatorial, Bavdhan, Pune - 411023 </Text>
                    <Text style={styles.titleText} numberOfLines={1}>9896927760 </Text>
                </View>
                <LineDivider />
                <View style={styles.btnSection}>
                    <Button mode="text" textStyle={{ color: theme.Primary }} style={{ width: '50%', height: 40, marginVertical: 0, paddingVertical: 0 }} onPress={() => navigate('editAddress')}>Edit </Button>
                    <Button mode="text" textStyle={{ color: theme.TextBlack }} style={{ width: '50%', height: 40, marginVertical: 0, paddingVertical: 0 }} onPress={() => handleRemove()}>Remove</Button>
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