import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, ImageBackground } from 'react-native';
import Container from '../../../components/container';
import Header from '../../../components/header';
import Heading from '../../../components/heading';
import MainContainer from '../../../components/mainContainer';
import Title from '../../../components/title';
import { deviceWidth } from '../../../utils/device';
import Chip from '../../../components/chip';
import theme from '../../../theme/resources';
import TextWithUnderline from '../../../components/textWithUnderline';
import { navigate } from '../../../services/NavigationService';
import SegmentComponent from '../../../components/segment';
import LineDivider from '../../../components/lineDivider';


function RewardMVCoins() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const renderYourCoin = () => {
        return (
            <Heading title="Your Coins" />
        )
    }
    const renderAboutMVCoin = () => {
        return (
            <Heading title="About MV Coin" />
        )
    }

    const renderyourCoinContainer = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
                <View>
                    <Text style={{ fontSize: 16, lineHeight: 24 }}>5 Likes</Text>
                    <Text style={{ color: theme.textGrey, fontSize: 12 }}>5 Likes</Text>
                </View>
                <Text style={{ fontSize: 16, lineHeight: 24 }}>+5 Coins</Text>
            </View>
        )
    }

    const handleSegment = (index) => {
        console.log("hii", index)
        setSelectedIndex(index);
    }

    return (
        <MainContainer>
            <Header />
            <Container>
                <ImageBackground source={require('../../../assets/images/backgrounReward.png')} style={{ width: deviceWidth - 32, height: 200, borderRadius: 10, overflow: 'hidden' }}>
                    <View style={{ padding: 20, flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                        <View>
                            <Heading title="140" textStyle={{ fontSize: 40 }} />
                            <Heading title="MV Coins" viewStyle={{ paddingVertical: 0 }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Chip
                                onPress={() => navigate('reedemCoins')}
                                title={'Redeem'}
                                textStyle={{ fontSize: 16, fontWeight: '400', color: theme.TextBlack }}
                                viewStyle={{ width: 104, height: 32, borderRadius: 16, backgroundColor: theme.White }}
                            />
                            <TextWithUnderline title="More Details" textStyle={{ marginTop: 9, color: theme.TextBlack }} onPress={() => console.log('reward insights')} />
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, marginTop: '6%', }}>
                    <SegmentComponent
                        inActiveTabColor={theme.background}
                        activeTabColor={theme.tabColor}
                        segmentStyle={{ overflow: 'hidden', elevation: 4, shadowColor: theme.TextBlack, shadowOffset: { width: 0, height: -1 }, shadowOpacity: 0.5, shadowRadius: 1, }}
                        tabStyle={{ overflow: 'hidden' }}
                        tab={[renderYourCoin(), renderAboutMVCoin()]}
                        handleChanges={handleSegment} />

                    <View style={{ flex: 1, marginTop: '6%' }}>
                        {selectedIndex == 0 &&
                            <View style={{ flex: 1 }}>
                                <Heading title="Previous Activities" />
                                <View style={{ flex: 1 }}>
                                    <FlatList
                                        data={[1, 2, 3, 4, 5, 6]}
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}
                                        //data defined in constructor
                                        ItemSeparatorComponent={() => <LineDivider />}
                                        //Item Separator View
                                        renderItem={renderyourCoinContainer}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </View>
                            </View>}
                        {selectedIndex == 1 && <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, lineHeight: 24 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </View>}
                    </View>
                </View>
            </Container>

        </MainContainer>
    )
}

export default RewardMVCoins;