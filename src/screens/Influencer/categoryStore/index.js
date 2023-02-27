import React, { useCallback } from 'react';
import { View, Text, ScrollView,FlatList } from 'react-native';
import Header from '../../../components/header';
import MainContainer from '../../../components/mainContainer';
import EndorseProductShowCase from '../../../components/endorseProductShowCase';
import Container from '../../../components/container';
import ProductItem from '../../../components/productItem';
import DefaultEmpty from '../../../components/defaultEmpty';
import FloatingButton from '../../../components/button/floatingButton';
import { navigate } from '../../../services/NavigationService';
import theme from '../../../theme/resources';

const listItems = [
    { id: 1, name: 'Net Multi Work Saree', price: '2,099.00', outOfStock: false },
    { id: 2, name: 'Net Multi Work Saree', price: '2,099.00', outOfStock: false },
    { id: 3, name: 'Net Multi Work Saree', price: '2,099.00', outOfStock: false },
    { id: 4, name: 'Net Multi Work Saree', price: '2,099.00', outOfStock: false },
]

function CategoryStore() {

    const renderItem = useCallback(({ item }) => {
        return <ProductItem
            title={item.name} price={item.price}
            item={item}
            isProductOutOfStock={item.outOfStock}
        />
    }, []);
    const Empty = useCallback(() => {
        return <DefaultEmpty />
    }, []);
    return (
        <>
        <MainContainer>
            <Header />
            <View style={{ marginTop: 10 }}>
                <EndorseProductShowCase imgUrl={require('../../../assets/images/p2.png')} imgStyle={{ width: 88, height: 88 }} isRound={false} />
            </View>
            <Container>
                <Text style={{textAlign:'center',color:theme.Purple,fontSize:14,fontWeight:'400',paddingBottom:6}}>Products</Text>
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
                <FloatingButton title={'Endorse Product'} onPress={() => navigate('endorseProduct')}  />
            </Container>
        </MainContainer>
        
        </>
    )
}

export default CategoryStore;