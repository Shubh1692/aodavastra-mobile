import React, {useState, useRef, useContext} from 'react';
import {View, Animated,Dimensions,FlatList} from 'react-native';
import {FeedRow} from './Component/FeedRow';
import CommonStyle from './CommonStyle';
import {deviceHeight, isIOS} from '../../utils/device';
import {data} from './constantData/data';


const FeedScreen = () => {
const [displayHeight, setDisplayHeight] = useState(deviceHeight);
  const refFlatList = useRef();
  const [scrollY] = useState(new Animated.Value(0));
  const [scrollInfo, setScrollInfo] = useState({isViewable: true, index: 0});

  // const viewabilityConfig = {viewAreaCoveragePercentThreshold: 80};
  // const onViewableItemsChanged = useRef(viewableItems => {
  //   const info = {
  //     isViewable: viewableItems.changed[0].isViewable,
  //     index: viewableItems.changed[0].index,
  //   };
  //   console.log("onViewableItemsChanged",info,JSON.stringify(viewableItems));
  //   setScrollInfo(info);
  // });

  const transitionAnimation = index => {
    const rowHeight = displayHeight * index;
    console.log("rowHeight",rowHeight);
    return {
      opacity: scrollY.interpolate({
        inputRange: [
          rowHeight,
          rowHeight + displayHeight / 2,
          rowHeight + displayHeight,
        ],
        outputRange: [1, 0.2, 0],
        useNativeDriver: true,
        extrapolate: 'clamp',
      }),
    };
  };

  const getItemLayout = (item, index) => ({
    length: displayHeight,
    offset: displayHeight * index,
    index,
  });

  const onLayout = ({nativeEvent}) => {
    console.log("onLayout change",JSON.stringify(nativeEvent),deviceHeight);
    setDisplayHeight((!isIOS && nativeEvent.layout.height) || deviceHeight);
  };

  const onEndReached = () => {
    // make api call here
  };

  const keyExtractor = (item, index) => {
    return `${item.id}`;
  };

  const renderItem = ({item, index}) => {
    const scrollIndex = scrollInfo?.index || 0;
    const isNext = index >= scrollIndex - 1 && index <= scrollIndex + 1;
    return (
      // <View style={{borderWidth:9,borderColor:'red',}}>
      <FeedRow
        item={item}
        isNext={isNext}
        index={index}
        transitionAnimation={transitionAnimation}
        visible={scrollInfo}
        isVisible={scrollIndex === index}
      />
    //  </View>
    );
  };

  return (
    <View style={CommonStyle.flexContainer} onLayout={onLayout}>
      <FlatList
        pagingEnabled
        // contentContainerStyle={{borderColor:'blue',borderWidth:4,flexGrow:1,}}
        showsVerticalScrollIndicator={false}
        ref={refFlatList}
        automaticallyAdjustContentInsets={true}
        // onViewableItemsChanged={onViewableItemsChanged.current}
        // viewabilityConfig={viewabilityConfig}
        // onScroll={Animated.event(
        //   [
        //     {
        //       nativeEvent: {contentOffset: {y: scrollY}},
        //     },
        //   ],
        //   {
        //     useNativeDriver: false,
        //   },
        // )}
        data={data}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={20}
        onEndReached={onEndReached}
        removeClippedSubviews={true}
      />
    </View>
  );
};

export default FeedScreen;
