import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import CardComponent from '../../../../components/card';
import theme from '../../../../theme/resources';
import FastImage from 'react-native-fast-image';
import BackIcon from '../../../../assets/svg/Back.svg';
import Chip from '../../../../components/chip';

// shadowOffset: {width: 0,height: 3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6,shadowColor: "#000",
// shadowColor: '#171717',shadowOffset: {width: -2, height: 4},shadowOpacity: 0.2,shadowRadius: 3,

function CheckOutComponents() {
    return (
        <CardComponent cardStyle={{
            width: 328, height: 98, backgroundColor: '#f9f9f9', borderRadius: 10, flexDirection: 'row', overflow: 'hidden', shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.8, shadowRadius: 50,
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'space-around', }}>
                <FastImage source={require('../../../../assets/images/r1.png')} style={{ width: 56, height: 56, }} />
                <View >
                    <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 24 }}>₹ 100 cashout</Text>
                    <Chip title={'100 coins'}
                        viewStyle={{ marginTop: 9, width: 80, height: 20, borderRadius: 10, backgroundColor: theme.Purple, alignItems: 'center', justifyContent: 'center' }}
                        textStyle={{ fontSize: 12, fontWeight: '400', lineHeight: 18, color: theme.White }}
                    />

                </View>
                <BackIcon />
            </View>
        </CardComponent>
    )
}

export default CheckOutComponents;