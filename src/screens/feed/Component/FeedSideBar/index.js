import React, {useContext} from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppImages} from '../../constantData/AppImages';
import {deviceWidth} from '../../../../utils/device';

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
  },
  sideBar: {
    width: 80,
    position: 'absolute',
    zIndex: 1000,
    // height:50,
    right: 0,
    borderColor:'red',
    borderWidth:5,
    alignItems: 'center',
    // bottom:150
  },
  iconOuter: {
    marginVertical: 8,
    position:'relative',
    borderColor:'black',
    borderWidth:5,
  },
  center: {
    alignItems: 'center',
  },
  imageOuter: {
   width:deviceWidth,
    justifyContent: 'center',
  },
});

const RenderIcon = ({obj, onPress, exStyle = {}}) => {
  const {iconOuter, center, icon, text} = styles;
  const {type, imageIcon, size = 30, disText} = obj;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onPress(type)}
      style={iconOuter}>
      <View styles={center}>
        <Image
          source={imageIcon}
          style={[
            icon,
            {
              height: size,
              width: size,
              tintColor: '#18191C',
            },
            exStyle,
          ]}
          resizeMode={'contain'}
        />
        {(disText && (
          <Text style={[text, {color: '#18191C'}]}>{`${disText}`}</Text>
        )) ||
          null}
      </View>
    </TouchableOpacity>
  );
};

const FeedSideBar = ({item, animation}) => {
  const insets = useSafeAreaInsets();
  const {sideBar} = styles;
  const {like, comment, likeStatus} = item;

  const makeAction = async type => {
    // Here perfom feed action based on Type
  };

  return (
    <Animated.View
      style={[
        sideBar,
        {
          bottom: insets.bottom + 10  ,
        },
        animation,
      ]}>
      <RenderIcon
        obj={{
          imageIcon: AppImages.heart,
          disText: like,
          size: 35,
          type: 'Like',
        }}
        exStyle={{tintColor: (likeStatus && 'red') || '#18191C'}}
        onPress={makeAction}
      />
      <RenderIcon
        obj={{imageIcon: AppImages.comment, disText: comment, type: 'Comment'}}
        onPress={makeAction}
      />
      <RenderIcon
        obj={{imageIcon: AppImages.share, type: 'Share'}}
        onPress={makeAction}
      />
      <RenderIcon
        obj={{imageIcon: AppImages.more, size: 35, type: 'More'}}
        onPress={makeAction}
      />
    </Animated.View>
  );
};

export {FeedSideBar};
