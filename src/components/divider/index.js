import React from 'react';
import { View, Text } from 'react-native';
import theme from '../../theme/resources';
import styles from './styles';

function Divider({title}) {
    return (
        <View style={styles.topContainer}>
            <View style={styles.leftLight} />
            <Text style={styles.textStyle}>{title}</Text>
            <View style={styles.rightLight} />
            <View />

        </View>
    )
}

export default Divider;