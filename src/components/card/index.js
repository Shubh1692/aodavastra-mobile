import * as React from 'react';
import { Card, IconButton, Colors } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';

function CardComponent({ children,cardStyle }) {
    return (
        <View style={[{ marginTop: 10 }]}>
            <Card  style={cardStyle}>
                {children}
            </Card>
        </View>
    )
}

export default CardComponent;