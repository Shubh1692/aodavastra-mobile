import React from 'react';
import { Avatar } from 'react-native-paper';
import FastImage from 'react-native-fast-image';


function ProfileImage({ size = 120 }) {

    return (
        <FastImage style={{ width: size, height: size }} source={require('../../assets/images/demo_image.png')} />
    )
}

export default ProfileImage;