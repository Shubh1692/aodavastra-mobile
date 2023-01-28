import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


function Title({name="Anjali Verma",numberOfLines,textStyle,...restProps}) {
    return (
        <View style={styles.profileTitleSection}>
        <View style={{ }}>
            <Text style={[styles.profileTitle,textStyle]} numberOfLines={numberOfLines ||1} {...restProps}>{name}</Text>
        </View>
        </View>
    )
}

export default Title;