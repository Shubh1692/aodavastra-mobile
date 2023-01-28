import React from 'react';
import { View } from 'react-native';

function MainContainer({ children }) {
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>{children}</View>
    )
}

export default MainContainer;