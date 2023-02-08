import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../theme/resources';


function TextWithUnderline({ title, textStyle, ...restProps }) {
    return (
        <Text style={[styles.text, textStyle]} {...restProps}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'right',
        color: theme.Purple,
        fontWeight: '600',
        marginTop: '2%',
        textDecorationLine: 'underline'
    }
})

export default TextWithUnderline;