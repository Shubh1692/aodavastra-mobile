import React from 'react';
import { View, Text } from 'react-native';
import CameraEmpty from '../../assets/svg/Camera.svg';
import theme from '../../theme/resources';


function EmptyUserPost() {
    return (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', width: '60%' }}>
            <CameraEmpty />
            <Text style={{ color: theme.TextBlack, fontSize: 16, fontWeight: '400', textAlign: 'center' }}>You Haven’t Added Anything In your Store Yet</Text>
        </View>

    )
}

export default EmptyUserPost;