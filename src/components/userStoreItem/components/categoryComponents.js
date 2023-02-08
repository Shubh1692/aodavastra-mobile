import React, { useState } from 'react';
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


function CategoryComponents({ isCreator }) {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <ImageBackground style={styles.imageBg} source={require('../../../assets/images/p2.png')} resizeMode="cover" >
            <View style={styles.container}>
                {isCreator && <View style={{ position: 'absolute', right: 8, top: 8, }}>
                    <Menu >
                        <MenuTrigger
                            customStyles={{
                                triggerWrapper: styles.triggerWrapper,
                            }}
                        >
                            <MenuIcon />
                        </MenuTrigger>
                        <MenuOptions optionsContainerStyle={styles.optionsContainer} >
                            <MenuOption onSelect={() => alert(`Save`)} style={styles.saveOption}  >
                                <View style={styles.optionsSubContainer}>
                                    <EditPencilIcon />
                                    <Text style={styles.optionsText}>Edit</Text>
                                </View>
                            </MenuOption>
                            <MenuOption onSelect={() => alert(`Delete`)} style={styles.deleteOption} >
                                <View style={styles.optionsSubContainer}>
                                    <DeleteIcon />
                                    <Text style={styles.optionsText}>Remove</Text>
                                </View>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </View>}
                <Text style={styles.categoryItems}>(166 Items)</Text>
                <Text style={styles.categoryTitle}>Jewellry</Text>
            </View>
        </ImageBackground>
    )
}

export default CategoryComponents;

const styles = StyleSheet.create({
    imageBg: {
        width: deviceWidth,
        height: 200,
        marginBottom: 12,
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: deviceWidth,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    triggerWrapper: {
        top: 0,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        height: 28
    },
    optionsContainer: {
        width: 100
    },
    saveOption: {
        paddingVertical: 4,
        height: 30,
        borderBottomWidth: 0.7,
        borderBottomColor: 'rgba(173, 173, 173, 0.38)',
    },
    deleteOption: {
        paddingVertical: 4,
        height: 30,
    },
    optionsSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionsText: {
        fontSize: 15,
        fontWeight: '400',
        marginLeft: 5
    },
    categoryItems: {
        fontSize: 14,
        fontWeight: '500',
        color: theme.Purple
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: theme.White,
        textTransform: 'uppercase',
        paddingTop: 5
    },
});