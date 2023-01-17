import React, { useState } from 'react';
import { Appbar, } from 'react-native-paper';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import ProfileImage from '../../../components/profileImage';
import theme from '../../../theme/resources';
import Title from '../../../components/title';
import Button from '../../../components/button';

const dummyArray = [
    { id: '1', value: 'Ahasgjagsgashjghgashjdjhgashjdgjgsajdgjgajsdgjgsajgjasgjhdhjjsahjgdjhasj' },
    { id: '2', value: 'In a world where you can be a king... ' },
    { id: '3', value: 'In a world where you can be a king... ' },
    { id: '4', value: 'In a world where you can be a king... ' },
    { id: '5', value: 'In a world where you can be a king... ' }
];


function FollowingList() {
    const [listItems, setListItems] = useState(dummyArray);

    const ItemView = ({ item }) => {
        return (
            <View style={styles.itemSection}>
                <ProfileImage size={56} />
                <View style={styles.contentSection}>
                    <View style={styles.titleSection}>
                        <View style={styles.innerTitleSection}>
                            <Title name="Sonali" />
                        </View>
                        <Button mode="contained" textStyle={styles.btnTextStyle} style={styles.btnStyle}>Unfollow</Button>
                    </View>
                    <View style={styles.descSection}>
                        <Text numberOfLines={1} style={styles.item}>
                            {item.value}
                        </Text>
                    </View>
                </View>
            </View>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // FlatList Item Separator
            <View
                style={styles.separator}
            />
        );
    };
    const getItem = (item) => {
        //Function for click on an item
        alert('Id: ' + item.id + ' Value: ' + item.value);
    };
    return (
        <View>
            <Appbar.Header style={{ backgroundColor: '#fff' }} >
                <Appbar.BackAction onPress={() => console.log('back')} />
                <Appbar.Content title="Following" style={{ alignItems: 'center' }} />
            </Appbar.Header>

            <View style={{ marginTop: '4%' }}>
                <FlatList
                    data={listItems}
                    //data defined in constructor
                    ItemSeparatorComponent={ItemSeparatorView}
                    //Item Separator View
                    renderItem={ItemView}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}

export default FollowingList;