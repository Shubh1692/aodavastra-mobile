import React from 'react';
import { Appbar, Text, } from 'react-native-paper';
import { Image, View,StyleSheet } from 'react-native';

import Logo from '../../assets/images/logo2.png';
import closet from '../../assets/images/closet-black.png';
import theme from '../../theme/resources';
import { goBack, navigate } from '../../services/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';




function Header({ isLogout = false, isBack = true, isShopNow = false }) {

    function handleLogout() {
        console.log("hiii logout")
    }

    function handleShopNow() {
        navigate('shopNow')
    }

    return (
        <Appbar.Header style={styles.appBarHeader} >
            <View style={styles.backIconContainer}>
                {isBack && <Appbar.BackAction onPress={goBack} />}
                <Image source={Logo} height={50} resizeMode="contain" style={styles.backIcon} />
            </View>
            {isLogout && <Text onPress={handleLogout} style={styles.logoutText}>Log out</Text>}
            {isShopNow && <TouchableOpacity style={styles.shopNow} onPress={handleShopNow}>
                <Image source={closet} height={30} resizeMode="contain" style={styles.shopNowIcon} />
            </TouchableOpacity>}
        </Appbar.Header>
    )
}


export default Header;

const styles = StyleSheet.create({
    appBarHeader: {
        backgroundColor: theme.White,
        justifyContent: 'space-between'
    },
    backIconContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    backIcon: {
        height: 30,
        alignItems: 'flex-start'
    },
    logoutText: {
        fontSize: 18,
        color: theme.Red,
        fontFamily: 'Poppins-SemiBold',
        right: 4
    },
    shopNow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    shopNowIcon: {
        height: 21,
        alignItems: 'flex-start'
    }
});