import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import MainContainer from '../../../components/mainContainer';
import Header from '../../../components/header';
import Container from '../../../components/container';
import PriceText from '../../../components/priceText';
import PaymentCard from '../../../components/paymentCard';
import Heading from '../../../components/heading';
import StatusComponent from '../components/statusComponent';
import theme from '../../../theme/resources';
import OrderDetailsSummaryComponent from '../components/orderDetailsSummaryComponent';
import OrderDetailComponent from '../components/orderDetailComponent';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import Title from '../../../components/title';
import PaymentInformationComponent from '../components/paymentInformationComponent';
import FloatingButton from '../../../components/button/floatingButton';
import AddressDetailComponent from '../components/addressDeatilsComponet';



function OrderDetails() {

    const [summaryItem, setSummaryItem] = useState([
        { title: 'Items: ', price: '999.00' },
        { title: 'Discount: ', price: '20.00' },
        { title: 'Handling & Shipping: ', price: '0.00' },
        { title: 'Total Before Tax: ', price: '999.00' },
        { title: 'Tax: ', price: '40.00' },
        { title: 'Order Total: ', price: '1039.00' },
    ])
    const [orderDetailsItem, setOrderDetailsItem] = useState([
        { title: 'Order Date: ', value: '18 February 2022', isPrice: false },
        { title: 'Total items:', value: '1 item(s)', isPrice: false },
        { title: 'Order total:', value: '999', isPrice: false },
    ])


    return (
        <MainContainer>
            <Header />
            <Container>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 90 }}
                >
                    {/* Order Details */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Heading title={'Order Details'} />
                        <StatusComponent status={'Complete'} />
                    </View>
                    <OrderDetailComponent orderDetailsItem={orderDetailsItem} />

                    {/* Payment Information */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '4%' }}>
                        <Heading title={'Payment Information'} />
                    </View>
                    <PaymentInformationComponent paymentType={'Card'} title={'Paid with HDFC card ending in 8109'} />


                    {/* Shipping Address */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '4%' }}>
                        <Heading title={'Shipping Address'} />
                    </View>
                    <AddressDetailComponent
                        firstName={'Aditya'}
                        lastName={'Sharma'}
                        address1={'Block 1, DivyaSree Omega,'}
                        address2={'Survey No. 13, Kondapur Village,'}
                        city={'Hyderabad'}
                        state={'Andhra Pradesh'}
                        pincode={'500001'}
                    />

                    {/* Shipment Details */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '4%' }}>
                        <Heading title={'Shipment Details'} />
                    </View>


                    <PaymentCard>
                        <View style={styles.cardSection}>
                            <View style={{ marginBottom: 8 }}>
                                <Title name="Processing" viewStyle={{ marginLeft: 0 }} textStyle={{ fontSize: 16, fontWeight: '600', lineHeight: 20 }} />
                                <Title name="Arriving by February 24, 2022" viewStyle={{ marginLeft: 0, marginTop: 0, lineHeight: 20 }} textStyle={{ fontSize: 14, color: theme.Purple }} />
                            </View>
                            <View style={styles.cardInnerSection}>
                                <FastImage style={styles.imgStyle} source={require('../../../assets/images/p1.png')} />
                                <View style={styles.contentSection}>
                                    <View style={styles.titleStyle}>
                                        <Title numberOfLines={2} name="American Diamond Bangles" />
                                        <View style={styles.priceStyle}>
                                            <Text style={{ color: theme.TextBlack }}>Qty:  1</Text>
                                        </View>
                                        <View style={styles.priceStyle}>
                                            <PriceText viewStyle={{ marginLeft: 0, marginTop: 0, alignItems: 'flex-start' }} price="999.00" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </PaymentCard>


                    {/* order summery */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Heading title={'Order Summary'} />
                    </View>
                    <OrderDetailsSummaryComponent setSummaryItem={setSummaryItem} summaryItem={summaryItem} />

                </ScrollView>
                <FloatingButton title={'Continue Shopping'} onPress={() => navigate('shopNow')} />
            </Container>
        </MainContainer>
    )
}

export default OrderDetails;