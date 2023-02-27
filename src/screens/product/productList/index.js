import React, { useCallback } from "react";
import { FlatList, Text, View } from 'react-native';
import Container from "../../../components/container";
import Header from '../../../components/header';
import MainContainer from '../../../components/mainContainer';
import ProductItem from '../../../components/productItem';
import theme from "../../../theme/resources";
import styles from './styles';
import DefaultEmpty from '../../../components/defaultEmpty';

const listItems = [
    { id: 1, name: 'Net Multi Work Saree', price: '₹ 2,099.00', outOfStock: false },
    { id: 2, name: 'Net Multi Work Saree', price: '₹ 2,099.00', outOfStock: true },
    { id: 3, name: 'Net Multi Work Saree', price: '₹ 2,099.00', outOfStock: false },
    { id: 4, name: 'Net Multi Work Saree', price: '₹ 2,099.00', outOfStock: false },
    { id: 5, name: 'Net Multi Work Saree', price: '₹ 2,099.00', outOfStock: false },
    { id: 6, name: 'Net Multi Work Saree', price: '₹ 2,099.00', outOfStock: false },
    { id: 7, name: 'Net Multi Work Saree', price: '₹ 2,099.00', outOfStock: false },
    { id: 8, name: 'Net Multi Work Saree', price: '₹ 2,099.00', outOfStock: false },
    { id: 9, name: 'Net Multi Work Saree', price: '₹ 2,099.00', outOfStock: false },
    { id: 10, name: 'Net Multi Work Saree', price: '₹ 2,099.00', outOfStock: false },
]

function ProductList() {
    const renderItem = useCallback(({ item }) => {
        return <ProductItem
            title={item.name} price={item.price}
            item={item}
            isProductOutOfStock={item.outOfStock}
        />
    }, []);
    const Empty = useCallback(() => {
        return <DefaultEmpty description={'Product List is \nEmpty Right Now'}/> 
    }, []);

    return (
        <MainContainer>
            <Header />
            <Container >
                <View>
                    <Text onPress={() => console.log('hii')} style={{ textAlign: 'right', textDecorationLine: 'underline', color: theme.Purple, fontFamily: theme.Poppins.semiBold, }}>Apply Filters</Text>
                </View>
                <FlatList
                    refreshing
                    data={listItems}
                    numColumns={2}
                    contentContainerStyle={{flexGrow:1}}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={(_, index) => index.toString()}
                    ListEmptyComponent={Empty}
                />
            </Container>
        </MainContainer>
    )
}

export default ProductList;