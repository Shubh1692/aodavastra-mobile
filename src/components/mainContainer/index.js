import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme/resources';

function MainContainer({ children }) {
    return (
        <View style={styles.container}>{children}</View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.White, 
        flex: 1
    }
});

export default MainContainer;