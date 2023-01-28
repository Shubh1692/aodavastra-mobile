import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/header';
import MainContainer from '../../../components/mainContainer';
import theme from '../../../theme/resources';
import { deviceWidth } from '../../../utils/device';
import ProfileImage from '../../../components/profileImage';
import Title from '../../../components/title';
import CouponeIcon from '../../../assets/svg/shareCoupon.svg';
import Button from '../../../components/button';
import ShowCaseComponent from '../../../components/showCase';


function InfluencerCoupon() {
    return (
        <MainContainer>
            <Header />
            {/* ShowCase Header */}
            <ShowCaseComponent />

            <View style={{ flex: 1, alignItems: 'center', marginVertical: '6%' }}>
                <View style={{ alignItems: 'center', width: '76%', paddingTop: '4%' }}>
                    <Title name="Get your own Coupon" textStyle={{ color: theme.Purple, fontWeight: '600', textTransform: 'uppercase' }} />
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non mollis metus.</Text>
                </View>
                <View style={{ marginTop: '14%' }}>
                    <CouponeIcon />
                    <Title name="9 0 H J K 4 5" textStyle={{ color: theme.Purple, fontWeight: '600', textTransform: 'uppercase', marginVertical: 18 }} />
                </View>
                <View style={{ marginTop: 36 }}>
                    <Button mode="contained" textStyle={{ lineHeight: 18, fontSize: 14 }} style={{ width: 154, height: 40, bottom: 10 }} onPress={() => console.log("hii")}>Share</Button>
                </View>
            </View>
        </MainContainer>
    )
}

export default InfluencerCoupon;