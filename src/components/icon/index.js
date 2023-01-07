import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../assets/fonts/selection.json';
import theme from '../../theme/resources';

const IconStyle = createIconSetFromFontello(fontelloConfig);



function Icon({ name, size, color, ...props }) {
    return (<IconStyle name={name} size={size} color={color || theme.Primary} {...props} />)
}

export default Icon;