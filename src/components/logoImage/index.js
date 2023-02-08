import React from 'react';
import Logo from '../../assets/images/logo2.png';
import { Image, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image'


function LogoImageComponent() {
    return (
        <Image source={Logo} resizeMode="contain" />
    )
}

export default LogoImageComponent;