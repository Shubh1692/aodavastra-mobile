import React, { Fragment } from "react";
import {
    createBottomTabNavigator,
    BottomTabNavigationOptions,
    BottomTabBarOptions,
} from "@react-navigation/bottom-tabs";
import { BottomTabIcon } from './BottomTabIcon';
import { View, Text } from 'react-native';


import NonInfluencerProfile from '../screens/nonInfluencer/myAccount';
import Search from "../screens/search";
import Cart from "../screens/bag/cart";
import Welcome from "../screens/home/welcome";
import theme from "../theme/resources";

const screenOptions = ({ route, navigation }) => ({
    tabBarShowLabel: false,
    tabBarItemStyle: {
        flex: 1,
        backgroundColor: "#fff",
    },
    tabBarStyle: {
        elevation: 4,
        shadowColor: theme.TextBlack,
        shadowOffset: { width: 0, height: -1 }, // change this for more shadow
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
    tabBarIcon: ({ focused }) => {
        // console.log("route",route.name)
        // const iconName = getKeyValue(IconRouteMap)(route.name);
        return <BottomTabIcon icon={route.name} isActive={focused} />;
    },

});

const HomeTab = createBottomTabNavigator();

export const HomeTabs = () => {
    return (
        <HomeTab.Navigator
            screenOptions={screenOptions}>
            <HomeTab.Screen name="home" component={Welcome} options={{ headerShown: false }} />
            <HomeTab.Screen name="shopping-bag" component={Cart} options={{ headerShown: false }} />
            <HomeTab.Screen name="search" component={Search} options={{ headerShown: false }} />
            <HomeTab.Screen name="profile" component={NonInfluencerProfile} options={{ headerShown: false }} />
        </HomeTab.Navigator>
    );
};
