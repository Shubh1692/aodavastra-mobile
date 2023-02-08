import * as React from 'react';
import { Card, IconButton, Colors } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';

function CardComponent({ children, cardStyle }) {
    return (
        <View style={[styles.container]}>
            <Card style={cardStyle}>
                {children}
            </Card>
        </View>
    )
}

export default CardComponent;

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
});