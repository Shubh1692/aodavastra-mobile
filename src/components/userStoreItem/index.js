import React, { useState } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../../theme/resources';
import FastImage from 'react-native-fast-image';
import { deviceWidth } from '../../utils/device';
import CategoryComponents from './components/categoryComponents';
import { navigate } from '../../services/NavigationService';




function UserCategories({ isCreator,handleUpdateCategory }) {
    return (
        // <View style={{ flex: 1, position: 'relative',marginBottom:30  }}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: theme.background, /*marginTop: 20,*/ width: deviceWidth, paddingBottom: 90, }}>
            <TouchableOpacity onPress={() => navigate('categoryStore')} activeOpacity={0.6}>
                <CategoryComponents isCreator={isCreator}  handleUpdateCategory={handleUpdateCategory}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('categoryStore')} activeOpacity={0.6} handleUpdateCategory={handleUpdateCategory}>
                <CategoryComponents isCreator={isCreator} />
            </TouchableOpacity>
        </ScrollView>

        // </View>

    )
}

const styles = StyleSheet.create({
    scrollContentContainer: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        backgroundColor: theme.background, 
        /*marginTop: 20,*/ 
        width: deviceWidth, 
        paddingBottom: 90,
    },
})

export default UserCategories;