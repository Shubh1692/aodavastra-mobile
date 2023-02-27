import React ,{} from 'react';
import {StyleSheet} from 'react-native';
import theme from '../../theme/resources';
import { deviceHeight, deviceWidth } from '../../utils/device';
  
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        flex: 1
    },
    subContainer: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'column-reverse',
        // flex: 1,
    },
    childContainer: {
        position: 'absolute',
        bottom: 0,
        maxHeight: deviceHeight,
        flex: 1,
    },
    child: {
        width: deviceWidth,
        backgroundColor: theme.White,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        // overflow: 'hidden',
        elevation: 4,
        shadowColor: theme.TextBlack,
        shadowOffset: { width: 0, height: -1 }, // change this for more shadow
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
    headingContainer : { 
        flexDirection: 'row', 
        alignItems: 'center', 
        position: 'relative', 
        // width: '100%', 
        justifyContent: 'center',
        marginHorizontal: 12,
        marginTop: 5,
    },
    heading: {
        fontFamily: theme.Poppins.regular,
        fontSize: 16, 
        fontWeight: '600',
        lineHeight: 24, 
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    closeBtn: {
        right: 10, 
        position: 'absolute',
    },
    divider: { 
        borderWidth: 1, 
        borderColor: theme.TextBlack, 
        width: 112, 
        marginLeft: 16, 
        marginTop: 16, 
    },
});

export default styles;