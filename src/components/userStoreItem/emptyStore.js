import React from 'react';
import { View, Text } from 'react-native';
import TagEmpty from '../../assets/svg/Tag.svg';
import theme from '../../theme/resources';


function EmptyUserStore({ }) {
    return (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', width: '60%' }}>
            <TagEmpty />
            <Text style={{ color: theme.TextBlack, fontSize: 16, fontWeight: '400', textAlign: 'center' }}>You Haven’t Added Anything In your Store Yet</Text>
        </View>

    )
}

export default EmptyUserStore;