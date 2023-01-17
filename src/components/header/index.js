import React from 'react';
import { Appbar, Text, } from 'react-native-paper';
import { Image, View } from 'react-native';

import Logo from '../../assets/images/logo2.png';
import theme from '../../theme/resources';
import { goBack } from '../../services/NavigationService';




function Header({ isLogout = false, isBack = true }) {

    function handleLogout() {
        console.log("hiii logout")
    }

    return (
        <Appbar.Header style={{ backgroundColor: '#fff', justifyContent: 'space-between' }} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {isBack && <Appbar.BackAction onPress={goBack} />}
                <Image source={Logo} height={50} resizeMode="contain" style={{ height: 30, alignItems: 'flex-start' }} />
            </View>
            {isLogout && <Text onPress={handleLogout} style={{ fontSize: 18, color: theme.Red, fontWeight: '600', right: 4 }}>Log out</Text>}
        </Appbar.Header>)
}


export default Header;
