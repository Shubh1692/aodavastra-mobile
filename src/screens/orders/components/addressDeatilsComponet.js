import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PaymentCard from '../../../components/paymentCard';
import Title from '../../../components/title';
import theme from '../../../theme/resources';


function AddressDetailComponent({ firstName, lastName, address1, address2, city, state, pincode }) {
    return (
        <PaymentCard>
            <View style={styles.mainContainer}>
                <View style={styles.nameSection}>
                    <Title viewStyle={styles.textViewStyle} textStyle={styles.titleText} name={firstName} />
                    <Title viewStyle={[styles.textViewStyle,{paddingLeft: 3}]}  textStyle={styles.titleText} name={lastName} />
                </View>
                <View>
                    <Title viewStyle={styles.textViewStyle} textStyle={styles.textAddressStyle} name={address1} />
                </View>
                <View>
                    <Title viewStyle={styles.textViewStyle} textStyle={styles.textAddressStyle} name={address2} />
                </View>
                <View>
                    <Title viewStyle={styles.textViewStyle} textStyle={styles.textAddressStyle} name={`${city},`} />
                </View>
                <View>
                    <Title viewStyle={styles.textViewStyle} textStyle={styles.textAddressStyle} name={state} />
                </View>
                <View>
                    <Title viewStyle={styles.textViewStyle} textStyle={styles.textAddressStyle} name={pincode} />
                </View>

            </View>
        </PaymentCard>
    )

}

const styles = StyleSheet.create({
    mainContainer: {
        minHeight: 140, padding: 8
    },
    nameSection: {
        flexDirection: 'row'
    },
    textViewStyle:{ 
        marginLeft: 0, 
        marginTop: 0, 
    },
    titleText:{ 
        fontSize: 14, 
        color: theme.TextBlack, 
    },
    textAddressStyle:{
        fontSize: 14, 
        color: theme.TextBlack, 
        lineHeight: 21 
    }
})

export default AddressDetailComponent;