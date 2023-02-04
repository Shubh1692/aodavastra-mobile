import React from 'react'
import { StyleSheet,View } from 'react-native'
import Button from './index';
import theme from '../../theme/resources';

export default function FloatingButton({ mode, style, textStyle,title ,...props }) {
    return (
        <View style={styles.buttonContainer}>
            <Button mode="contained" style={styles.btn} textStyle={styles.text} {...props}>{title}</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: '3%',
        bottom: 20,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        width: '100%'
    },
    btn:{ 
        width: 200, 
        height: 40, 
        paddingVertical: 0 
    },
    text: {
        lineHeight: 22 
    },
})
