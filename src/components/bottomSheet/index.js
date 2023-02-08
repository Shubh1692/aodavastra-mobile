import React from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native';
import Animated, {
    FadeIn,
    FadeOut,
    SlideInDown,
    SlideOutDown
} from 'react-native-reanimated';
import CloseIcon from '../../assets/svg/close.svg';
import theme from '../../theme/resources';
import Heading from '../heading';
import LineDivider from '../lineDivider';
import styles from './styles';



const BottomSheet = ({ children, bottomSheetModalRef, title,setIsSettingIcon, actionHandler, bottomSheetHeigh }) => {

    // renders
    return (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.container}>
            <Pressable onPress={actionHandler} style={styles.subContainer}>
                <Animated.View
                    entering={SlideInDown}
                    exiting={SlideOutDown}
                    style={[styles.child, { height: bottomSheetHeigh }]}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative', width: '100%', justifyContent: 'center' }}>
                            <Heading textStyle={{ fontSize: 16, lineHeight: 24, textAlign: 'center', }} title={title} />
                            <TouchableOpacity onPress={actionHandler} style={{ right: 10, position: 'absolute' }}>
                                <CloseIcon />
                            </TouchableOpacity>
                        </View>
                        <LineDivider extraStyle={{ borderWidth: 1, borderColor: theme.TextBlack, width: 112, marginLeft: 16, marginTop: 16 }} />
                        {children}
                    </View>
                </Animated.View>
               
            </Pressable>
        </Animated.View>
    );
};


export default BottomSheet;