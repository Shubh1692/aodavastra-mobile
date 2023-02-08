import React, { useState } from "react";
import { View, Text, Image,FlatList, StyleSheet } from 'react-native';
import Header from '../../../components/header';
import theme from "../../../theme/resources";
import styles from './styles';
import ProductListComponents from './components/productListComponent';
import MainContainer from '../../../components/mainContainer';
import Container from "../../../components/container";

const  listItems =[
    { id:1, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false}, 
    { id:2, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false}, 
    { id:3, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:true}, 
    { id:4, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false}, 
    { id:5, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false}, 
    { id:6, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false}, 
    { id:7, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false}, 
    { id:8, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false}, 
    { id:9, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false}, 
    { id:10, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false}, 
]

function ProductList() {
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
            <Header />
            <Container >
                <View>
                    <Text onPress={() => console.log('hii')} style={{ textAlign: 'right', textDecorationLine:'underline', color: theme.Purple, fontFamily:'Poppins-SemiBold' }}>Apply Filters</Text>
                </View>

                {/* <View style={{flex:1}}> */}
                    <FlatList
                        data={listItems}
                        //Item in Columns
                        numColumns={2}
                        //data defined in constructor
                        //ItemSeparatorComponent={ItemSeparatorView}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        //Item Separator View
                        renderItem={({item}) => <ProductListComponents item={item}/>}
                        keyExtractor={(_,index) => index.toString()}
                    />
                {/* </View> */}
            </Container>
        </MainContainer>
    )
}

export default ProductList;