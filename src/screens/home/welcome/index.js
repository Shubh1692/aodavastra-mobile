import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../../components/header';
import CardComponent from '../../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../../theme/resources";
import Title from "../../../components/title";
import Button from '../../../components/button';
import styles from "./styles";
import TopBrandListComponents from "./components/topBrandListComponent";
import UserListComponents from './components/userListComponent';

import { deviceWidth } from "../../../utils/device";
import MainContainer from '../../../components/mainContainer';
import { ScrollView } from "react-native-gesture-handler";
import LineDivider from "../../../components/lineDivider";

const userItems = [
    { id: 1, name: 'Anjali Verma' },
    { id: 2, name: 'Anjali Verma' },
    { id: 3, name: 'Anjali Verma' },
    { id: 4, name: 'Anjali Verma' },
    { id: 5, name: 'Anjali Verma' },
    { id: 6, name: 'Anjali Verma' },
    { id: 7, name: 'Anjali Verma' },
    { id: 8, name: 'Anjali Verma' },
    { id: 9, name: 'Anjali Verma' },
]

const user = userItems.map((item, index) => {
    return (
        <UserListComponents item={item} key={index} />
    )
})

const brandItems = [
    { id: 1, name: 'Net Multi Work Saree' },
    { id: 2, name: 'Net Multi Work Saree' },
    { id: 3, name: 'Net Multi Work Saree' },
    { id: 4, name: 'Net Multi Work Saree' },
    { id: 5, name: 'Net Multi Work Saree' },
    { id: 6, name: 'Net Multi Work Saree' },
    { id: 7, name: 'Net Multi Work Saree' },
    { id: 8, name: 'Net Multi Work Saree' },
]

const brand = brandItems.map((item, index) => {
    return (
        <TopBrandListComponents item={item} key={index} />
    )
})

function Welcome() {

    return (
        <MainContainer>
            <Header isBack={false} isShopNow={true} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={styles.scrollViewContainer}>
                    <View>
                        <Text style={styles.welcomeTitle}> WELCOME TO MODAVASTRA </Text>
                    </View>
                    <View style={{ padding: '2%' }}>
                        <FastImage style={styles.logoStyle} source={require('../../../assets/images/logo2.png')} />
                    </View>
                    <View style={styles.userTitleViewStyle}>
                        <Text style={styles.userTitle}> Follow some people to keep up with latest trends. </Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.userScrollViewChildContianer}>
                            {user}
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.scrollViewContainer}>
                    <View>
                        <Text style={styles.brandTitle}> Top brands on our platform </Text>
                    </View>
                    <ScrollView
                        // horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.brandScrollViewChildContianer}>
                            {brand}
                        </View>
                    </ScrollView>
                </View>

            </ScrollView>

        </MainContainer>
    )
}

export default Welcome;