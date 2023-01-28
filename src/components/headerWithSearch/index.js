import React from 'react';
import { Appbar, Text, } from 'react-native-paper';
import { Image, View } from 'react-native';
import SearchComponent from '../searchInput';
import SearchIcon from '../../assets/svg/search.svg';
import Logo from '../../assets/images/logo2.png';
import theme from '../../theme/resources';
import { goBack } from '../../services/NavigationService';




function HeaderWithSearch({ title , isBack = true }) {

    function handleLogout() {
        console.log("hiii logout")
    }

    return (
        <Appbar.Header style={{ backgroundColor: '#fff' }} >
            <Appbar.BackAction onPress={() => goBack()} />
            <Appbar.Content title={title}style={{ alignItems: 'center' }} />
            <SearchIcon style={{ marginRight: 10}} onPress={() => console.log('hii')} />
            {/* <SearchComponent clampedScroll={clampedScroll} /> */}
        </Appbar.Header>
    )
}


export default HeaderWithSearch;
