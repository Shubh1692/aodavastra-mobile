import React from 'react';
import {View} from 'react-native';
import theme from '../../theme/resources';


function LineDivider(){
    return(
        <View style={{ width: '100%', borderWidth: 0.5, borderColor: theme.divider }} />
    )
}

export default LineDivider;