import React, { useState, useRef, useCallback } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../../components/header';
import MainContainer from '../../../components/mainContainer';

import theme from '../../../theme/resources';
import Button from '../../../components/button';
import SegmentComponent from '../../../components/segment';
import Title from '../../../components/title';
import TagEmpty from '../../../assets/svg/Tag.svg';
import Tag from '../../../assets/svg/Tag-black.svg';
import TagPrimary from '../../../assets/svg/Tag-primary.svg';
import Camera from '../../../assets/svg/Camera-black.svg';
import CameraPrimary from '../../../assets/svg/Camera-primary.svg';
import Heart from '../../../assets/svg/heart-black.svg';
import HeartPrimary from '../../../assets/svg/heart-primary.svg';
import FastImage from 'react-native-fast-image';
import EmptyUserStore from '../../../components/userStoreItem/emptyStore';
import EmptyUserPost from '../../../components/userPostItems/emptyUserPost';
import EmptyLikePost from '../../../components/userLikedPost/emptyUserLiked'
import styles from './styles';
import UserLikePosts from '../../../components/userLikedPost';
import UserPosts from '../../../components/userPostItems';
import UserCategories from '../../../components/userStoreItem';
import BottomSheet from '../../../components/bottomSheet';
import InfluencerProfileView from '../components/influencerProfileComponent';
import Heading from '../../../components/heading';
import CopyIcon from '../../../assets/svg/Copy-primary.svg';
import ShareIcon from '../../../assets/svg/Share-primary.svg';
import { navigate } from '../../../services/NavigationService';
import { values } from 'lodash';



function InfluencerMyAccount() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    
    const [categories, setCategories] = useState([1]);
    const [isSettingIcon, setIsSettingIcon] = useState(false);
    const [posts, setPosts] = useState([1]);
    const [likes, setLikes] = useState([1]);

    const handleSegment = (index) => {
        console.log("hii", index)
        setSelectedIndex(index);
    }

    const handleSettingIcon = () => {
        console.log("hiii handleSettingIcon")
        setIsSettingIcon(!isSettingIcon);
    }

    const renderGrid = () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {selectedIndex == 0 ? <TagPrimary /> : <Tag />}
            <Text style={{ marginLeft: 3, fontFamily: theme.Poppins.regular,fontSize: 14, fontWeight: '600', color: selectedIndex == 0 ? theme.Purple : theme.TextBlack }}>Store</Text>
        </View>
    )
    const renderLikePost = () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {selectedIndex == 1 ? <CameraPrimary /> : <Camera />}
            <Text style={{ marginLeft: 3, fontFamily: theme.Poppins.regular,fontSize: 14, fontWeight: '600', color: selectedIndex == 1 ? theme.Purple : theme.TextBlack }}>Posts</Text>
        </View>
    )

    const renderPost = () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {selectedIndex == 2 ? <HeartPrimary /> : <Heart />}
            <Text style={{ marginLeft: 3, fontFamily: theme.Poppins.regular,fontSize: 14, fontWeight: '600', color: selectedIndex == 2 ? theme.Purple : theme.TextBlack }}>Liked Posts</Text>
        </View>

    )

    return (
        <>
        <MainContainer>
            <Header />
            <InfluencerProfileView handleIconAction={handleSettingIcon} />
            {/* Edit Ptofile End */}
            <View style={{ flex: 1, }}>
                <View style={{ elevation: 3 }}>
                    <SegmentComponent handleChanges={handleSegment} tab={[renderGrid(), renderLikePost(), renderPost()]} />
                </View>
                <View style={{ flex: 1 }}>
                    {selectedIndex == 0 && <View style={{ flex: 1, alignItems: 'center' }}>
                        {categories.length == 0 && <EmptyUserStore />}
                        {categories.length > 0 && <UserCategories isCreator={true} />}
                        <Button mode="contained" textStyle={{ lineHeight: 18, fontFamily: theme.Poppins.regular,fontSize: 14 }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', height: 40, bottom: 10, width: 200 }} onPress={() => console.log("hii")}>Create Category</Button>
                    </View>}

                    {selectedIndex == 1 && <View style={{ flex: 1, alignItems: 'center' }}>
                        {posts.length == 0 && <EmptyUserPost />}
                        {posts.length > 0 && <UserPosts />}
                        <Button mode="contained" textStyle={{ lineHeight: 18, fontFamily: theme.Poppins.regular,fontSize: 14 }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', height: 40, bottom: 10, width: 200 }} onPress={() => console.log("hii")}>Create a Post</Button>
                    </View>}

                    {selectedIndex == 2 && <View style={{ flex: 1, alignItems: 'center' }}>
                        {likes.length == 0 && <EmptyLikePost />}
                        {likes.length > 0 && <UserLikePosts isCreator={true}/>}
                    </View>}

                </View>
            </View>
           
        </MainContainer>
        {isSettingIcon &&
            <BottomSheet title={'SETTINGS'} actionHandler={handleSettingIcon}>
                <View style={{ backgroundColor: theme.background, marginVertical: '5%', flex: 1,}}>
                <Heading 
                title="Orders" 
                onPress={() => navigate('ordersList')}
                textStyle={{ fontFamily: theme.Poppins.regular,fontSize: 18, fontWeight: '600', lineHeight: 27, textTransform: 'uppercase' }} 
                viewStyle={{ marginVertical: 6, marginHorizontal: 12 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Heading title="YOUR STORE LINK"  
                    onPress={() => navigate('ordersList')} 
                    textStyle={{ fontFamily: theme.Poppins.regular,fontSize: 18, fontWeight: '600', lineHeight: 27, textTransform: 'uppercase' }} 
                    viewStyle={{ marginVertical: 6, marginHorizontal: 12 }} />
                    <View style={{flexDirection:'row',alignItems:'center', marginHorizontal: 12}}>
                        <ShareIcon style={{marginRight:10}} />
                        <CopyIcon />
                    </View>
                </View>
                <Heading 
                title="Get your own Coupon" 
                onPress={() => navigate('influencerCoupon')}  
                textStyle={{ fontFamily: theme.Poppins.regular,fontSize: 18, fontWeight: '600', lineHeight: 27, textTransform: 'uppercase' }} 
                viewStyle={{ marginVertical: 6, marginHorizontal: 12 }} />
                <Heading 
                title="Address" 
                onPress={() => navigate('addressList')} 
                textStyle={{ fontFamily: theme.Poppins.regular,fontSize: 18, fontWeight: '600', lineHeight: 27, textTransform: 'uppercase' }} 
                viewStyle={{ marginVertical: 6, marginHorizontal: 12 }} />
                <Heading 
                title="Wishlist" 
                onPress={() => navigate('wishlist')} 
                textStyle={{ fontFamily: theme.Poppins.regular,fontSize: 18, fontWeight: '600', lineHeight: 27, textTransform: 'uppercase' }} 
                viewStyle={{ marginVertical: 6, marginHorizontal: 12 }} />
                <Heading 
                title="EDIT Profile" 
                onPress={() => navigate('influencerEditProfile')} 
                textStyle={{ fontFamily: theme.Poppins.regular,fontSize: 18, fontWeight: '600', lineHeight: 27, textTransform: 'uppercase' }} 
                viewStyle={{ marginVertical: 6, marginHorizontal: 12 }} />
                </View>
            </BottomSheet>}
        </>
    )
}

export default InfluencerMyAccount;