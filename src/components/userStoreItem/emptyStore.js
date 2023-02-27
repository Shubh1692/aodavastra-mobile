import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TagEmpty from '../../assets/svg/Tag.svg';
import theme from '../../theme/resources';


function EmptyUserStore({ }) {
    return (
        <View style={styles.container}>
            <TagEmpty />
            <Text style={styles.textStyle}>You Haven’t Added Anything In your Store Yet</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center', 
        flex: 1, 
        justifyContent: 'center', 
        width: '60%' 
    },
    textStyle: { 
        color: theme.TextBlack, 
        fontFamily: theme.Poppins.regular, 
        fontSize: 16, 
        textAlign: 'center' 
    }
})

export default EmptyUserStore;