import React from "react";
import { View, Text, Image,FlatList } from 'react-native';
import Header from '../../components/header';
import CardComponent from '../../components/card';
import FastImage from 'react-native-fast-image';
import theme from "../../theme/resources";
import Title from "../../components/title";
import Button from '../../components/button';
import styles from './styles';
import WishlistComponents from './components/wishlistComponent';
import SeparatorComponent from '../../components/Separator';

const  listItems =[
    { id:1, title:'1'}, 
    { id:2, title:'2'},

]

function Wishlist() {
    const ItemSeparatorView = () => {
        return (
            // FlatList Item Separator
            <View
                style={styles.separator}
            />
        );
    };
    return (
        <View style={{flex:1}}>
            <Header />
            <View style={{ marginTop: '8%', marginHorizontal: '4%',flex:1 }}>
                <Text>Showing 1 item(s) in wishlist:</Text>

                <View style={{flex:1}}>
                    <FlatList
                        data={listItems}
                        //data defined in constructor
                        ItemSeparatorComponent={() => <SeparatorComponent/>}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        //Item Separator View
                        renderItem={() => <WishlistComponents />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        </View>
    )
}

export default Wishlist;