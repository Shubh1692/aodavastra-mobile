import React, { useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity,Alert } from 'react-native';
import MainContainer from '../../../components/mainContainer';
import HeaderWithSearch from '../../../components/headerWithSearch';
import Container from '../../../components/container';
import ProductItem from '../../../components/productItem';
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


function EndorseProductList() {


const handleEndorseProduct = () =>{
    Alert.alert('Are you Sure?', 'You want endorse this product', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
}


    const renderItem = useCallback(({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={handleEndorseProduct}>
                <ProductItem
                    title={item.name} price={item.price}
                    item={item}
                    isProductOutOfStock={item.outOfStock}
                />
            </TouchableOpacity>
        )
    }, []);
    const Empty = useCallback(() => {
        return <DefaultEmpty />
    }, []);

    return (
        <MainContainer>
            <HeaderWithSearch title={"Endorse Product"} />
            <Container>
                <FlatList
                    refreshing
                    data={listItems}
                    numColumns={2}
                    contentContainerStyle={{ flexGrow: 1 }}
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

export default EndorseProductList;
