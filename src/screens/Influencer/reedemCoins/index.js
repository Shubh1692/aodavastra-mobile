import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Container from '../../../components/container';
import Header from '../../../components/header';
import MainContainer from '../../../components/mainContainer';
import Title from '../../../components/title';
import CardComponent from '../../../components/card';
import theme from '../../../theme/resources';
import FastImage from 'react-native-fast-image';
import { Chip } from 'react-native-paper';
import SeparatorComponent from '../../../components/Separator';
import OffersComponents from './components/offersComponents';

import CheckOutComponents from './components/checkoutComponents';
import TextWithUnderline from '../../../components/textWithUnderline';
import { navigate } from '../../../services/NavigationService';
import BottomSheet from '../../../components/bottomSheet';
import CashOnDeliveryIcon from '../../../assets/svg/cash-on-delivery.svg';


function ReedemCoins() {
    const [isCongrtsVisible, setIsCongrtsVisible] = useState(false)

    const handleCongrtes = () => {
        setIsCongrtsVisible(!isCongrtsVisible);
    }
    return (
        <>
            <MainContainer>
                <Header />
                <Container>
                    <Title name={'Popular offers'} />
                    <View style={{ height: 200 }}>
                        <FlatList
                            horizontal
                            data={[1, 2, 3, 4, 5, 6]}
                            style={{ flex: 2, height: 200 }}
                            contentContainerStyle={{ height: 200 }}
                            ItemSeparatorComponent={() => <View style={{ marginHorizontal: 6 }} />}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={() => <TouchableOpacity activeOpacity={0.7} onPress={handleCongrtes}><OffersComponents /></TouchableOpacity>}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View style={{ flex: 1, }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Title name={'Cashout'} />
                            <TextWithUnderline title="Bank Details" onPress={() => navigate('bankDeatils')} />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <FlatList
                                data={[1, 2, 3, 4, 5, 6]}
                                contentContainerStyle={{ paddingBottom: 90 }}
                                ItemSeparatorComponent={() => <SeparatorComponent />}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={() => <TouchableOpacity activeOpacity={0.7} onPress={handleCongrtes}><CheckOutComponents /></TouchableOpacity>}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>

                </Container>
            </MainContainer>
            {isCongrtsVisible &&
                <BottomSheet bottomSheetHeigh={'50%'} title={"Congratulations!"} setIsSettingIcon={setIsCongrtsVisible} actionHandler={handleCongrtes} >
                    <View style={{ marginTop: '5%', flex: 1,alignItems:'center' }}>
                        <View style={{  flex: 1, alignItems:'center'}}>
                            <CashOnDeliveryIcon />
                            <View style={{marginHorizontal:28,marginTop:10,}}>
                                <Text style={{textAlign:'center',fontSize:14}}>We have processed the transaction request in your <Text style={{color: theme.Purple}}>Account Number: XXXX XXXX XXXX 8099.</Text> You will receive your payment shortly!</Text>
                            </View>
                        </View>
                    </View>
                </BottomSheet>}
        </>
    )
}

export default ReedemCoins;