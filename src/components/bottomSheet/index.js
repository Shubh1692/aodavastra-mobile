import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Heading from '../heading';
import CloseIcon from '../../assets/svg/close.svg';
import LineDivider from '../lineDivider';
import theme from '../../theme/resources';

const BottomSheet = ({ children,bottomSheetModalRef, setIsSettingIcon, handleSettingIcon,snapPoints }) => {

    // ref
    useEffect(() => {
        if (setIsSettingIcon) {
            handlePresentModalPress();
        }
    }, [setIsSettingIcon])

    // variables
    // const snapPoints = useMemo(() => ['35%', '50%', '75%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleDismissModalPress = useCallback(() => {
        console.log("bottomSheetModalRef.current", bottomSheetModalRef.current)
        bottomSheetModalRef.current?.dismiss();
    }, []);

    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
        if (index == -1) {
            handleSettingIcon()
        }

    }, []);

    // renders
    return (
        <BottomSheetModalProvider>
            <BottomSheetModal
                dismiss={handleDismissModalPress}
                onPress={handlePresentModalPress}
                onPress={handlePresentModalPress}
                BackdropPressBehavior={'close'}
                enableTouchOutsideToClose={true}
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={styles.contentContainer}>
                    <View style={{flexDirection:'row',alignItems:'center',position:'relative',width:'100%',justifyContent:'center'}}>
                        <Heading textStyle={{fontSize:16,lineHeight:24,textAlign:'center',}} title="SETTINGS" />
                        <TouchableOpacity onPress={handleDismissModalPress} style={{right:10,position:'absolute'}}>
                        <CloseIcon />
                        </TouchableOpacity>
                    </View>
                        <LineDivider extraStyle={{borderWidth:1,borderColor:theme.TextBlack,width:112,marginLeft:16,marginTop:16}}/>

                    {children}

                </View>
            </BottomSheetModal>

        </BottomSheetModalProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        // justifyContent: 'center',
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        // alignItems: 'center',
    },
});

export default BottomSheet;