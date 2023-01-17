import React, { Fragment } from "react";
import {
    createBottomTabNavigator,
    BottomTabNavigationOptions,
    BottomTabBarOptions,
} from "@react-navigation/bottom-tabs";
import { BottomTabIcon } from './BottomTabIcon';
import { View, Text } from 'react-native';


import NonInfluencerProfile from '../screens/nonInfluencer/myAccount';



const tabBarProps = {
    showLabel: false,
    style: {
        flex:1,
        position: 'absolute',
        backgroundColor:'#222',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        height: 6*0.15,
        shadowColor:  'rgba(0,0,0,0.5)',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 6,  
        elevation: 10,
        // flexWrap:'wrap', 
        borderTopColor: '#222',
        borderTopWidth:1,
        borderWidth:1,
        borderColor: '#222',
        // width:20
      },
};

const screenOptions = ({ route, navigation }) => ({
    tabBarIcon: ({ focused }) => {
        // console.log("route",route.name)
        //   const iconName = getKeyValue(IconRouteMap)(route.name);
        return <BottomTabIcon icon={route.name} isActive={focused} />;
    },

});

const HomeTab = createBottomTabNavigator();

export const HomeTabs = () => {
    return (
        <HomeTab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarProps}     
    >
        <HomeTab.Screen name="Main" component={NonInfluencerProfile} options={{ headerShown: false }} />
        <HomeTab.Screen name="Favorite" component={NonInfluencerProfile} options={{ headerShown: false }} />
        <HomeTab.Screen name="Menu" component={NonInfluencerProfile} options={{ headerShown: false }} />
        <HomeTab.Screen name="Notification" component={NonInfluencerProfile} options={{ headerShown: false }} />
    </HomeTab.Navigator>
    );
};
