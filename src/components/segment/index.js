import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SegmentedControl from "./plugin";
import Icon from '../icon';

const SegmentComponent = ({handleChanges}) => {
    const [value, setValue] = React.useState('');
    const renderAdd = (item) => (
        <Icon
            name={item}
            style={{
                width: 25,
                height: 25,
                color:  "#000",
            }}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <SegmentedControl
                style={{ width: '100%' }}
                tabStyle={{background:'#fff'}}
                activeTabColor={'#ECECEC'}
                tabs={[renderAdd('grid'), renderAdd('heart')]}
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