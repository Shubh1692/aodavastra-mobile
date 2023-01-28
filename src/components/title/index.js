import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


function Title({name="Anjali Verma",numberOfLines,textStyle}) {
    return (
        <View style={styles.profileTitleSection}>
        <View style={{ }}>
            <Text style={[styles.profileTitle,textStyle]} numberOfLines={numberOfLines ||1}>{name}</Text>
        </View>
        </View>
    )
}

export default Title;