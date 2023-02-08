import React, { useState } from 'react';
import { Appbar, Searchbar,  } from 'react-native-paper';
import { View, Text, FlatList,Animated, StyleSheet } from 'react-native';
import styles from './styles';
import ProfileImage from '../../../components/profileImage';
import theme from '../../../theme/resources';
import Title from '../../../components/title';
import Button from '../../../components/button';
import { goBack } from '../../../services/NavigationService';
import SeparatorComponent from '../../../components/Separator';
import HeaderWithSearch from '../../../components/headerWithSearch';




const dummyArray = [
    { id: '1', value: 'In a world where you can be a king...' },
    { id: '2', value: 'In a world where you can be a king... ' },
    { id: '3', value: 'In a world where you can be a king... ' },
    { id: '4', value: 'In a world where you can be a king... ' },
    { id: '5', value: 'In a world where you can be a king... ' }
];


function TagPeopleList() {
    const [listItems, setListItems] = useState(dummyArray);
    const [searchQuery, setSearchQuery] = useState('');
    const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));

    const onChangeSearch = query => setSearchQuery(query);

    const clampedScroll = Animated.diffClamp(
        Animated.add(
          scrollYValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: 'clamp',
          }),
          new Animated.Value(0),
        ),
        0,
        50,
      )

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
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            
            <HeaderWithSearch title={"Tag People"} />
            <View style={{ marginTop: '4%', flex: 1 }}>
                <FlatList
                    data={listItems}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    //data defined in constructor
                    ItemSeparatorComponent={() => <SeparatorComponent />}
                    //Item Separator View
                    renderItem={ItemView}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}

export default TagPeopleList;