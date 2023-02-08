import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeartEmpty from '../../assets/svg/likeEmpty.svg';
import theme from '../../theme/resources';


function EmptyLikePost() {
    return (
        <View style={styles.container}>
            <HeartEmpty />
            <Text style={styles.textSyle}>You Haven’t Added Anything In your Store Yet</Text>
        </View>

    )
}

export default EmptyLikePost;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: '60%'
    },
    textSyle: {
        color: theme.TextBlack, 
        fontSize: 16, 
        fontWeight: '400', 
        textAlign: 'center'
    },
});