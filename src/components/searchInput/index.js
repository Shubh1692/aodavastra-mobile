import React from 'react';
import { Animated, StyleSheet, TextInput, View } from 'react-native';
import { deviceWidth } from '../../utils/device';
import CloseIcon from '../../assets/svg/close.svg';
import SearchIcon from '../../assets/svg/search.svg';
import theme from '../../theme/resources';


const SearchComponent = ({ clampedScroll }) => {
  const searchBarTranslate = clampedScroll.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -(250)],
    extrapolate: 'clamp',
  });
  const searchBarOpacity = clampedScroll.interpolate({
    inputRange: [0, 10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View style={[
      styles.container,
      {
        transform: [
          {
            translateY: searchBarTranslate
          }
        ],
        opacity: searchBarOpacity,
      }
    ]}>
      <View style={styles.subContainer}>
        <SearchIcon style={styles.searchIcon} onPress={() => console.log('hii')}/>
        <TextInput
          placeholder='Search'
          style={styles.formField}
          placeholderTextColor={theme.textPlaceholder}
        />
      </View>
      <View style={styles.closeIconContainer}>
        <CloseIcon />
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: deviceWidth - 60,
    left: 20,
    zIndex: 99,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  subContainer: {
    flexDirection:'row',
    backgroundColor: theme.searchBarBackgorund,
    borderRadius:4,
    alignItems:'center',
    width:'95%',
    marginRight:10
  },
  searchIcon: {
    marginLeft:4
  },
  formField: {
    borderWidth: 1,
    // padding: 12,
    fontFamily: theme.Poppins.regular,
    fontSize: 12,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 4,
    borderColor: theme.searchBarBackgorund,
    backgroundColor: theme.searchBarBackgorund,
    width: '95%',
    height: 40,
    color: theme.TextBlack
  },
  closeIconContainer: {
    marginLeft:10
  },
})

export default SearchComponent;