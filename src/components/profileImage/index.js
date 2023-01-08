import React from 'react';
import { Avatar } from 'react-native-paper';


function ProfileImage() {

    return (
        <Avatar.Image size={120} source={require('../../assets/images/demo_image.png')} />
    )
}

export default ProfileImage;