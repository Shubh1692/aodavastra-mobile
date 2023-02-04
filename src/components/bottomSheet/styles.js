import React ,{} from 'react';
import {StyleSheet} from 'react-native';
import theme from '../../theme/resources';
import { deviceHeight, deviceWidth } from '../../utils/device';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 999,
        flex: 1
    },
    subContainer: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'column-reverse',
        flex: 1,
    },
    child: {
        width: deviceWidth,
        backgroundColor: theme.White,
        borderTopEndRadius: 12,
        borderTopStartRadius: 12,
        overflow: 'hidden',
        paddingHorizontal: 12,
        paddingVertical: 5,

    },
});

export default styles;