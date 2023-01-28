import React, { useState } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import theme from '../../theme/resources';
import FastImage from 'react-native-fast-image';
import { deviceWidth } from '../../utils/device';
import CategoryComponents from './components/categoryComponents';




function UserCategories({isCreator}) {
    return (
        <View style={{ flex: 1, position: 'relative',marginBottom:30  }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#F9F9F9', marginTop: 20, width: deviceWidth, paddingBottom: 130,}}>
                <CategoryComponents isCreator={isCreator}/>
                <CategoryComponents isCreator={isCreator}/>
            </ScrollView>

        </View>

    )
}

export default UserCategories;