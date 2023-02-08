import React from 'react';
import { Appbar, Text, } from 'react-native-paper';
import { Image, View, StyleSheet } from 'react-native';
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
        <Appbar.Header style={styles.appBarHeader} >
            <Appbar.BackAction onPress={() => goBack()} />
            <Appbar.Content title={title}style={styles.appBarContent} />
            <SearchIcon style={styles.searchIcon} onPress={() => console.log('hii')} />
            {/* <SearchComponent clampedScroll={clampedScroll} /> */}
        </Appbar.Header>
    )
}

export default HeaderWithSearch;

const styles = StyleSheet.create({
    appBarHeader: {
        backgroundColor: theme.White
    },
    appBarContent: {
        alignItems: 'center'
    },
    searchIcon: {
        marginRight: 10
    },
});