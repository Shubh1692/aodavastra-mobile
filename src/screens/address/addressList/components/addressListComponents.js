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

export default AddressListComponent;