import React from 'react';
import theme from '../../theme/resources';
import { Text, View, StyleSheet } from 'react-native';

function Heading({ title,textStyle,viewStyle,...restProps }) {
    return (
        <View style={[styles.container, viewStyle]}>
            <Text style={[styles.heading,textStyle]}{...restProps}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
    },
    heading: {
        fontFamily: theme.Poppins.regular,
        fontSize: 18,
        color: theme.TextBlack
    },
});

export default Heading;