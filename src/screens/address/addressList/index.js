import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Header from '../../../components/header';
import theme from '../../../theme/resources';
import CardComponent from '../../../components/card';
import Button from '../../../components/button';
import LineDivider from '../../../components/lineDivider';
import styles from './styles';
import AddressListComponent from './components/addressListComponents';
import SeparatorComponent from '../../../components/Separator';
import { navigate } from '../../../services/NavigationService';


function AddressList() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.subConatiner}>
                <View>
                    <Text style={styles.heading}>Default Address</Text>
                </View>
                <View>
                    <AddressListComponent />
                </View>
                <View style={styles.headingContainer}>
                    <View style={styles.headingSubContainer}>
                        <Text style={styles.heading}>Other Addresses</Text>
                    </View>
                    <View style={styles.container}>
                        <FlatList
                            data={[1, 2, 3]}
                            contentContainerStyle={styles.contentContainer}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={() => <SeparatorComponent />}
                            renderItem={() => <AddressListComponent />}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>

                </View>

            </View>
            <View style={styles.buttonContanier}>
                <Button mode="contained" style={styles.addAddressButton} textStyle={{ lineHeight: 22 }} onPress={() => navigate('addAddress')} >Add Address</Button>
            </View>
        </View>)
}

export default AddressList;