import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../components/header';
import CardComponent from '../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../theme/resources";
import Title from "../../components/title";
import Button from '../../components/button';
import styles from './styles';
import TopProductListComponents from './components/topProductLstComponent';
import CategoryListComponents from './components/categoryListComponent';
import TopBrandListComponents from "./components/topBrandListComponent";
import UserListComponents from './components/userListComponent';

import { deviceWidth } from "../../utils/device";
import MainContainer from '../../components/mainContainer';
import { ScrollView } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import LineDivider from "../../components/lineDivider";
import BrandListComponent from "../shopNow/components/brandListComponent";

const  userItems =[
    {id:1, name:'Anjali Verma'},
    {id:2, name:'Anjali Verma'},
    {id:3, name:'Anjali Verma'},
    {id:4, name:'Anjali Verma'},
    {id:5, name:'Anjali Verma'},
    {id:6, name:'Anjali Verma'},
    {id:7, name:'Anjali Verma'},
    {id:8, name:'Anjali Verma'},
    {id:9, name:'Anjali Verma'},
]
const user = userItems.map((item, index) => {
    return(
        <UserListComponents item={item} key={index}/>
    )
})

const  brandItems =[
    {id:1, name:'Net Multi Work Saree'}, 
    {id:2, name:'Net Multi Work Saree'},
    {id:3, name:'Net Multi Work Saree'},
    {id:4, name:'Net Multi Work Saree'},
    {id:5, name:'Net Multi Work Saree'},
    {id:6, name:'Net Multi Work Saree'},
    {id:7, name:'Net Multi Work Saree'},
    {id:8, name:'Net Multi Work Saree'},
]

const brand = brandItems.map((item, index) => {
    return(
        <TopBrandListComponents item={item} key={index}/>
    )
})

const  productItems =[
    {id:1, name:'Net Multi Work Saree', price:'₹ 2,099.00'}, 
    {id:2, name:'Net Multi Work Saree', price:'₹ 2,099.00'}, 
    {id:3, name:'Net Multi Work Saree', price:'₹ 2,099.00'},
    {id:4, name:'Net Multi Work Saree', price:'₹ 2,099.00'},
]

const product = productItems.map((item, index) => {
    return(
        <TopProductListComponents item={item} key={index}/>
    )
})

const  categoryItems =[
    {id:1, name:'CLOTHING'},
    {id:2, name:'CLOTHING JEWELLRY'},
    {id:3, name:'JEWELLRY'},
    {id:4, name:'JEWELLRY'},
    {id:5, name:'JEWELLRY'},
    {id:6, name:'JEWELLRY CLOTHING'},
]
const category = categoryItems.map((item, index) => {
    return(
        <CategoryListComponents item={item} key={index}/>

    )
})


function Search() {
    const ItemSeparatorView = () => {
        return (
            // FlatList Item Separator
            <View
                style={styles.separator}
            />
        );
    };
    return (
        <MainContainer>
            <Header isBack={false} />
            <ScrollView 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

                <View style={{ marginTop: '8%', marginHorizontal: '4%', flex:1,}}>
                    <View>
                        <Text style={styles.searchTitle}> Users </Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        >
                            <View style={{flex:1, marginTop: '2%', marginBottom: '4%', flexDirection: 'row', flexWrap: 'wrap'}}>
                                {user}
                            </View>
                    </ScrollView>
                    <LineDivider/>
                </View>

                <View style={{ marginTop: '4%', marginHorizontal: '4%', flex:1,}}>
                    <View>
                        <Text style={styles.searchTitle}> Top Brands </Text>
                    </View>
                    <ScrollView
                        // horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        >
                            <View style={{flex:1, marginTop: '2%', marginBottom: '4%', flexDirection: 'row', flexWrap: 'wrap',}}>
                                {brand}
                            </View>
                    </ScrollView>
                    <LineDivider/>
                </View>

                <View style={{ marginTop: '4%', marginHorizontal: '4%', flex:1,}}>
                    <View>
                        <Text style={styles.searchTitle}> Top Products </Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        >
                            <View style={{flex:1, marginTop: '2%', marginBottom: '4%', flexDirection: 'row', flexWrap: 'wrap',}}>
                                {product}
                            </View>
                    </ScrollView>
                    <LineDivider/>
                </View>

                <View style={{ marginTop: '4%', marginHorizontal: '4%', flex:1,}}>
                    <View>
                        <Text style={styles.searchTitle}> Categories </Text>
                    </View>
                    <ScrollView
                        // horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        >
                            <View style={{flex:1, marginTop: '2%', marginBottom: '4%', flexDirection: 'row', flexWrap: 'wrap',}}>
                                {category}
                            </View>
                    </ScrollView>

                </View>

            </ScrollView>
            
        </MainContainer>
    )
}

export default Search;