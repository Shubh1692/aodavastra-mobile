import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';


const styles = StyleSheet.create({
    container: {
        marginTop: '8%', 
        marginHorizontal: '4%', 
        flex: 1
    },
    heading: {
        fontFamily: theme.Poppins.regular,
        fontSize: 18,
        color: theme.TextBlack
    },
    subContainer: {
        marginTop: '4%', 
        flex: 1
    },
    listContainer: {
        flex: 1,
    },
    contentContainer: {
        paddingBottom: 90,
    },
});

export default styles;