import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ProfileImage from '../profileImage';
import theme from '../../theme/resources';
import { deviceWidth } from '../../utils/device';
import RectangleImage from '../rectangleImage';


function ShowCaseComponent({ imgUrl, title, }) {
    return (
        <View style={styles.topContainer}>
            <ProfileImage size={88} />
            <Text style={styles.textStyle}>{title ? title : 'Sujata’s Store'}</Text>
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
        fontFamily: theme.Poppins.regular,
        fontSize: 24,
        marginLeft: 16,
    }
})

export default ShowCaseComponent;