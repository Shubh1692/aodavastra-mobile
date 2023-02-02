import React from 'react';

import { View, StyleSheet } from 'react-native';
import theme from '../../theme/resources';



function SeparatorComponent() {
    return (
        <View
            style={styles.separator}
        />
    )
}

const styles = StyleSheet.create({
    separator: {
        height: 2.5,
        width: '100%',
        // marginBottom: 2,
        backgroundColor: theme.White
    }
})

export default SeparatorComponent;