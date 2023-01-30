import * as React from 'react';
import { SafeAreaView, StyleSheet,Image } from 'react-native';
import SegmentedControl from "./plugin";


const SegmentComponent = ({handleChanges,segmentStyle,tab,tabStyle,inActiveTabColor,activeTabColor}) => {

    return (
        <SafeAreaView style={styles.container}>
            <SegmentedControl
                style={[{ width: '100%',overflow:'hidden' },segmentStyle]}
                tabStyle={tabStyle}
                inActiveTabColor={'#ececec' || inActiveTabColor}
                activeTabColor={'#f9f9f9'|| activeTabColor}
                tabs={tab}
                onChange={(index) => handleChanges(index)}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // marginTop: 10,
        overflow:'hidden',
    },
});

export default SegmentComponent;