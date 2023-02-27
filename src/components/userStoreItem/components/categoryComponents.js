import React,{useState} from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import MenuIcon from '../../../assets/svg/menu.svg';
import EditPencilIcon from '../../../assets/svg/editPencil.svg';
import DeleteIcon from '../../../assets/svg/delete.svg';
import theme from '../../../theme/resources';
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from "react-native-popup-menu";
import FastImage from 'react-native-fast-image';
import { deviceWidth } from '../../../utils/device';


function CategoryComponents({isCreator}) {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <ImageBackground style={styles.backgroundContainer} source={require('../../../assets/images/p2.png')} resizeMode="cover" >
            <View style={styles.container}>
                {isCreator && <View style={styles.menuContainer}>
                    <Menu >
                        <MenuTrigger
                            customStyles={{
                                triggerWrapper: styles.triggerWrapper
                            }}
                        >
                            <MenuIcon />
                        </MenuTrigger>
                        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer} >
                            <MenuOption onSelect={() => alert(`Save`)} style={[styles.menuOptionStyle, { borderBottomWidth: 0.7, borderBottomColor: 'rgba(173, 173, 173, 0.38)', }]}  >
                                <View style={styles.menuOptionSubContainer}>
                                    <EditPencilIcon />
                                    <Text style={styles.menuOptionTextStyle}>Edit</Text>
                                </View>
                            </MenuOption>
                            <MenuOption onSelect={() => alert(`Delete`)} style={styles.menuOptionStyle} >
                                <View style={styles.menuOptionSubContainer}>
                                    <DeleteIcon />
                                    <Text style={styles.menuOptionTextStyle}>Remove</Text>
                                </View>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </View>}
                <Text style={styles.itemCountTextStyle}>(166 Items)</Text>
                <Text style={styles.titleStyle}>Jewellry</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundContainer: { 
        width: deviceWidth, 
        height: 200,
        marginBottom:12 
    },
    container: { 
        backgroundColor: 'rgba(0,0,0,0.6)', 
        width: deviceWidth, 
        height: 200, 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative' 
    },
    menuContainer: { 
        position: 'absolute', 
        right: 8, 
        top: 8, 
    },
    triggerWrapper: {
        top: 0,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        height: 28
    },
    menuOptionsContainer: {
        width: 100,
    },
    menuOptionStyle: {
        paddingVertical: 4, 
        height: 30,
    },
    menuOptionSubContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    menuOptionTextStyle: { 
        fontFamily: theme.Poppins.regular,
        fontSize: 15, 
        marginLeft: 5 
    },
    itemCountTextStyle: { 
        fontFamily: theme.Poppins.regular,
        fontSize: 14, 
        fontWeight: '500', 
        color: theme.Purple 
    },
    titleStyle: {
        fontFamily: theme.Poppins.regular,
        fontSize: 16, 
        fontWeight: '600', 
        color: theme.White, 
        textTransform: 'uppercase', 
        paddingTop: 5
    },
})
export default CategoryComponents;