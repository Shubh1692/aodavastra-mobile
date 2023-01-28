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
import BecomeInfluencerProfile from '../screens/Influencer/becomeInfuencerProfile';
import InfluencerMyAccount from '../screens/Influencer/myAccount';
import TagPeopleList from '../screens/Influencer/tagPeople';
import InfluencerEditProfileScreen from '../screens/Influencer/editInfluencerProfile';
import BankDeatils from '../screens/Influencer/bankDetails';
import ReedemCoins from '../screens/Influencer/reedemCoins';
import InfluencerCoupon from '../screens/Influencer/influencerCoupon';
import PublicInfluencerProfile from '../screens/publicInfluencer/PublicProfile';
import ProductList from '../screens/product/productList';
import ShopNow from '../screens/shopNow'
import Search from '../screens/search';
import Welcome from '../screens/home/welcome';
import Cart from '../screens/bag/cart';


const MainStack = createStackNavigator();


export const Main = () => {
    return (
        <MainStack.Navigator
            initialRouteName="search"
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
            <MainStack.Screen name="BecomeInfluencerProfile" component={BecomeInfluencerProfile} />
            <MainStack.Screen name="InfluencerMyAccount" component={InfluencerMyAccount} />
            <MainStack.Screen name="TagPeopleList" component={TagPeopleList} />
            <MainStack.Screen name="InfluencerEditProfileScreen" component={InfluencerEditProfileScreen} />
            <MainStack.Screen name="BankDeatils" component={BankDeatils} />
            <MainStack.Screen name="ReedemCoins" component={ReedemCoins} />
            <MainStack.Screen name="InfluencerCoupon" component={InfluencerCoupon} />
            <MainStack.Screen name="PublicInfluencerProfile" component={PublicInfluencerProfile} />
            <MainStack.Screen name="productList" component={ProductList} />
            <MainStack.Screen name="shopNow" component={ShopNow} />
            <MainStack.Screen name="search" component={Search} />
            <MainStack.Screen name="welcome" component={Welcome} />
            <MainStack.Screen name="cart" component={Cart} />
        </MainStack.Navigator>
    )
}