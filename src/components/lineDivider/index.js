import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme/resources';


function LineDivider({ extraStyle }) {
    return (
        <View style={[styles.container, extraStyle]} />
    )
}

export default LineDivider;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: theme.divider
    },
});