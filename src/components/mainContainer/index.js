import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme/resources';

function MainContainer({ children }) {
    return (
        <View style={styles.container}>{children}</View>
    )
}

export default MainContainer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.White, 
        flex: 1
    },
});