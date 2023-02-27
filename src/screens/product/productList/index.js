import React, { useCallback, useState } from "react";
import { FlatList, Text, View } from 'react-native';
import Container from "../../../components/container";
import Header from '../../../components/header';
import MainContainer from '../../../components/mainContainer';
import ProductItem from '../../../components/productItem';
import theme from "../../../theme/resources";
import styles from './styles';
import DefaultEmpty from '../../../components/defaultEmpty';
import BottomSheet from '../../../components/bottomSheet';
import Heading from '../../../components/heading';
import CheckboxComponent from '../../../components/checkbox';
import SeparatorComponent from '../../../components/Separator';
import LineDivider from '../../../components/lineDivider';

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
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [filterList, setFilterList] = useState([
        { id: 1, title: 'Bracelet', isChecked: false },
        { id: 2, title: 'Ring', isChecked: false },
        { id: 3, title: 'Headpiece', isChecked: false },
        { id: 4, title: 'Necklace', isChecked: false },
        { id: 5, title: 'Earrings', isChecked: false },
        { id: 6, title: 'Anklets', isChecked: false },
    ])

    const handleFilterSection = () => {
        console.log("hiii isFilterVisible")
        setIsFilterVisible(!isFilterVisible);
    }

    const handleFilterData = (id) => {
        let filter = [...filterList];
        let filerData = filter.find((ele) => ele?.id == id);
        // console.log("filerData", filerData, filerData['isChecked'], filerData['isChecked'] = !filerData.isChecked)
        filerData['isChecked'] = !filerData.isChecked;
        setFilterList([...filter])
    }

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
        <>
            <MainContainer>
                <Header />
                <Container >
                    <View>
                        <Text onPress={handleFilterSection} style={{ textAlign: 'right', textDecorationLine: 'underline', color: theme.Purple, fontFamily: 'Poppins-SemiBold' }}>Apply Filters</Text>
                    </View>
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
            {isFilterVisible &&
                <BottomSheet bottomSheetHeigh={'75%'} title={"APPLY FILTER"} setIsSettingIcon={handleFilterSection} actionHandler={handleFilterSection} >
                    <View style={{ marginTop: '5%', flex: 1, marginLeft: 10 }}>
                        <View style={{ }}>
                            <Heading title="Categories" textStyle={{ color: theme.TextBlack, fontSize: 16, fontWeight: '500' }} />
                            <View style={{ }}>
                                <FlatList
                                    data={filterList}
                                    //data defined in constructor
                                    ItemSeparatorComponent={() => <SeparatorComponent />}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                    //Item Separator View
                                    renderItem={({ item }) => (<View style={{ flexDirection: 'row', marginVertical: 4 }}>
                                        <CheckboxComponent
                                            checked={item?.isChecked} handleCheckbox={() => {
                                                handleFilterData(item?.id);
                                            }} />
                                        <Text style={{ paddingLeft: 8, fontSize: 16, fontWeight: '400', }}>{item?.title}</Text>
                                    </View>)}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </View>
                        <LineDivider extraStyle={{ borderWidth: 1, borderColor: theme.TextBlack, width: 112, marginLeft: 0, marginTop: 16 }} />
                        <View style={{  }}>
                            <Heading title="Size" textStyle={{ color: theme.TextBlack, fontSize: 16, fontWeight: '500' }} />
                            <View style={{ }}>
                                <FlatList
                                    data={filterList}
                                    //data defined in constructor
                                    ItemSeparatorComponent={() => <SeparatorComponent />}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                    //Item Separator View
                                    renderItem={({ item }) => (<View style={{ flexDirection: 'row', marginVertical: 4 }}>
                                        <CheckboxComponent
                                            checked={item?.isChecked} handleCheckbox={() => {
                                                handleFilterData(item?.id);
                                            }} />
                                        <Text style={{ paddingLeft: 8, fontSize: 16, fontWeight: '400', }}>{item?.title}</Text>
                                    </View>)}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </View>
                    </View>
                </BottomSheet>}
        </>
    )
}

export default ProductList;