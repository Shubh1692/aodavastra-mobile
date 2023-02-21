import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ProfileImage from '../profileImage';
import theme from '../../theme/resources';
import { deviceWidth } from '../../utils/device';
import RectangleImage from '../rectangleImage';


function EndorseProductShowCase({ imgStyle, imgUrl, title, categoryName }) {
    return (
        <View style={styles.topContainer}>
            <RectangleImage imageStyle={imgStyle} imgUrl={imgUrl} />
            <View style={styles.titleSection}>
                <Text style={styles.categoryTitle}>Jewellry <Text style={styles.categoryCountText}>(166)</Text></Text>
                <Text style={styles.textStyle}>Sujata’s Store</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: theme.lighterPurpule,
        width: deviceWidth,
        height: 120,
        paddingVertical: 16,
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    textStyle: {
        color: theme.Purple,
        fontSize: 24,
        fontWeight: '400',
    },
    titleSection: {
        marginLeft: 16,
    },
    categoryTitle: {
        fontSize: 18,
        paddingBottom: 8,
        color: theme.TextBlack
    },
    categoryCountText: {
        color: theme.Purple,
        fontSize: 16
    }
})

export default EndorseProductShowCase;