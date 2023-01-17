import React from "react";
import {StyleSheet,View } from "react-native";
import {deviceWidth} from "../utils/device";
import Icon from '../components/icon';

export const BottomTabIcon = (props) => {
    const { icon, isActive } = props;
    return (
        <View flex={1}  style={{justifyContent:'center',}}>
            {icon == 'Main' && <View  style={styles.iconView} >
                {icon == 'Main' && isActive == false && <Icon name="grid" color="#5d6770" size={26} />}
                {icon == 'Main' && isActive == true && <Icon name="grid" color="#C72825" size={26}  />}
            </View>}
            {icon == 'Favorite' && <View style={styles.iconView}>
                {icon == 'Favorite' && isActive == false && <Icon name="heart" color="#5d6770" size={24} />}
                {icon == 'Favorite' && isActive == true && <Icon name="heart" color="#C72825" size={26}  />}
            </View>}
         
            {icon == 'Notification' && <View style={styles.iconView}>
                {icon == 'Notification' && isActive == false && <Icon name="grid" color="#5d6770" size={26} />}
                {icon == 'Notification' && isActive == true && <Icon name="grid" color="#C72825" size={26}  />}
            </View>}
            {icon == 'Menu' && <View style={styles.iconView}>
                {icon == 'Menu' && isActive == false && <Icon name="heart" color="#5d6770" size={26} />}
                {icon == 'Menu' && isActive == true && <Icon name="heart" color="#C72825" size={26}  />}
            </View>}
   
        </View>
    );
};

const styles = StyleSheet.create({
    indicator: {
        height: 26,
        width: 26,
    },
    iconView:{
        width:deviceWidth/4, 
        alignItems:'center'
    }
});
