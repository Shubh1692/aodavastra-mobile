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
import RewardMVCoins from '../screens/Influencer/rewardMvCoin';
import CartAddress from '../screens/bag/cartAddress';
import CartPayment from '../screens/bag/cartPayment';


const MainStack = createStackNavigator();


export const Main = () => {
    return (
        <MainStack.Navigator
            initialRouteName="login"
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
            <MainStack.Screen name="ordersList" component={Orders} />
            <MainStack.Screen name="becomeInfluencerProfile" component={BecomeInfluencerProfile} />
            <MainStack.Screen name="influencerMyAccount" component={InfluencerMyAccount} />
            <MainStack.Screen name="tagPeopleList" component={TagPeopleList} />
            <MainStack.Screen name="influencerEditProfile" component={InfluencerEditProfileScreen} />
            <MainStack.Screen name="bankDeatils" component={BankDeatils} />
            <MainStack.Screen name="reedemCoins" component={ReedemCoins} />
            <MainStack.Screen name="influencerCoupon" component={InfluencerCoupon} />
            <MainStack.Screen name="publicInfluencerProfile" component={PublicInfluencerProfile} />
            <MainStack.Screen name="productList" component={ProductList} />
            <MainStack.Screen name="shopNow" component={ShopNow} />
            <MainStack.Screen name="search" component={Search} />
            <MainStack.Screen name="welcome" component={Welcome} />
            <MainStack.Screen name="cart" component={Cart} />
            <MainStack.Screen name='cartAddress' component={CartAddress} />
            <MainStack.Screen name='cartPayment' component={CartPayment} />
            <MainStack.Screen name="rewardMVCoins" component={RewardMVCoins} />
        </MainStack.Navigator>
    )
}