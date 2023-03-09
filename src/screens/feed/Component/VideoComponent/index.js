import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import CommonStyle from '../../CommonStyle';
import { deviceWidth, deviceHeight } from '../../../../utils/device';
import { VolumeButton } from '../AppButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    videoView: {
       width: '100%',
       borderWidth:1,borderColor:'green',
        opacity: 1,
        // height: deviceHeight,
        flex:1
    },
    videoOuter: {
        flex:1,
        width: deviceWidth,
        ...CommonStyle.center,
    },
});

const VideoComponent = ({ post, isVisible, isNext }) => {
    const insets = useSafeAreaInsets();
    console.log("insets",insets)
    const [isMute, setIsMute] = useState(true);
    const videoRef = useRef(null);
    const { url } = post;
    const { videoOuter, videoView } = styles;

    useEffect(() => {
        if (!isVisible && isNext && videoRef) {
            videoRef.current.seek(1);
        }
    }, [isVisible, isNext]);

    const videoError = error => {
        // Manage error here
    };
//{ height: deviceHeight }
    return (
        <View style={[videoOuter, { height: deviceHeight - 80}]}>
            <Video
                ref={videoRef}
                fullscreenAutorotate={true}
                source={url}
                autoPlay={true}
                repeat={true}
                onError={videoError}
                resizeMode={'cover'}
                // muted={(!isVisible && true) || isMute}
                style={[videoView,{ height: deviceHeight}]}
                // { height: deviceHeight - 120}
                playInBackground={false}
                paused={!isVisible}
                ignoreSilentSwitch={'ignore'}
            />
            <VolumeButton />
        </View>
    );
};

export { VideoComponent };
