import React, { useState } from 'react';
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
import EmptyAddress from '../addressList/components/emptyAddressList';
import FloatingButton from '../../../components/button/floatingButton';
import MainContainer from '../../../components/mainContainer';


function AddressList() {
    const [addressList, setAddressList] = useState([1,2,])

    return (
        <MainContainer style={{ flex: 1, }}>
            <Header />
            {addressList.length > 0 &&
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
                        <View style={{ flex: 1}}>
                            <FlatList
                                data={addressList}
                                contentContainerStyle={{ paddingBottom: 90 }}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                ItemSeparatorComponent={() => <SeparatorComponent />}
                                renderItem={() => <AddressListComponent />}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
                </View>}
            {addressList.length == 0 && <EmptyAddress />}
            <FloatingButton title={'Add Address'} onPress={() => navigate('addAddress')}  />
        </MainContainer>)
}

export default AddressList;