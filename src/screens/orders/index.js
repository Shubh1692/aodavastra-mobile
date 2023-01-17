import React from 'react';
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


function Orders() {
    return (
        <View>
            <Header />
            <View style={{ marginTop: '8%', marginHorizontal: '4%' }}>
                <View>
                    <Text onPress={() => console.log("hii")} style={{ textAlign: 'right', color: theme.Purple, fontWeight: '600' }}>Apply Filter</Text>
                </View>
                <View style={{paddingBottom:160}}>

                    <FlatList
                        data={[{status:'Cancel'},{status:'Complete'},{status:'Done'}]}
                        //data defined in constructor
                        ItemSeparatorComponent={() => <SeparatorComponent />}
                        //Item Separator View
                        renderItem={({item}) => <OrderListComponents status={item.status} />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        </View>

    )
}

export default Orders;