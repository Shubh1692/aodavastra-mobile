import React from "react";
import LogoImageComponent from "../logoImage";
import { View } from 'react-native';
import styles from './styles';


function Logo() {
    return (
        <View style={styles.topContainer}>
            <LogoImageComponent />
        </View>
    )
}




export default Logo;