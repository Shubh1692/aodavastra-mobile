import React from 'react';
import { Appbar, Text, } from 'react-native-paper';
import { Image, StyleSheet, View } from 'react-native';
import SearchComponent from '../searchInput';
import SearchIcon from '../../assets/svg/search.svg';
import Logo from '../../assets/images/logo2.png';
import theme from '../../theme/resources';
import { goBack } from '../../services/NavigationService';




function HeaderWithSearch({ title , isBack = true }) {

    function handleSearch() {
        console.log("hiii logout")
    }

    return (
        <Appbar.Header style={styles.appbarHeader} >
            <Appbar.BackAction onPress={() => goBack()} />
            <Appbar.Content title={title} style={styles.backContent} />
            <SearchIcon style={styles.searchIcon} onPress={() => {handleSearch}} />
            {/* <SearchComponent clampedScroll={clampedScroll} /> */}
        </Appbar.Header>
    )
}


export default HeaderWithSearch;

const styles = StyleSheet.create({
    appbarHeader: {
        backgroundColor: theme.White, 
    },
    backContent: {
        alignItems: 'center'
    },
    searchIcon: {
        marginRight: 10
    },
  });