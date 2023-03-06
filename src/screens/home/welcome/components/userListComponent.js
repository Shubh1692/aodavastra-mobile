import React from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Card } from "react-native-paper";
import theme from "../../../../theme/resources";
import styles from "../styles";


function UserListComponents({ item }) {
    const productConfig = item
    console.log(productConfig)

    const postItems = [
        { id: 1, name: '../../../../assets/images/post456.png' },
        { id: 2, name: '../../../../assets/images/post456.png' },
        { id: 3, name: '../../../../assets/images/post456.png' },
        { id: 4, name: '../../../../assets/images/post456.png' },
        { id: 5, name: '../../../../assets/images/post456.png' },
        { id: 6, name: '../../../../assets/images/post456.png' },
    ]
    const post = postItems.slice(0, 6).map((_, index) => {
        return (
            <FastImage style={{ width: 43, height: 43 }} source={require('../../../../assets/images/post456.png')} resizeMode="cover" key={index} />
        )
    })

    return (
        <View style={styles.userListContainer}>
            <Card style={styles.userListCardStyle}>
                <View style={styles.userListSubContainer}>
                    <FastImage style={styles.userImgStyle} source={require('../../../../assets/images/demo_image.png')} />
                    <View style={styles.userTitleStyle}>
                        <Text style={styles.userNameStyle}>Anjali Verma</Text>
                    </View>
                    <View style={styles.postContainer}>
                        {post}
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <TouchableOpacity style={styles.btnFollow}>
                            <Text style={styles.btnFollowTextStyle}> Follow </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default UserListComponents;