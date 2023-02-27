import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {deviceHeight, deviceWidth} from '../../utils/device';
import FastImage from 'react-native-fast-image';
import theme from '../../theme/resources';
import Button from '../button';
import {navigate} from '../../services/NavigationService';


function DefaultEmpty({containerStyle, emptyImage, description, buttonTitle = '', buttonCallBack}) {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.subContainer}>
                <View style={styles.imageContainer}>
                    <FastImage source={require('../../assets/images/empty_cart.png')} style={styles.imageSize} resizeMode="contain" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>{description}</Text>
                </View>
            </View>
            {buttonTitle != '' && <View style={styles.btnContainer}>
                <Button mode="contained" textStyle={styles.btnTextStyle} style={styles.btn} onPress={buttonCallBack}>{buttonTitle}</Button>
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    imageContainer: { 
        alignItems: 'flex-end', 
        justifyContent: 'center',  
        width: deviceWidth, 
    },
    imageSize: {
        height: deviceHeight / 2, 
        width: deviceWidth / 2,
    },
    textContainer: { 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: deviceHeight / 1.2, 
        width: deviceWidth, 
        position: 'absolute' 
    },
    textStyle: { 
        fontSize: 20, 
        fontFamily: theme.Poppins.regular,
        color: theme.TextBlack, 
        width: deviceWidth / 1.6, 
        textAlign: 'center' 
    },
    btnContainer: { 
        alignItems: 'center',
    },
    btn: { 
        width: 200, 
        height: 40
    },
    btnTextStyle: { 
        lineHeight: 18, 
        fontSize: 14
    },
})

export default DefaultEmpty;