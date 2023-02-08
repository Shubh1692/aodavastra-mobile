import { StyleSheet } from 'react-native';
import theme from '../../../theme/resources';


const styles = StyleSheet.create({
    cartIndicatorContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    cartIndicatorActiveLeftContainer: { 
        backgroundColor: theme.Purple, 
        height: 4, 
        width: '20%', 
        borderTopLeftRadius: 2, 
        borderBottomLeftRadius: 2 
    },
    cartIndicatorActiveRightContainer: { 
        backgroundColor: theme.Purple, 
        height: 4, 
        width: '20%', 
        borderTopRightRadius: 2, 
        borderBottomRightRadius: 2 
    },
    cartIndicatorInactiveRightContainer: { 
        backgroundColor: theme.bagHighlighterGrey, 
        height: 4, 
        width: '20%', 
        borderTopRightRadius: 2, 
        borderBottomRightRadius: 2 
    },
    cartIndicatorActiveContainer: { 
        backgroundColor: theme.Purple, 
        height: 4, 
        width: '20%',
    },
    cartIndicatorInactiveContainer: { 
        backgroundColor: theme.bagHighlighterGrey, 
        height: 4, 
        width: '20%', 
    },
    cartIndicatorTextContainer: {
        alignItems: 'center', 
        justifyContent: 'center'
    },
    cartIndicatorText: {
        flex: 1, 
        alignItems: 'center', 
        position: 'absolute', 
        height: 50, 
        fontFamily: 'Poppins-Regular', 
        fontSize: 12, 
        color: theme.TextBlack 
    },
    cartIndicatorActiveDot: { 
        backgroundColor: theme.Purple, 
        height: 10, 
        width: 10, 
        borderRadius: 5 
    },
    cartIndicatorInactiveDot: { 
        backgroundColor: theme.White, 
        height: 10, 
        width: 10, 
        borderRadius: 5, 
        borderWidth: 2.5, 
        borderColor: theme.bagHighlighterGrey
    },
})

export default styles;