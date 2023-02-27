import React from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';


function CheckboxComponent({checked,handleCheckbox,setChecked}){
    return(
        <TouchableOpacity onPress={handleCheckbox} >
            {checked && <FastImage source={require('../../assets/images/selectedCheck.png')} style={{ width: 20, height: 20 }} />}
            {!checked && <FastImage source={require('../../assets/images/unSelected.png')} style={{ width: 20, height: 20 }} />}
        </TouchableOpacity>
    )
}

export default CheckboxComponent;