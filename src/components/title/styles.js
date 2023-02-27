import { StyleSheet } from 'react-native';
import theme from '../../theme/resources';


const styles = StyleSheet.create({
    profileTitleSection: {
        marginLeft: '4%',
        marginTop: '2%'
    },
    profileTitle: {
        fontFamily: theme.Poppins.regular,
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 27,
    },
})

export default styles;