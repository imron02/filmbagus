import { StyleSheet } from 'react-native';
import ResponsiveScreen from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchTitle: {
    fontSize: ResponsiveScreen.normalize(25),
    color: '#000000'
  },
  searchSubtitle: {
    fontSize: ResponsiveScreen.normalize(12),
    color: '#000000'
  }
});

export { styles };
