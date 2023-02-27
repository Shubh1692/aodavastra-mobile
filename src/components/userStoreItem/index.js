import React, { useState } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../../theme/resources';
import FastImage from 'react-native-fast-image';
import { deviceWidth } from '../../utils/device';
import CategoryComponents from './components/categoryComponents';




function UserCategories({isCreator}) {
    return (
        // <View style={{ flex: 1, position: 'relative',marginBottom:30  }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContentContainer}>
                <CategoryComponents isCreator={isCreator}/>
                <CategoryComponents isCreator={isCreator}/>
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