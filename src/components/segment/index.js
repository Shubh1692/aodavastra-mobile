import * as React from 'react';
import { SafeAreaView, StyleSheet,Image } from 'react-native';
import theme from '../../theme/resources';
import SegmentedControl from "./plugin";


const SegmentComponent = ({handleChanges,segmentStyle,tab,tabStyle,inActiveTabColor,activeTabColor}) => {

    return (
        <SafeAreaView style={styles.container}>
            <SegmentedControl
                style={[{ width: '100%',overflow:'hidden' },segmentStyle]}
                tabStyle={tabStyle}
                inActiveTabColor={theme.tabColor || inActiveTabColor}
                activeTabColor={theme.background || activeTabColor}
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