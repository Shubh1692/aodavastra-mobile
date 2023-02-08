import React from 'react';
import Icomoon from "react-native-icomoon"
import icoMoonConfig from '../../assets/fonts/selection.json';
// import theme from '../../theme/resources';




function IconComponent({ name, size, ...restProps }) {
    return <Icomoon iconSet={icoMoonConfig} size={size || 20} name={name} {...restProps} />
}

export default IconComponent;