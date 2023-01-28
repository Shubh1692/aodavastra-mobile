import React,{useState} from 'react';
import { View, Text, ImageBackground } from 'react-native';
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
        <ImageBackground style={{ width: deviceWidth, height: 200,marginBottom:12 }} source={require('../../../assets/images/p2.png')} resizeMode="cover" >
            <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', width: deviceWidth, height: 200, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                {isCreator && <View style={{ position: 'absolute', right: 8, top: 8, }}>
                    <Menu >
                        <MenuTrigger
                            customStyles={{
                                triggerWrapper: {
                                    top: 0,
                                    width: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 28
                                },
                            }}
                        >
                            <MenuIcon />
                        </MenuTrigger>
                        <MenuOptions optionsContainerStyle={{ width: 100 }} >
                            <MenuOption onSelect={() => alert(`Save`)} style={{ paddingVertical: 4, height: 30, borderBottomWidth: 0.7, borderBottomColor: 'rgba(173, 173, 173, 0.38)', }}  >
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <EditPencilIcon />
                                    <Text style={{ fontSize: 15, fontWeight: '400', marginLeft: 5 }}>Edit</Text>
                                </View>
                            </MenuOption>
                            <MenuOption onSelect={() => alert(`Delete`)} style={{ paddingVertical: 4, height: 30, }} >
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <DeleteIcon />
                                    <Text style={{ fontSize: 15, fontWeight: '400', marginLeft: 5 }}>Remove</Text>
                                </View>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </View>}
                <Text style={{ fontSize: 14, fontWeight: '500', color: theme.Purple }}>(166 Items)</Text>
                <Text style={{ fontSize: 16, fontWeight: '600', color: theme.White, textTransform: 'uppercase', paddingTop: 5 }}>Jewellry</Text>
            </View>
        </ImageBackground>
    )
}

export default CategoryComponents;