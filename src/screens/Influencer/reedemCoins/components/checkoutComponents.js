import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import CardComponent from '../../../../components/card';
import theme from '../../../../theme/resources';
import FastImage from 'react-native-fast-image';
import BackIcon from '../../../../assets/svg/Back.svg';
import Chip from '../../../../components/chip';

function CheckOutComponents() {
    return (
        <View style= {{
            borderRadius: 10,
            elivation: 2,
            shadowColor: theme.TextBlack, 
            shadowOffset: { width: 1, height: 1 }, 
            shadowOpacity: 0.2, 
            shadowRadius: 2,
            margin: 2
        }}>
            <CardComponent cardStyle={{
            width: 328, height: 98, backgroundColor: theme.background, flexDirection: 'row', borderRadius: 10, overflow: 'hidden',
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
        </View>
    )
}

export default CheckOutComponents;