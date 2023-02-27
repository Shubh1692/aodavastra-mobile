import React, { useEffect, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
    EasingNode,
    FadeIn,
    FadeOut,
    SlideInDown,
    SlideOutDown,
} from 'react-native-reanimated';
import CloseIcon from '../../assets/svg/close.svg';
import theme from '../../theme/resources';
import { deviceHeight } from '../../utils/device';
import Heading from '../heading';
import LineDivider from '../lineDivider';
import styles from './styles';

const BottomSheet = ({ children, title, actionHandler }) => {

    const animatedValue = useRef(new Animated.Value(255)).current;
    const [isOpen, setIsOpen] = useState(true);

    const startAnimation = (toValue => {
        Animated.timing(animatedValue, {
            toValue,
            duration: 300,
            easing: EasingNode.linear,
            useNativeDriver: true
        }).start(() => {
            setIsOpen(false);
        })
    });

    useEffect(() => {
        startAnimation(isOpen ? 1 : 0);
    }, [isOpen]);

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, deviceHeight],
        extrapolate: 'clamp'
    });

    const close = (() => {
        setIsOpen(true);
        setTimeout(() => actionHandler(), 300);
    });

    // renders
    return (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.container}>
            <TouchableOpacity activeOpacity={1.0} onPress={close} style={styles.subContainer}/>
            <Animated.View style={styles.childContainer}>
                <Animated.View
                    entering={SlideInDown}
                    exiting={SlideOutDown}
                    style={[styles.child, { transform: [{ translateY }] } ]}>
                    <View style={styles.headingContainer}>
                        <Heading textStyle={styles.heading} title={title} />
                        <Pressable onPress={close} style={styles.closeBtn}>
                            <CloseIcon />
                        </Pressable>
                    </View>
                    <LineDivider extraStyle={styles.divider} />
                    {children}
                </Animated.View>
               
            </Animated.View>
        </Animated.View>
    );
};

export default BottomSheet;