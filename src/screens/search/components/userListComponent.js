import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from "../styles";
import CardComponent from '../../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../../theme/resources";
import { deviceWidth } from "../../../utils/device";
import ProfileImage from "../../../components/profileImage";


function UserListComponents({item}) {
    const productConfig = item
    console.log(productConfig)
    return (
        //<CardComponent>
        <View style={{
            flexDirection: 'column',
            width: deviceWidth/5.5,
            position: 'relative',
            alignItems: 'center'
        }}>
            <ProfileImage size={45}  />
            <View style={styles.userTitleStyle}>
                <Text style={{ color: theme.textGrey, fontSize: 8, fontFamily: 'Poppins-Regular', textAlign: 'center', paddingTop: '4%',}} numberOfLines={2}>{item.name}</Text>
            </View>
        </View>
        //</CardComponent>
    )
}

export default UserListComponents;