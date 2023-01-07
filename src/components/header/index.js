import React from 'react';
import { Appbar,Text, } from 'react-native-paper';
import {Image} from 'react-native';

import Logo from '../../assets/images/logo2.png';



function Header() {
    return (
        <Appbar.Header style={{backgroundColor:'#fff'}} >
            <Appbar.BackAction onPress={() => console.log('back')} />
            <Image source={Logo} height={50} resizeMode="contain" style={{height:30,alignItems:'flex-start'}} />
        </Appbar.Header>)
}

export default Header;
