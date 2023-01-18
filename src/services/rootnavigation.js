import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/regitser';
import NonInfluencerEditProfile from '../screens/nonInfluencer/editProfile';
import AddAddress from '../screens/address/addAddress';
import EditAddress from '../screens/address/editAddress';
import ForgotScreen from '../screens/auth/forgotPassword';
import ChangePasswordScreen from '../screens/auth/changePassword';
import NonInfluencerProfile from '../screens/nonInfluencer/myAccount';
import FollowingList from '../screens/nonInfluencer/followingList';
import Wishlist from '../screens/wishlist';
import AddressList from '../screens/address/addressList';
import Orders from '../screens/orders';
import {HomeTabs} from './BottomNavigation';


const MainStack = createStackNavigator();


export const Main = () => {
    return (
        <MainStack.Navigator
            initialRouteName="nonInfluencerProfile"
            screenOptions={{
                headerShown: false,
            }}>
            
            <MainStack.Screen name="login" component={LoginScreen} />
            <MainStack.Screen name="Home" component={HomeTabs} />
            <MainStack.Screen name="register" component={RegisterScreen} />
            <MainStack.Screen name="nonInfluencerEditProfile" component={NonInfluencerEditProfile} />
            <MainStack.Screen name="addAddress" component={AddAddress} />
            <MainStack.Screen name="editAddress" component={EditAddress} />
            <MainStack.Screen name="forgot" component={ForgotScreen} />
            <MainStack.Screen name="changePassword" component={ChangePasswordScreen} />
            <MainStack.Screen name="nonInfluencerProfile" component={NonInfluencerProfile} />
            <MainStack.Screen name="followingList" component={FollowingList} />
            <MainStack.Screen name="wishlist" component={Wishlist} />
            <MainStack.Screen name="addressList" component={AddressList} />
            <MainStack.Screen name="orders" component={Orders} />
        </MainStack.Navigator>
    )
}