import React from 'react';
import { Appbar, Text, } from 'react-native-paper';
import { Image, View } from 'react-native';

import Logo from '../../assets/images/logo2.png';
import closet from '../../assets/images/closet-black.png';
import theme from '../../theme/resources';
import { goBack, push } from '../../services/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';




function Header({ isLogout = false, isBack = true, isShopNow = false}) {

    function handleLogout() {
        console.log("hiii logout")
    }

    function handleShopNow() {
        push('shopNow')
    }

    return (
        <Appbar.Header style={{ backgroundColor: '#fff', justifyContent: 'space-between' }} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {isBack && <Appbar.BackAction onPress={goBack} />}
                <Image source={Logo} height={50} resizeMode="contain" style={{ height: 30, alignItems: 'flex-start' }} />
            </View>
            {isLogout && <Text onPress={handleLogout} style={{ fontSize: 18, color: theme.Red, fontFamily: 'Poppins-SemiBold', right: 4 }}>Log out</Text>}
            {isShopNow && <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={handleShopNow}>
                <Image source={closet} height={30} resizeMode="contain" style={{ height: 21, alignItems: 'flex-start' }} />
            </TouchableOpacity>}
        </Appbar.Header>)
}


export default Header;
