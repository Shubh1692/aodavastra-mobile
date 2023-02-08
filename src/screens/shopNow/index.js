import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../../components/header';
import CardComponent from '../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../theme/resources";
import Title from "../../components/title";
import Button from '../../components/button';
import styles from './styles';
import BestSellerListComponents from './components/bestSellerListComponent';
import CategoryListComponents from './components/categoryListComponent';
import BrandListComponent from "./components/brandListComponent";
import CreativePartnerListComponents from './components/creativePartnerListComponent';

import { deviceWidth } from "../../utils/device";
import MainContainer from '../../components/mainContainer';
import { ScrollView } from "react-native-gesture-handler";


const listItems = [
    { id: 1, name: 'Net Multi Work Saree' },
    { id: 2, name: 'Net Multi Work Saree' },
    { id: 3, name: 'Net Multi Work Saree' },
    { id: 4, name: 'Net Multi Work Saree' }
]
const bestSeller = listItems.slice(0, 4).map((item, index) => {
    return (
        <BestSellerListComponents item={item} key={index} />
    )
})

const categoryItems = [
    { id: 1, name: 'CLOTHING' },
    { id: 2, name: 'JEWELLRY' },
    { id: 2, name: 'JEWELLRY' },
    { id: 2, name: 'JEWELLRY' },
]
const category = categoryItems.map((item, index) => {
    return (
        <CategoryListComponents item={item} key={index} />
    )
})

const brand = listItems.map((item, index) => {
    return (
        <BrandListComponent item={item} key={index} />
    )
})

const creativePartnerItems = [
    { id: 1, name: 'CLOTHING' },
    { id: 2, name: 'JEWELLRY' },
    { id: 3, name: 'JEWELLRY' },
    { id: 4, name: 'JEWELLRY' },
    { id: 5, name: 'JEWELLRY' },
    { id: 6, name: 'JEWELLRY' },
    { id: 7, name: 'JEWELLRY' },
    { id: 8, name: 'JEWELLRY' },
    { id: 9, name: 'JEWELLRY' },
]
const creativePartner = creativePartnerItems.map((item, index) => {
    return (
        <CreativePartnerListComponents item={item} key={index} />
    )
})

function ShopNow({ navigation }) {

    return (
        <MainContainer>
            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{  }}
            >
                <View style={{marginHorizontal: '4%'}}>
                    <View style={{ marginTop: '8%',  flex: 1, alignItems: 'center', }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.shopNowTitle}>BEST SELLERS</Text>
                        </View>
                        <View style={{ width: '32%', borderWidth: 1, borderColor: theme.Pink }} />
                        <ScrollView
                            // horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={{ flex: 1, marginTop: '2%', flexDirection: 'row', flexWrap: 'wrap', }}>
                                {bestSeller}
                            </View>
                        </ScrollView>

                        <TouchableOpacity activeOpacity={0.8} style={{ borderWidth: 1, width: '30%', alignItems: 'center', padding: 5, marginTop: '2%' }} onPress={() => navigation.navigate('productList')}>
                            <Text style={{ alignItems: 'center' }}> View More </Text>
                        </TouchableOpacity>
                    </View>


                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{}}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ flex: 1, marginVertical: '4%',  flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent:'center'}}>
                            {category}
                        </View>
                    </ScrollView>


                    <View style={{   flex: 1, alignItems: 'center', }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.shopNowTitle}>BRANDS ON MODAVASTRA</Text>
                        </View>
                        <View style={{ width: '60%', borderWidth: 1, borderColor: theme.Pink }} />

                        <ScrollView
                            // horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={{ flex: 1, marginTop: '1%', flexDirection: 'row', flexWrap: 'wrap' }}>
                                {brand}
                            </View>
                        </ScrollView>

                        <TouchableOpacity activeOpacity={0.8} style={{ borderWidth: 1, width: '30%', alignItems: 'center', padding: 5, marginTop: '2%' }} onPress={() => { console.log('view all'); }}>
                            <Text style={{ alignItems: 'center' }}> View All </Text>
                        </TouchableOpacity>
                        {/* <View style={{borderWidth: 1, width: '30%', alignItems: 'center', padding: 5, marginTop: '2%'}}>
                        <Text style={{ alignItems: 'center' }}> View All </Text>
                    </View> */}
                    </View>

                    </View>
                    <View style={{ marginTop: '8%', marginHorizontal: '4%', flex: 1, alignItems: 'center', }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.shopNowTitle}>OUR CREATIVE PARTNERS</Text>
                        </View>
                        <View style={{ width: '58%', borderWidth: 1, borderColor: theme.Pink }} />
                  

                    </View>
                    <ScrollView
                        // horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ flex: 1, marginTop: '2%', flexDirection: 'row', flexWrap: 'wrap', }}>
                            {creativePartner}
                        </View>
                    </ScrollView>
               
            </ScrollView>

        </MainContainer>
    )
}

export default ShopNow;