import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/fonts/selection.json';
// import theme from '../../theme/resources';


const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig);


function IconComponent({ name, size, color, ...props }) {
    return <CustomIcon name={name} size={size} color={color} {...props} />
}

export default IconComponent;