import React from 'react';
import { Appbar, Text, } from 'react-native-paper';
import { Image, StyleSheet, View } from 'react-native';

import Logo from '../../assets/images/logo2.png';
import closet from '../../assets/images/closet-black.png';
import theme from '../../theme/resources';
import { goBack, navigate, replace } from '../../services/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';




function Header({ isLogout = false, isBack = true, isShopNow = false}) {

    function handleLogout() {
        console.log("hiii logout")
        replace('login')
    }

    function handleShopNow() {
        navigate('shopNow')
    }

    return (
        <Appbar.Header style={styles.appbarHeader} >
            <View style={styles.backContainer}>
                {isBack  && <Appbar.BackAction onPress={goBack} />}
                <Image source={Logo} height={50} resizeMode="contain" style={styles.backImage} />
            </View>
            {isLogout && <Text onPress={handleLogout} style={styles.logoutTextStyle}>Log out</Text>}
            {isShopNow && <TouchableOpacity style={styles.shopNowContainer} onPress={handleShopNow}>
                <Image source={closet} height={30} resizeMode="contain" style={styles.shopNowImage} />
            </TouchableOpacity>}
        </Appbar.Header>)
}


export default Header;

const styles = StyleSheet.create({
    appbarHeader: {
        backgroundColor: theme.White, 
        justifyContent: 'space-between'
    },
    backContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    backImage: {
        height: 30, 
        alignItems: 'flex-start'
    },
    logoutTextStyle: {
        fontSize: 18, 
        color: theme.Red, 
        fontFamily: theme.Poppins.semiBold, 
        right: 4
    },
    shopNowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    shopNowImage: {
        height: 21, 
        alignItems: 'flex-start'
    },
  });