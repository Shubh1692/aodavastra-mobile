import * as React from 'react';
import { SafeAreaView, StyleSheet,Image } from 'react-native';
import SegmentedControl from "./plugin";
import Icon from '../icon';

const SegmentComponent = ({handleChanges,tab}) => {
    const [value, setValue] = React.useState('');
    const renderAdd = (item) => (
        <Icon
            name={item}
            style={{
                width: 25,
                height: 25,
            }}
        />
    );



    return (
        <SafeAreaView style={styles.container}>
            <SegmentedControl
                style={{ width: '100%' }}
                inActiveTabColor={'#ececec'}
                activeTabColor={'#f9f9f9'}
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