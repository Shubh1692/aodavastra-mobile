import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
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



function NonInfluencerProfile() {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleSegment = (index) => {
        console.log("hii", index)
        setSelectedIndex(index);
    }

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
                        <View>
                            <Text style={styles.followingCount}>157</Text>
                            <Text style={styles.followingTitle}>Following</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.descriptionSection}>
                    <Text style={styles.descTitle}>In a world where you can be anyone, be yourself 👑</Text>
                </View>
            </View>
            <View style={{  elevation: 3 }}>
                <SegmentComponent handleChanges={handleSegment} />
            </View>
            {selectedIndex == 0 && <View style={{ backgroundColor: '#f9f9f9', flex: 1, flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <SquareCard imageUrl={OrderIcon} url={'orders'} title={'Orders'} count={'20'} isCount={true} />
                <SquareCard imageUrl={HomeIcon} url={'addressList'} title={'Address'} count={'3'} isCount={true} />
                <SquareCard imageUrl={WishlistIcon} url={'wishlist'} title={'Wishlist'} count={'20'} isCount={true} />
                <SquareCard imageUrl={SettingIcon} url={'nonInfluencerEditProfile'} title={'Edit Profile'} count={'20'} />

            </View>}

            {selectedIndex == 1 &&
                <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', }}>

                    <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                    <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                    <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                    <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                    <FastImage style={{ width: deviceWidth / 3, height: deviceWidth / 3 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" />
                </ScrollView>
            }
        </View>
    )
}

export default NonInfluencerProfile;