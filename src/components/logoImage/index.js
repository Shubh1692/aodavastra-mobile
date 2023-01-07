import React from 'react';
import Logo from '../../assets/images/logo2.png';
import {Image} from 'react-native'


function LogoImageComponent(){
    return(
        <Image source={Logo} resizeMode="contain"  />
    )
}

export default LogoImageComponent;