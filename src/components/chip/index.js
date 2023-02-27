import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../theme/resources';

function Chip({title,textStyle,viewStyle,...restProps}) {
    return (
        <View style={[styles.topConatiner,viewStyle] }>
            <Text style={[styles.textChip,textStyle]} {...restProps}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topConatiner: {
        marginTop: 9,
        width: 80,
        height: 20,
        borderRadius: 10,
        backgroundColor: theme.Purple,
        alignItems: 'center',
        justifyContent: 'center'
    },
   textChip: { 
        fontFamily: theme.Poppins.regular,
       fontSize: 12, 
       lineHeight: 18, 
       color: theme.White 
    }
})

export default Chip;