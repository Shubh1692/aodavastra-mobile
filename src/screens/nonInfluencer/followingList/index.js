import React, { useState } from 'react';
import { Appbar, } from 'react-native-paper';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import ProfileImage from '../../../components/profileImage';
import theme from '../../../theme/resources';
import Title from '../../../components/title';
import Button from '../../../components/button';
import { goBack } from '../../../services/NavigationService';

const dummyArray = [
    { id: '1', value: 'In a world where you can be a king...' },
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
                <ProfileImage size={72} />
                <View style={styles.contentSection}>
                    <View style={styles.titleSection}>
                        <View style={styles.innerTitleSection}>
                            <Title name="Sonali" />
                            <View style={styles.descSection}>
                                <Text numberOfLines={2} style={styles.item}>
                                    {item.value}
                                </Text>
                            </View>
                        </View>
                        <Button mode="contained" onPress={() => console.log('hiii')} textStyle={styles.btnTextStyle} style={styles.btnStyle}>Unfollow</Button>
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
        <View style={{flex:1}}>
            <Appbar.Header style={{ backgroundColor: '#fff' }} >
                <Appbar.BackAction onPress={() => goBack()} />
                <Appbar.Content title="Following" style={{ alignItems: 'center' }} />
            </Appbar.Header>

            <View style={{ marginTop: '4%',flex:1 }}>
                <FlatList
                    data={listItems}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
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