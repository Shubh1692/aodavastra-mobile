import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper';
import { navigate } from "../../services/NavigationService";
import theme from "../../theme/resources";
import Icon from '../icon'


function SquareCard({ imageUrl, title, count, isCount = false,url }) {

    return (
        //
            <Card onPress={() => navigate(url)} style={styles.cardContainer}>
                <Card.Content>
                    <View style={styles.imageContainer}>
                        <Image source={imageUrl} style={styles.image} resizeMode={'contain'} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleTextStyle}>{title}</Text>
                        {isCount && <Text style={styles.countTextStyle}>({count})</Text>}
                    </View>
                </Card.Content>
            </Card>
    )
}

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
    image: {
        width: 70, 
        height: 50
    },
    titleTextStyle: {
        fontFamily: theme.Poppins.regular, 
        fontSize: 16
    },
    countTextStyle: {
        fontFamily: theme.Poppins.regular, 
        fontWeight: '700', 
        paddingLeft: 5
    }
})

export default SquareCard;