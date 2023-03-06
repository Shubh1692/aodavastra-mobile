import React from "react";
import { StyleSheet, View } from "react-native";
import { deviceWidth } from "../utils/device";
import Icon from '../components/icon';
import FastImage from "react-native-fast-image";
import home from '../assets/images/home.png'
import theme from "../theme/resources";
export const BottomTabIcon = (props) => {
    const { icon, isActive } = props;
    return (
        <View flex={1} style={{ justifyContent: 'center', }}>
            {icon == 'home' && <View style={styles.iconView} >
                {icon == 'home' && isActive == false && <FastImage source={require('../assets/images/home.png')} color={theme.TextBlack} size={26} style={styles.indicator} />}
                {icon == 'home' && isActive == true && <FastImage source={require('../assets/images/home1.png')} color={theme.TextBlack} size={26} style={styles.indicator} />}
            </View>}
            {icon == 'shopping-bag' && <View style={styles.iconView}>
                {icon == 'shopping-bag' && isActive == false && <FastImage source={require('../assets/images/shopping-bag.png')} color={theme.TextBlack} size={26} style={styles.indicator} />}
                {icon == 'shopping-bag' && isActive == true && <FastImage source={require('../assets/images/shopping-bag1.png')} color={theme.TextBlack} size={26} style={styles.indicator} />}
            </View>}
            {icon == 'search' && <View style={styles.iconView}>
                {icon == 'search' && isActive == false && <FastImage source={require('../assets/images/search.png')} color={theme.TextBlack} size={26} style={styles.indicator} />}
                {icon == 'search' && isActive == true && <FastImage source={require('../assets/images/search1.png')} color={theme.TextBlack} size={26} style={styles.indicator} />}
            </View>}
            {icon == 'profile' && <View style={styles.iconView}>
                {icon == 'profile' && isActive == false && <FastImage source={require('../assets/images/profile.png')} color={theme.TextBlack} size={26} style={styles.indicator} />}
                {icon == 'profile' && isActive == true && <FastImage source={require('../assets/images/profile1.png')} color={theme.TextBlack} size={26} style={styles.indicator} />}
            </View>}

        </View>
    );
};

const styles = StyleSheet.create({
    indicator: {
        height: 26,
        width: 26,
    },
    iconView: {
        width: deviceWidth / 4,
        alignItems: 'center'
    },
});
