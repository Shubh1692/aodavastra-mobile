import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from '../PublicProfile/styles';
import UserCoverImage from '../../../assets/images/backgroundImage.png'
import { deviceWidth } from '../../../utils/device';
import SettingIcon from '../../../assets/svg/settings-white.svg';
import ModavastrIcon from '../../../assets/svg/Moda-Creator.svg';
import SnapchatIcon from '../../../assets/svg/Snapchat.svg';
import InstagramIcon from '../../../assets/svg/Instagram.svg';
import FacebookIcon from '../../../assets/svg/Facebook.svg';
import ProfileImage from '../../../components/profileImage';
import theme from '../../../theme/resources';
import Button from '../../../components/button';
import Title from '../../../components/title';
import TagEmpty from '../../../assets/svg/Tag.svg';
import { navigate } from '../../../services/NavigationService';

function InfluencerProfileView({ handleIconAction }) {
    return (
        <>
            <ImageBackground source={UserCoverImage} style={{ width: deviceWidth, height: 165, position: 'relative' }}>
            </ImageBackground>
            <View style={{ backgroundColor: theme.lighterPurpule, height: 170 }}>
                <View style={{ position: 'absolute', top: -40, marginBottom: 60, width: deviceWidth, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <View style={{ marginLeft: 10 }}>
                        <ProfileImage size={88} />
                    </View>

                    <Button mode="contained" textStyle={{ lineHeight: 20 }} style={{ width: 172, height: 40, top: 10 }} onPress={() => console.log("hii")}>Follow</Button>
                </View>
                <View style={{ position: 'relative', flexDirection: 'row' }}>
                    <View style={{ paddingLeft: 8, marginTop: 8, width: 20, }}>
                        <ModavastrIcon />
                    </View>
                    {/* Title section */}
                    <View style={{ flexDirection: 'row', marginTop: 26, paddingHorizontal: 8 }}>
                        <View style={{ marginTop: '7%', width: '55%' }}>
                            <Title />
                        </View>
                        <View style={{ flexDirection: 'row', width: '40%', justifyContent: 'space-between' }}>
                            <View>
                                <TouchableOpacity onPress={() => console.log('hii')} activeOpacity={0.7}>
                                    <Text style={styles.followingCount}>157</Text>
                                    <Text style={styles.followingTitle}>Followers</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => navigate('followingList')} activeOpacity={0.7}>
                                    <Text style={styles.followingCount}>0</Text>
                                    <Text style={styles.followingTitle}>Following</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
                {/* Description */}
                <View style={styles.descriptionSection}>
                    <Text style={styles.descTitle}>In a world where you can be anyone, be yourself 👑</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: '7%', marginTop: 5 }}>
                    <TouchableOpacity style={{ paddingHorizontal: 4 }}>
                        <InstagramIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 4 }}>
                        <FacebookIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 4 }}>
                        <SnapchatIcon />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default InfluencerProfileView;