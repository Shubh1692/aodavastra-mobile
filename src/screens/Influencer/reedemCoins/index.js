import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
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

function ReedemCoins() {
    return (
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
                        renderItem={() => <OffersComponents />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={{ flex: 1,}}>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Title name={'Cashout'} />
                        <TextWithUnderline  title="Bank Details" onPress={() => navigate('bankDeatils')}/>
                        {/* <Text onPress={() => console.log("hii")} style={{ textAlign: 'right', color: theme.Purple, fontFamily: theme.Poppins.regular, fontWeight: '600', marginTop: '2%', textDecorationLine: 'underline' }}>Bank Details</Text> */}
                    </View>
                    <View style={{ alignItems: 'center'}}>
                        <FlatList
                            data={[1, 2, 3, 4, 5, 6]}
                            contentContainerStyle={{ paddingBottom: 90 }}
                            ItemSeparatorComponent={() => <SeparatorComponent />}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={() => <CheckOutComponents />}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>

            </Container>
        </MainContainer>
    )
}

export default ReedemCoins;