import React from "react";
import { View, StyleSheet } from 'react-native';

function Container({ children, containerStyle }) {
    return (
        <View style={[styles.topSection, containerStyle]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    topSection: {
        flex: 1,
        marginLeft: 16,
        // marginVertical: 20,
        marginTop: 20,
        marginHorizontal: 20
    },
})

export default Container;