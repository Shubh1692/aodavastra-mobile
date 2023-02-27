import React from 'react';
import { View, Text,ScrollView,FlatList, StyleSheet } from 'react-native';
import theme from '../../theme/resources';
import FastImage from 'react-native-fast-image';
import {deviceWidth} from '../../utils/device';


function UserLikePosts({isCreator = false}) {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.scrollContentContainer, {paddingBottom: !isCreator ? 90 :0}]}>
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.imageStyle} source={require('../../assets/images/p2.png')} resizeMode="cover" />
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    scrollContentContainer: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        backgroundColor: theme.background, 
        /*marginTop: 20,*/ 
        width: deviceWidth, 
    },
    imageStyle: { 
        width: deviceWidth / 3, 
        height: deviceWidth / 3 
    }
})
export default UserLikePosts;