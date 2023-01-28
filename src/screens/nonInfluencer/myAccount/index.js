import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';
import Header from "../../../components/header";
import ProfileImage from '../../../components/profileImage';
import SegmentComponent from '../../../components/segment';
import styles from './styles';
import { Card } from 'react-native-paper';
import Icon from '../../../components/icon';
import SquareCard from '../../../components/squareCard'
import OrderIcon from '../../../assets/images/order.png';
import HomeIcon from '../../../assets/images/home.png';
import WishlistIcon from '../../../assets/images/wishlist.png';
import SettingIcon from '../../../assets/images/settings.png';
import { navigate } from "../../../services/NavigationService";
import FastImage from 'react-native-fast-image';
import { deviceWidth } from "../../../utils/device";
import ClosetIcon from '../../../assets/images/closet.png';
import Back from '../../../assets/images/Back.png';
import theme from "../../../theme/resources";



function NonInfluencerProfile() {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleSegment = (index) => {
        console.log("hii", index)
        setSelectedIndex(index);
    }
    const renderGrid = () => (
        <Image source={require('../../../assets/images/grid.png')} style={{width: 22,
            height: 22,}} />
    )
    const renderEmptyHeart = () => (
        <Image source={require('../../../assets/images/emptyHeart.png')} style={{width: 22,
            height: 22,}} resizeMode="contain" />
    )

    return (
        <View style={{ flex: 1, }}>
            <Header isBack={false} />
            <View style={styles.topSection}>
                <View style={styles.profileContainer}>
                    <ProfileImage size={88} />
                    <View style={styles.profileTitleSection}>
                        <View style={{ marginBottom: '4%' }}>
                            <Text style={styles.profileTitle} numberOfLines={1}>Anjali Verma</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigate('followingList')} activeOpacity={0.7}>
                            <Text style={styles.followingCount}>157</Text>
                            <Text style={styles.followingTitle}>Following</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.descriptionSection}>
                    <Text style={styles.descTitle}>In a world where you can be anyone, be yourself 👑</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ elevation: 3 }}>
                    <SegmentComponent handleChanges={handleSegment}  tab={[renderGrid(),renderEmptyHeart()]}/>
                </View>
                {selectedIndex == 0 && <View style={{ backgroundColor: '#F9F9F9', flex: 1, flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <SquareCard imageUrl={OrderIcon} url={'orders'} title={'Orders'} count={'20'} isCount={true} />
                    <SquareCard imageUrl={HomeIcon} url={'addressList'} title={'Address'} count={'3'} isCount={true} />
                    <SquareCard imageUrl={WishlistIcon} url={'wishlist'} title={'Wishlist'} count={'20'} isCount={true} />
                    <SquareCard imageUrl={SettingIcon} url={'nonInfluencerEditProfile'} title={'Edit Profile'} count={'20'} />
                </View>}

                {selectedIndex == 1 &&
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#F9F9F9', marginTop: 20, width: deviceWidth, paddingBottom: 130 }}>
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                        <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                    </ScrollView>
                }
            </View>

            <TouchableOpacity onPress={() => navigate('InfluencerEditProfile')} activeOpacity={0.7} style={{ backgroundColor: '#F9F9F9', flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', height: 80, bottom: 0, width: deviceWidth }}>
                <ImageBackground style={{ width: 328, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40, paddingHorizontal: 10 }} source={require('../../../assets/images/backgroundCover.png')}>
                    <Image source={ClosetIcon} style={{ width: 30, height: 26 }} resizeMode="contain" />
                    <Text style={{ fontSize: 16, fontWeight: '400', color: theme.White }}>Become a ModaVastra creator</Text>
                    <Image source={Back} style={{ width: 20, height: 20 }} resizeMode="contain" />
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

export default NonInfluencerProfile;