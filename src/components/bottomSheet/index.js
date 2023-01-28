import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

const BottomSheet = ({ bottomSheetModalRef, setIsSettingIcon, handleSettingIcon }) => {

    // ref
    useEffect(() =>{
        if(setIsSettingIcon){
            handlePresentModalPress();
        }
    },[setIsSettingIcon])
    
    // variables
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

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
                    <Text onPress={handleDismissModalPress}>Awesome 🎉</Text>

                </View>
            </BottomSheetModal>

        </BottomSheetModalProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default BottomSheet;