import {StyleSheet} from 'react-native';
import theme from '../../theme/resources';

const styles = StyleSheet.create({
  containerStyle:  {
        marginTop: '3%',
        backgroundColor: theme.background,
        elevation: 2,
        shadowColor: theme.TextBlack,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        margin: 2
    }
})

export default styles;