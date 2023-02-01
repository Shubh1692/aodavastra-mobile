import React from 'react';
import { View } from 'react-native';
import theme from '../../theme/resources';

function MainContainer({ children }) {
    return (
        <View style={{ backgroundColor: theme.White, flex: 1 }}>{children}</View>
    )
}

export default MainContainer;