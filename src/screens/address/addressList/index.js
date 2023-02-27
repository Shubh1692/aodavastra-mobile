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
        <MainContainer>
            <Header />
            {addressList.length > 0 &&
                <View style={styles.container}>
                    <View>
                        <Text style={styles.heading}>Default Address</Text>
                    </View>
                    <View>
                        <AddressListComponent />
                    </View>
                    <View style={styles.subContainer}>
                        <View style={{ paddingVertical: '2%' }}>
                            <Text style={styles.heading}>Other Addresses</Text>
                        </View>
                        <View style={styles.listContainer}>
                            <FlatList
                                data={addressList}
                                contentContainerStyle={styles.contentContainer}
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
            {/* <View style={{ paddingVertical: '3%', bottom: 20, alignItems: 'center', position: 'absolute', justifyContent: 'center', width: '100%' }}>
                <Button mode="contained" style={{ width: 200, height: 40, paddingVertical: 0 }} textStyle={{ lineHeight: 22 }} onPress={() => navigate('addAddress')} >Add Address</Button>
            </View> */}
        </MainContainer>)
}

export default AddressList;