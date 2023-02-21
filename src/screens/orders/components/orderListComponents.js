import React from 'react';
import { View, Text } from 'react-native';
import CardComponent from '../../../components/card';
import Header from '../../../components/header';
import theme from '../../../theme/resources';
import LineDivider from '../../../components/lineDivider';
import Icon from '../../../components/icon';
import styles from '../styles';
import FastImage from 'react-native-fast-image';
import StatusComponent from './statusComponent';
import { navigate } from '../../../services/NavigationService';


function OrderListComponents({ status = 'Complete' }) {
    return (
        <CardComponent style={{backgroundColor:theme.background}}>
            <View style={styles.cardSection}>
                {/* Header */}
                <View style={styles.headerSection}>
                    <Text style={styles.headerTitle}>02 March 2020</Text>
                    <Text style={styles.headerTitle}>07 : 30 PM</Text>
                </View>
                <View style={{ paddingVertical: '2%', paddingHorizontal: '2%' }}>
                    <Text style={{ fontSize: 14, color: theme.gray }}>#133589</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '1.3%', paddingBottom: '1%' }}>
                        <Text style={{ color: theme.TextBlack }}>₹ 3,099.00</Text>
                        <Text style={{ color: theme.TextBlack }}>2 Items</Text>
                    </View>
                    <LineDivider />
                    {/* Address Section */}
                    <View style={{ paddingTop: '1%' }}>
                        <Text style={{ fontSize: 12, fontWeight: '600' }}>Address</Text>
                        <View style={{ backgroundColor: theme.White, borderRadius: 6, marginTop: '1%' }}>
                            <View style={styles.titleSection}>
                                <Text style={styles.titleText} numberOfLines={1}>Sukrut Patil </Text>
                                <Text numberOfLines={2} style={styles.addressText}>J2 303, Nyati Equatorial, Bavdhan, Pune - 411023 </Text>
                                <Text style={styles.titleText} numberOfLines={1}>9896927760 </Text>
                            </View>
                        </View>
                    </View>


                    <View style={{ paddingVertical: '2%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <StatusComponent status={status} />
                        <Text style={{ textDecorationLine: 'underline', color: theme.Purple, fontWeight: '600' }} onPress={() => navigate('orderDetails')}>View Details</Text>
                    </View>

                </View>
            </View>
        </CardComponent>
    )
}

export default OrderListComponents;