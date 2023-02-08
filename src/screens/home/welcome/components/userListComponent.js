import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Card } from "react-native-paper";
import theme from "../../../../theme/resources";
import styles from "../styles";


function UserListComponents({item}) {
    const productConfig = item
    console.log(productConfig)

    const  postItems =[
        {id:1, name:'../../../../assets/images/post456.png'},
        {id:2, name:'../../../../assets/images/post456.png'},
        {id:3, name:'../../../../assets/images/post456.png'},
        {id:4, name:'../../../../assets/images/post456.png'},
        {id:5, name:'../../../../assets/images/post456.png'},
        {id:6, name:'../../../../assets/images/post456.png'},
    ]
    const post = postItems.slice(0,6).map((_, index) => {
        return(
            <FastImage style={{ width: 43, height: 43 }} source={require('../../../../assets/images/post456.png')} resizeMode="cover" key={index}/>
        )
    })

    return (
        <View style={{ marginTop: 10, padding: 10 }}>
            <Card style={{backgroundColor: theme.background,  paddingVertical: '8%', width: 139,height:224}}>
                <View style={{
                    flexDirection: 'column',
                    // width: '100%',
                    position: 'relative',
                    alignItems: 'center',
                    paddingVertical: 7,
                }}>
                    <FastImage style={styles.userImgStyle} source={require('../../../../assets/images/demo_image.png')} />
                    <View style={styles.userTitleStyle}>
                        <Text style={{ color: theme.textGrey, fontSize: 8, fontFamily: 'Poppins-Regular',}}>Anjali Verma</Text>
                    </View>
                    <View style={{  flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
                        {post}
                    </View>
                    <View style={{ marginTop:8}}>
                        <TouchableOpacity style={{ backgroundColor: theme.Purple, width: 120, height: 29, alignItems: 'center', justifyContent: 'center', borderRadius: 5,}}>
                            <Text style={{ fontSize: 10, fontFamily: 'Poppins-Bold', alignItems: 'center', color: theme.White,}}> Follow </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default UserListComponents;