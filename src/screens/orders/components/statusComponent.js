import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import theme from '../../../theme/resources';

function StatusComponent({ status }) {
    return (
        <>
            {/* Status Section Double Done */}
            {status == 'Complete' && <View style={{ backgroundColor: theme.lightPurple, height: 24, paddingVertical: 5, width: 100, borderRadius: 45, alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ backgroundColor: theme.White, width: 18, height: 18, borderRadius: 90, marginLeft: 4, alignItems: 'center', justifyContent: 'center' }}>
                    <FastImage source={require('../../../assets/images/doubleDone.png')} style={{ width: 12, height: 12 }} resizeMode="contain" />
                </View>
                <View style={{ paddingLeft: 6 }}>
                    <Text style={{ fontSize: 11, fontWeight: '400', color: theme.Primary }}>Delivered</Text>
                </View>
            </View>}
            {/* Single Done */}
            {status == 'Done' &&
                <View style={{ backgroundColor: theme.lightPurple, height: 24, paddingVertical: 5, width: 100, borderRadius: 45, alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ backgroundColor: theme.White, width: 18, height: 18, borderRadius: 90, marginLeft: 4, alignItems: 'center', justifyContent: 'center' }}>
                        <FastImage source={require('../../../assets/images/done.png')} style={{ width: 10, height: 10 }} />
                    </View>
                    <View style={{ paddingLeft: 6 }}>
                        <Text style={{ fontSize: 11, fontWeight: '400', color: theme.Primary }}>Ordered</Text>
                    </View>
                </View>}
            {/* Cancel  */}
            {status == 'Cancel' &&
                <View style={{ backgroundColor: theme.lightOrange, height: 24, paddingVertical: 5, width: 100, borderRadius: 45, alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ backgroundColor: theme.White, width: 18, height: 18, borderRadius: 90, marginLeft: 4, alignItems: 'center', justifyContent: 'center' }}>
                        <FastImage source={require('../../../assets/images/close.png')} style={{ width: 10, height: 10 }} />
                    </View>
                    <View style={{ paddingLeft: 6 }}>
                        <Text style={{ fontSize: 11, fontWeight: '400', color: theme.orange }}>Cancelled</Text>
                    </View>
                </View>}
        </>
    )

}

export default StatusComponent;