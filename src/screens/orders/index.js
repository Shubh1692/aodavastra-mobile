import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import CardComponent from '../../components/card';
import Header from '../../components/header';
import theme from '../../theme/resources';
import LineDivider from '../../components/lineDivider';
import Icon from '../../components/icon';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import SeparatorComponent from '../../components/Separator';
import OrderListComponents from './components/orderListComponents';
import MainContainer from '../../components/mainContainer';
import BottomSheet from '../../components/bottomSheet';
import CheckboxComponent from '../../components/checkbox';
import Heading from '../../components/heading';



function Orders() {
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [checked, setChecked] = useState(false);
    const [filterList, setFilterList] = useState([
        { id: 1, title: 'All', isChecked: false },
        { id: 2, title: 'Ordered', isChecked: false },
        { id: 3, title: 'Delivered', isChecked: false },
        { id: 4, title: 'Cancelled', isChecked: false },
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
    return (
        <>
            <MainContainer>
                <Header />
                <View style={{ marginTop: '8%', marginHorizontal: '4%' }}>
                    <View>
                        <Text onPress={handleFilterSection} style={{ textAlign: 'right', textDecorationLine: 'underline', color: theme.Purple, fontWeight: '600' }}>Apply Filter</Text>
                    </View>
                    <View style={{ paddingBottom: 90 }}>

                        <FlatList
                            data={[{ status: 'Cancel' }, { status: 'Complete' }, { status: 'Done' }]}
                            //data defined in constructor
                            ItemSeparatorComponent={() => <SeparatorComponent />}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            //Item Separator View
                            renderItem={({ item }) => <OrderListComponents status={item.status} />}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            </MainContainer>
            {isFilterVisible &&
                <BottomSheet title={"APPLY FILTER"} actionHandler={handleFilterSection} >
                    <View style={{ marginTop: '5%', flex: 1, marginLeft: 10 }}>
                        <Heading title="Order Status" textStyle={{ color: theme.TextBlack, fontSize: 16, fontWeight: '500' }} />
                        <View style={{ flex: 1, }}>
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
                </BottomSheet>}
        </>
    )
}

export default Orders;