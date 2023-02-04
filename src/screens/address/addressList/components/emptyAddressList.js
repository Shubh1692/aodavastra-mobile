import React from 'react';
import { View, Text } from 'react-native';
import theme from '../../../../theme/resources';
import AddressPlaceholder from '../../../../assets/images/AddressPlaceholder.svg'


function EmptyAddress() {
    return (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center',  }}>
            <AddressPlaceholder />
            <Text style={{ color: theme.TextBlack, fontSize: 16, fontWeight: '400', textAlign: 'center',marginTop:20 }}>Please add your address </Text>
        </View>

    )
}

export default EmptyAddress;