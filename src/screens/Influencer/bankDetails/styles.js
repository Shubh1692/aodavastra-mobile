import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';
import { deviceWidth } from '../../../utils/device';


const styles = StyleSheet.create({
    headingSection: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    topTitle: {
        fontSize: 14,
        color: theme.Primary,
        fontWeight: '600',
        lineHeight: 21,
        marginRight: 20
    },
    midTitle: {
        fontSize: 14,
        color: theme.TextBlack,
        fontWeight: '600',
        marginHorizontal: 3
    },
    lastTitle: {
        fontSize: 14,
        color: theme.Primary,
        fontWeight: '600'
    },
    formSection: {
        marginTop: '4%',
        flex: 1
    },
    checkSection: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '80%',
        marginVertical: 7,
        marginBottom: 8
    },
    checkImg: {
        width: 20,
        height: 20
    },
    checkTitleSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 5
    },
    termTitle: {
        color: theme.Primary,
        paddingHorizontal: 4,
        fontWeight: '600'
    },
    footerBtn: {
        width: deviceWidth,
        height: 50,
        marginHorizontal: -17,
        bottom: -20
    }
})

export default styles;