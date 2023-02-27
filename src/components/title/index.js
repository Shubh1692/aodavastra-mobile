import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


function Title({name="Anjali Verma",numberOfLines,viewStyle,innerViewStyle,textStyle,...restProps}) {
    return (
        <View style={[styles.profileTitleSection,viewStyle]}>
        <View style={innerViewStyle}>
            <Text style={[styles.profileTitle,textStyle]} numberOfLines={numberOfLines ||1} {...restProps}>{name}</Text>
        </View>
        </View>
    )
}

export default Title;