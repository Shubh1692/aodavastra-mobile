import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';

const styles = StyleSheet.create({
    topSection: {
        marginLeft: 16, 
        marginVertical: 20,
        marginHorizontal:20
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    profileTitleSection: {
        marginLeft: '4%',
        marginTop: '2%'
    },
    profileTitle:{ 
        fontSize: 18, 
        fontWeight: '500', 
        lineHeight: 27, 
    },
    followingCount: { 
        fontSize: 16, 
        fontWeight: '500', 
        lineHeight: 24, 
        marginBottom: 2 
    },
    followingTitle: { 
        fontSize: 14, 
    },
    descriptionSection: { 
        width: '70%',
        marginTop:'-6%',
        marginLeft:'8.7%'
    },
    descTitle: { 
        fontSize: 13,
        lineHeight:21 
    },
    btnText: {
        color: theme.TextBlack,
        fontSize: 13,
    },
    btn: {
        width: 160,
        height: 50,
        borderWidth: 1,
        borderColor: theme.TextBlack
    }
});

export default styles;