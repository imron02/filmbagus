import { StyleSheet } from 'react-native';

import ResponsiveScreen from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d253f',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: ResponsiveScreen.normalize(100),
    height: ResponsiveScreen.normalize(100)
  },
  powered: {
    width: ResponsiveScreen.normalize(90),
    height: ResponsiveScreen.normalize(35),
    resizeMode: 'contain'
  }
});

export { styles };
