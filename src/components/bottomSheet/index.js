import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Pressable } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Heading from '../heading';
import CloseIcon from '../../assets/svg/close.svg';
import LineDivider from '../lineDivider';
import theme from '../../theme/resources';

import Animated, {
    FadeIn,
    FadeOut,
    SlideInDown,
    SlideOutDown,
} from 'react-native-reanimated';
import { deviceHeight, deviceWidth } from '../../utils/device';

const BottomSheet = ({ children, title, snapPoints, bottomSheetModalRef, setIsCloseIcon, handleCloseIcon }) => {

    // ref
    // useEffect(() => {
    //     if (setIsCloseIcon) {
    //         handlePresentModalPress();
    //     }
    // }, [setIsCloseIcon])

    // variables
    // const snapPoints = useMemo(() => ['35%', '50%', '75%'], []);

    // // callbacks
    // const handlePresentModalPress = useCallback(() => {
    //     bottomSheetModalRef.current?.present();
    // }, []);
    // const handleDismissModalPress = useCallback(() => {
    //     console.log("bottomSheetModalRef.current", bottomSheetModalRef.current)
    //     bottomSheetModalRef.current?.dismiss();
    // }, []);

    // const handleSheetChanges = useCallback((index) => {
    //     console.log('handleSheetChanges', index);
    //     if (index == -1) {
    //         handleCloseIcon()
    //     }

    // }, []);

    // renders
    return (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.container}>
            <Pressable onPress={handleCloseIcon} style={styles.subContainer}>
                <Animated.View
                    entering={SlideInDown}
                    exiting={SlideOutDown}
                    style={[styles.child, { height: snapPoints[0] }]}>
                    <View style={styles.subChild}>
                        <View style={styles.headingContainer}>
                            <Heading textStyle={styles.heading} title={title} />
                            <TouchableOpacity onPress={handleCloseIcon} style={styles.closeIcon}>
                                <CloseIcon />
                            </TouchableOpacity>
                        </View>
                        <LineDivider extraStyle={styles.divider} />

                        {children}

                    </View>
                </Animated.View>
            </Pressable>
        </Animated.View>
    );
};

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
    subChild: {
        flex: 1
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    closeIcon: {
        right: 10,
        position: 'absolute'
    },
    divider: {
        borderWidth: 1,
        borderColor: theme.TextBlack,
        width: 112,
        marginLeft: 16,
        marginTop: 16,
    },
});

export default BottomSheet;