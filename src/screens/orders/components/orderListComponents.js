import React from 'react';
import { View, Text } from 'react-native';
import CardComponent from '../../../components/card';
import Header from '../../../components/header';
import theme from '../../../theme/resources';
import LineDivider from '../../../components/lineDivider';
import Icon from '../../../components/icon';
import styles from '../styles';
import FastImage from 'react-native-fast-image';


function OrderListComponents({status = 'Cancel'}) {
    return (
        <CardComponent>
            <View style={styles.cardSection}>
                {/* Header */}
                <View style={styles.headerSection}>
                    <Text style={styles.headerTitle}>02 March 2020</Text>
                    <Text style={styles.headerTitle}>07 : 30 PM</Text>
                </View>
                <View style={{ paddingVertical: '2%', paddingHorizontal: '2%' }}>
                    <Text style={{ fontFamily: theme.Poppins.regular,fontSize: 14, color: theme.gray }}>#133589</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '1.3%', paddingBottom: '1%' }}>
                        <Text style={{ color: theme.TextBlack }}>₹ 3,099.00</Text>
                        <Text style={{ color: theme.TextBlack }}>2 Items</Text>
                    </View>
                    <LineDivider />
                    {/* Address Section */}
                    <View style={{ paddingTop: '1%' }}>
                        <Text style={{ fontFamily: theme.Poppins.regular,fontSize: 12, fontWeight: '600' }}>Address</Text>
                        <View style={{ backgroundColor: theme.White, borderRadius: 6, marginTop: '1%' }}>
                            <View style={styles.titleSection}>
                                <Text style={styles.titleText} numberOfLines={1}>Sukrut Patil </Text>
                                <Text numberOfLines={2} style={styles.addressText}>J2 303, Nyati Equatorial, Bavdhan, Pune - 411023 </Text>
                                <Text style={styles.titleText} numberOfLines={1}>9896927760 </Text>
                            </View>
                        </View>
                    </View>
                    {/* Status Section Double Done */}

                    {status == 'Complete' &&  <View style={{ paddingVertical: '2%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ backgroundColor: theme.lightPurple, height: 24, paddingVertical: 5, width: 100, borderRadius: 45, alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ backgroundColor: theme.White, width: 18, height: 18, borderRadius: 90, marginLeft: 4, alignItems: 'center', justifyContent: 'center' }}>
                                <FastImage source={require('../../../assets/images/doubleDone.png')} style={{ width: 12, height: 12 }}  resizeMode="contain"/>
                            </View>
                            <View style={{ paddingLeft: 6 }}>
                                <Text style={{ fontFamily: theme.Poppins.regular,fontSize: 11, color: theme.Primary }}>Delivered</Text>
                            </View>
                        </View>
                        <Text style={{ textDecorationLine: 'underline', color: theme.Purple, fontFamily: theme.Poppins.regular,fontWeight: '600' }}>View Details</Text>
                    </View>}

                    {/* Single Done */}
                    {status == 'Done' && <View style={{ paddingVertical: '2%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ backgroundColor: theme.lightPurple, height: 24, paddingVertical: 5, width: 100, borderRadius: 45, alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ backgroundColor: theme.White, width: 18, height: 18, borderRadius: 90, marginLeft: 4, alignItems: 'center', justifyContent: 'center' }}>
                                <FastImage source={require('../../../assets/images/done.png')} style={{ width: 10, height: 10 }} />
                            </View>
                            <View style={{ paddingLeft: 6 }}>
                                <Text style={{ fontFamily: theme.Poppins.regular,fontSize: 11, color: theme.Primary }}>Ordered</Text>
                            </View>
                        </View>
                        <Text style={{ textDecorationLine: 'underline', color: theme.Purple, fontWeight: '600' }}>View Details</Text>
                    </View>}

                    {/* Cancel  */}
                    {status == 'Cancel' && <View style={{ paddingVertical: '2%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ backgroundColor: theme.lightOrange, height: 24, paddingVertical: 5, width: 100, borderRadius: 45, alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ backgroundColor: theme.White, width: 18, height: 18, borderRadius: 90, marginLeft: 4, alignItems: 'center', justifyContent: 'center' }}>
                                <FastImage source={require('../../../assets/images/close.png')} style={{ width: 10, height: 10 }} />
                            </View>
                            <View style={{ paddingLeft: 6 }}>
                                <Text style={{ fontFamily: theme.Poppins.regular,fontSize: 11, color: theme.orange }}>Cancelled</Text>
                            </View>
                        </View>
                        <Text style={{ textDecorationLine: 'underline', color: theme.Purple, fontFamily: theme.Poppins.regular,fontWeight: '600' }}>View Details</Text>
                    </View>}
                </View>
            </View>
        </CardComponent>
    )
}

export default OrderListComponents;