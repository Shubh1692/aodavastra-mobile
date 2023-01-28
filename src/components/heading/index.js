import React from 'react';
import theme from '../../theme/resources';
import { Text, View, StyleSheet } from 'react-native';

function Heading({ title }) {
    return (
        <View style={{ paddingVertical: '2%' }}>
            <Text style={styles.heading}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: '400',
        color: theme.TextBlack
    },
})

export default Heading;