import {StyleSheet} from 'react-native';

const CommonStyle = StyleSheet.create({
  absoluteView: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  clearBack: {
    backgroundColor: 'transparent',
  },
  flexContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    // borderColor:'yellow',borderWidth:5
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CommonStyle;
