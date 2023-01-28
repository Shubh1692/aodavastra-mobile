import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ProfileImage from '../profileImage';
import theme from '../../theme/resources';
import { deviceWidth } from '../../utils/device';


function ShowCaseComponent() {
    return (
        <View style={styles.topContainer}>
            <ProfileImage size={88} />
            <Text style={styles.textStyle}>Sujata’s Store</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: theme.lighterPurpule,
        width: deviceWidth,
        height: 120,
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    textStyle: {
        color: theme.Purple,
        fontSize: 24,
        fontWeight: '400',
        marginLeft: 16,
    }
})

export default ShowCaseComponent;