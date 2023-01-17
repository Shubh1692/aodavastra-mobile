import React from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper';
import { navigate } from "../../services/NavigationService";
import Icon from '../icon'


function SquareCard({ imageUrl, title, count, isCount = false,url }) {

    return (
        //
            <Card onPress={() => navigate(url)} style={{ width: '46%', height: 130, borderRadius: 4, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Card.Content>
                    <View style={{ alignItems: 'center', }}>
                        <Image source={imageUrl} style={{ width: 70, height: 50 }} resizeMode={'contain'} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{fontSize: 16}}>{title}</Text>
                        {isCount && <Text style={{ fontWeight: '700', paddingLeft: 5 }}>({count})</Text>}
                    </View>
                </Card.Content>
            </Card>
    )
}

export default SquareCard;