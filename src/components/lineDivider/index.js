import React from 'react';
import {StyleSheet, View} from 'react-native';
import theme from '../../theme/resources';


function LineDivider({extraStyle}){
    return(
        <View style={[styles.container, extraStyle]} />
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        borderWidth: 0.5, 
        borderColor: theme.divider
    },
});

export default LineDivider;