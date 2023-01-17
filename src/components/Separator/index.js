import React from 'react';

import { View, StyleSheet } from 'react-native';



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
        backgroundColor: '#fff'
    }
})

export default SeparatorComponent;