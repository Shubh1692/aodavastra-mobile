import React from 'react';
import { Avatar } from 'react-native-paper';
import FastImage from 'react-native-fast-image';


function RectangleImage({ width, height, imgUrl,imageStyle }) {

    return (
        <FastImage style={[imageStyle]} source={imgUrl ? imgUrl : require('../../assets/images/demo_image.png')} />
    )
}

export default RectangleImage;