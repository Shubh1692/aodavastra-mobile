import React from 'react';
import { View, Text,ScrollView } from 'react-native';
import theme from '../../theme/resources';
import FastImage from 'react-native-fast-image';
import {deviceWidth} from '../../utils/device';


function UserPosts() {
    return (
        // <View style={{marginBottom:20,flex:1}}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: theme.background, /*marginTop: 20,*/ width: deviceWidth, paddingBottom: 90, }}>
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../assets/images/p2.png')} resizeMode="cover" />
        </ScrollView>
        // </View>
    )
}

export default UserPosts;