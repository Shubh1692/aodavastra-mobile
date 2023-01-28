import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import CardComponent from '../../../../components/card';
import theme from '../../../../theme/resources';
import FastImage from 'react-native-fast-image';


function OffersComponents() {
    return (
        <CardComponent cardStyle={{ width: 120, height: 168, backgroundColor: theme.lightPurple, borderRadius: 10, alignItems: 'center' }}>
            <View style={{ alignItems: 'center' }}>
                <FastImage source={require('../../../../assets/images/r1.png')} style={{ width: 72, height: 72, marginTop: 18, backgroundColor: theme.lightPurple, }} />
                <Text style={{ lineHeight: 18, fontSize: 12, textAlign: 'center', marginTop: 6 }}>10% off on MODAVASTRA</Text>
                <View style={{ marginTop: 9, width: 80, height: 20, borderRadius: 10, backgroundColor: theme.White, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 12, fontWeight: '400', lineHeight: 18 }}>100 coins</Text>
                </View>
            </View>
        </CardComponent>
    )
}

export default OffersComponents;