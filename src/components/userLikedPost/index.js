import React from 'react';
import { View, Text,ScrollView,FlatList } from 'react-native';
import theme from '../../theme/resources';
import FastImage from 'react-native-fast-image';
import {deviceWidth} from '../../utils/device';


function UserLikePosts() {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#F9F9F9', marginTop: 20, width: deviceWidth, paddingBottom: 130 }}>
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

    )
}

export default UserLikePosts;