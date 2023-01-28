import React from 'react';
import { Animated, StyleSheet, TextInput, View } from 'react-native';
import { deviceWidth } from '../../utils/device';
import CloseIcon from '../../assets/svg/close.svg';
import SearchIcon from '../../assets/svg/search.svg';


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
      <View style={{flexDirection:'row',backgroundColor: '#EDEDED',borderRadius:4,alignItems:'center',width:'95%',marginRight:10}}>
        <SearchIcon style={{marginLeft:4}} onPress={() => console.log('hii')}/>
        <TextInput
          placeholder='Search'
          style={styles.formField}
          placeholderTextColor={'#888888'}
        />
      </View>
      <View style={{ marginLeft: 10 }}>
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
  formField: {
    borderWidth: 1,
    // padding: 12,
    fontSize: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 4,
    borderColor: '#EDEDED',
    backgroundColor: '#EDEDED',
    fontSize: 18,
    width: '95%',
    height: 40
  }
})

export default SearchComponent;