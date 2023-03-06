import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import Container from '../../../components/container';
import Header from '../../../components/header';
import MainContainer from '../../../components/mainContainer';
import Title from '../../../components/title';
import OffersComponents from './components/offersComponents';
const listItems = [
    { id: 1, name: '10% off on MODAVASTRA', price: '2,099.00', isCouponApplied: true },
    { id: 2, name: '10% off on Drapes By Rashmi', price: '2,099.00', isCouponApplied: false },
    { id: 3, name: '10% off on ARABELLA', price: '2,099.00', isCouponApplied: false },
    { id: 4, name: '10% off on MODAVASTRA', price: '2,099.00', isCouponApplied: false },
]


function CouponScreen() {
    return (
        <>
            <MainContainer>
                <Header />
                <Container>
                    <Title name={'Popular offers'} />
                    <View style={styles.listContainer}>
                        <FlatList
                            horizontal
                            data={listItems}
                            style={styles.flatListStyle}
                            contentContainerStyle={styles.listContainer}
                            ItemSeparatorComponent={() => <View style={{ marginHorizontal: 6 }} />}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <TouchableOpacity activeOpacity={0.7} ><OffersComponents chipText={item.name} isCouponApplied={item.isCouponApplied} /></TouchableOpacity>}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View style={{ flex: 1, }}>
                        <View style={styles.titleViewStyle}>
                            <Title name={'Big Discounts on selected brands'} />
                        </View>
                        <View style={styles.listContainer}>
                            <FlatList
                                horizontal
                                data={listItems}
                                style={styles.flatListStyle}
                                contentContainerStyle={styles.listContainer}
                                ItemSeparatorComponent={() => <View style={{ marginHorizontal: 6 }} />}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => <TouchableOpacity activeOpacity={0.7}><OffersComponents chipText={item.name} isCouponApplied={item.isCouponApplied} /></TouchableOpacity>}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>

                </Container>
            </MainContainer>

        </>
    )
}

export default CouponScreen;

const styles = StyleSheet.create({
    listContainer: {
        height: 200
    },
    flatListStyle: {
        flex: 2,
        height: 200
    },
    titleViewStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

})