import * as React from 'react';
import { SafeAreaView, StyleSheet,Image } from 'react-native';
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
            }}
        />
    );

    const renderGrid = () => (
        <Image source={require('../../assets/images/grid.png')} style={{width: 22,
            height: 22,}} />
    )
    const renderEmptyHeart = () => (
        <Image source={require('../../assets/images/emptyHeart.png')} style={{width: 22,
            height: 22,}} resizeMode="contain" />
    )

    return (
        <SafeAreaView style={styles.container}>
            <SegmentedControl
                style={{ width: '100%' }}
                // tabStyle={{backgroundColor:'#ececec'}}
                inActiveTabColor={'#ececec'}
                activeTabColor={'#f9f9f9'}
                tabs={[renderGrid('grid'), renderEmptyHeart('heart1')]}
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