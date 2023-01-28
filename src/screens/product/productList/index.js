import React from "react";
import { View, Text, Image,FlatList } from 'react-native';
import Header from '../../../components/header';
import CardComponent from '../../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../../theme/resources";
import Title from "../../../components/title";
import Button from '../../../components/button';
import styles from './styles';
import ProductListComponents from './components/productListComponent';
import { deviceWidth } from "../../../utils/device";
import MainContainer from '../../../components/mainContainer';

const  listItems =[
    { id:1, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false}, 
    { id:2, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false}, 
    { id:3, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:true}, 
    { id:4, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false}, 
    { id:5, name:'Net Multi Work Saree', price:'₹ 2,099.00', outOfStock:false}, 
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
            <View style={{ marginTop: '8%', marginHorizontal: '4%',flex:1 }}>
                <View>
                    <Text onPress={() => console.log("hii")} style={{ textAlign: 'right', color: theme.Purple, fontWeight: '600' }}>Apply Filters</Text>
                </View>

                <View style={{flex:1}}>
                    <FlatList
                        data={listItems}
                        //Item in Columns
                        numColumns={2}
                        //data defined in constructor
                        ItemSeparatorComponent={ItemSeparatorView}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        //Item Separator View
                        renderItem={(item) => <ProductListComponents item={item}/>}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        </MainContainer>
    )
}

export default ProductList;