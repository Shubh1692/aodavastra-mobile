import React from 'react';
import { View, Text } from 'react-native';
import UPIIcon from '../../../assets/svg/Upi.svg';
import CashIcon from '../../../assets/svg/cash.svg';
import CreditCardIcon from '../../../assets/svg/credit-card.svg';
import PaymentCard from '../../../components/paymentCard';


function PaymentInformationComponent({ paymentType = 'Card',title = 'Cash on Delivery' }) {
    return (
        <PaymentCard>
            <View style={{height:34,alignItems:'center',paddingHorizontal:12,flexDirection:'row'}}>
               {paymentType == 'Upi' && <UPIIcon />}
               {paymentType == 'Card' && <CreditCardIcon />}
               {paymentType == 'Cash' && <CashIcon />}
                <Text style={{paddingLeft:8,fontSize:10,fontWeight:'600'}}>{title}</Text>
            </View>
            
        </PaymentCard>
    )

}

export default PaymentInformationComponent;