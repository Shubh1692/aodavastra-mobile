import React from "react";
import { View, Image, Text, TouchableOpacity,StyleSheet } from 'react-native'
import { Card } from 'react-native-paper';
import { navigate } from "../../services/NavigationService";
import Icon from '../icon'


function SquareCard({ imageUrl, title, count, isCount = false, url }) {

    return (
        <Card onPress={() => navigate(url)} style={styles.cardContainer}>
            <Card.Content>
                <View style={styles.imageContainer}>
                    <Image source={imageUrl} style={styles.image} resizeMode={'contain'} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titleStyle}>{title}</Text>
                    {isCount && <Text style={styles.textStyle}>({count})</Text>}
                </View>
            </Card.Content>
        </Card>
    )
}

export default SquareCard;

const styles = StyleSheet.create({
    cardContainer: {
        width: '46%',
        height: 130,
        borderRadius: 4,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 50
    },
    textContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    titleStyle: {
        fontSize: 16
    },
    textStyle: {
        fontWeight: '700',
        paddingLeft: 5
    }
});