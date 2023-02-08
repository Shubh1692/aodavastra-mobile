import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import theme from '../../theme/resources';
import FastImage from 'react-native-fast-image';
import { deviceWidth } from '../../utils/device';


function UserLikePosts({ isCreator = false }) {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.contentContainer,{ paddingBottom: !isCreator ? 90 : 0}]}>
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
            <FastImage style={styles.postImage} source={require('../../assets/images/p2.png')} resizeMode="cover" />
        </ScrollView>

    )
}

export default UserLikePosts;

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: theme.background,
        /*marginTop: 20,*/
        width: deviceWidth,

    },
    postImage: {
        width: deviceWidth / 3,
        height: deviceWidth / 3
    },
});