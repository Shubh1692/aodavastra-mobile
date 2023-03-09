import React, { useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  Animated,
  Image,
} from 'react-native';
import {deviceWidth,deviceHeight} from '../../../../utils/device';
import {AppImages} from '../../constantData/AppImages';
import CommonStyle from '../../CommonStyle';

const styles = StyleSheet.create({
  outer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 5,
    minWidth: 100,
    ...CommonStyle.center,
  },
  dot: {
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  followText: {
    fontSize: 13,
    paddingRight: 10,
    paddingLeft: 2,
    paddingVertical: 8,
    fontWeight: 'bold',
  },
  touchArea: {
    width:deviceWidth,
    height: deviceHeight / 2,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  muteBtn: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mute: {
    height: 20,
    width: 20,
  },
});

const ButtonComponent = props => {
  const {title, onPress, style, border, backColor, textColor, isProcessing} =
    props;
  const {outer} = styles;
  return (
    <TouchableOpacity onPress={onPress} disabled={isProcessing}>
      <View
        style={[
          outer,
          {
            backgroundColor: backColor,
            borderColor: border || '#3a3a3c',
          },
          style,
        ]}>
        {(!isProcessing && (
          <Text style={{color: textColor || '#18191C'}}>{title}</Text>
        )) || <ActivityIndicator color={textColor || '#18191C'} />}
      </View>
    </TouchableOpacity>
  );
};

const FollowButton = ({onPress, text = 'Follow', exStyle = {}}) => {
  const {dot, followText} = styles;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={CommonStyle.row}>
        <Text style={[dot, {color: '#18191C'}]}>.</Text>
        <Text style={[followText, exStyle, {color: '#18191C'}]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const VolumeButton = () => {
    const [isMute, setIsMute] = useState(true);
  const [viewAnim] = useState(new Animated.Value(0));

  const onVolumePress = () => {
    setIsMute(!isMute);
    Animated.timing(viewAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      fadeOut();
    });
  };

  const fadeOut = () => {
    Animated.timing(viewAnim, {
      delay: 500,
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onVolumePress}
      style={styles.touchArea}>
      <Animated.View
        style={[
          styles.muteBtn,
          {
            opacity: viewAnim,
          },
        ]}>
        <Image
          source={(isMute && AppImages.mute) || AppImages.volume}
          style={styles.mute}
          resizeMode="contain"
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export {ButtonComponent, FollowButton, VolumeButton};
