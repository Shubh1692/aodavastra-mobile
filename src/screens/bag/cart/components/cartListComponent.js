import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardComponent from '../../../../components/card';
import theme from '../../../../theme/resources';
import styles from './../styles';
import FastImage from 'react-native-fast-image';
import Button from '../../../../components/button';
import Title from "../../../../components/title";
import DownArrow from "../../../../assets/images/DownArrow.svg"

function CartListComponents({ item, isCart, navigation }) {
    return (
        <View style={{
            backgroundColor: theme.background,
            padding: '2%',
            marginTop: '2%',
        }}>
            <View style={{
                width: '100%',
                position: 'relative',
            }}>
                <View style={{
                flexDirection: 'row',
                width: '100%',
                position: 'relative',
            }}>
                <FastImage style={{
                    width: 110,
                    height: 150
                }} source={require('../../../../assets/images/p1.png')} />
                <View style={{
                    flexDirection: 'column',
                    width: '70%',

                }}>
                    <View style={{
                        width: '90%',
                    }}>
                        <Title numberOfLines={2} name="American Diamond Bangles" />
                        <View style={{
                            marginLeft: '4%',
                            marginTop: '2%',
                            width: '35%',
                            backgroundColor: theme.Peach,
                            padding: '4%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{ color: theme.TextBlack }}>Qty: 1</Text>
                            <DownArrow />
                        </View>
                        <View style={{
                            marginLeft: '4%',
                            marginTop: '4%'
                        }}>
                            <Text style={{ color: theme.TextBlack }}>₹ 999.00</Text>
                        </View>
                    </View>

                </View>
            </View>
            {isCart && <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    position: 'relative',
                    marginTop: 4,
                    alignItems: 'center', 
                }}>
                    <Button mode="text" textStyle={[{
                        color: theme.TextBlack,
                        fontSize: 10,
                    }, { lineHeight: 14 }]} style={{ width: 110, height: 32, paddingVertical: 0, marginVertical: 0 }} onPress={() => console.log('hii')}>Remove</Button>
                    <View style={{width: 1, height: "70%", backgroundColor: theme.TextBlack}}/>
                    <Button mode="text" textStyle={{ color: theme.TextBlack, fontSize: 10, lineHeight: 14 }} style={{ width: '65%',height: 32, paddingVertical: 0, marginVertical: 0 }} onPress={() => console.log('hii')}>Move to Wishlist</Button>
                </View>}
            </View>
        </View>
    )
}

export default CartListComponents;