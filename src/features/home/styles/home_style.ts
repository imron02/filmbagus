import { StyleSheet, Dimensions } from 'react-native';
import ResponsiveScreen from '../../../utils/responsive';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  loadingContainer: {
    height: ResponsiveScreen.normalize(136),
    justifyContent: 'center',
    alignItems: 'center'
  },
  topRatedMoviews: {
    marginTop: 24
  },
  listHeader: {
    paddingHorizontal: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  lists: {
    paddingLeft: 16
  },
  title: {
    color: '#0d253f',
    fontSize: ResponsiveScreen.normalize(20),
    fontWeight: '600'
  },
  more: {
    fontSize: ResponsiveScreen.normalize(16),
    color: '#01b4e4'
  },
  card: {
    width: width / 4.5,
    marginHorizontal: 2.5
  },
  image: {
    width: '100%',
    height: ResponsiveScreen.normalize(136)
  }
});

export { styles };
