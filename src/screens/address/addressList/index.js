import React from 'react';
import { View, Text, FlatList } from 'react-native';
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
        <View style={{ flex: 1, }}>
            <Header />
            <View style={{ marginTop: '8%', marginHorizontal: '4%', flex: 1 }}>
                <View>
                    <Text style={styles.heading}>Default Address</Text>
                </View>
                <View>
                    <AddressListComponent />
                </View>
                <View style={{ marginTop: '4%', flex: 1 }}>
                    <View style={{ paddingVertical: '2%' }}>
                        <Text style={styles.heading}>Other Addresses</Text>
                    </View>
                    <View style={{ flex: 1, }}>
                        <FlatList
                            data={[1, 2, 3]}
                            contentContainerStyle={{paddingBottom:90}}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={() => <SeparatorComponent />}
                            renderItem={() => <AddressListComponent />}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>

                </View>

            </View>
            <View style={{ paddingVertical: '3%', bottom: 20, alignItems: 'center', position: 'absolute', justifyContent: 'center', width: '100%' }}>
                <Button mode="contained" style={{ width: 200, height: 40, paddingVertical: 0 }} textStyle={{ lineHeight: 22 }} onPress={() => navigate('addAddress')} >Add Address</Button>
            </View>
        </View>)
}

export default AddressList;