import { StyleSheet } from 'react-native';
import ResponsiveScreen from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileContainer: {
    marginHorizontal: 16,
    height: ResponsiveScreen.normalize(82),
    backgroundColor: '#F5F5F5',
    marginTop: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20
  },
  username: {
    alignSelf: 'flex-start',
    marginTop: 22,
    marginLeft: 22,
    fontWeight: 'bold',
    fontSize: ResponsiveScreen.normalize(16)
  },
  button: {
    marginHorizontal: 16
  }
});

export { styles };
