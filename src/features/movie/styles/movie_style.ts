import { StyleSheet } from 'react-native';
import ResponsiveScreen from '../../../utils/responsive';

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
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16
  },
  image: {
    width: '100%',
    height: ResponsiveScreen.normalize(185),
    borderRadius: 8
  },
  title: {
    fontSize: ResponsiveScreen.normalize(16),
    fontWeight: '600',
    color: '#000000',
    paddingTop: 16
  },
  vote: {
    fontSize: ResponsiveScreen.normalize(12),
    color: '#01b4e4',
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#858585',
    fontWeight: 'normal'
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8
  },
  overview: {
    fontSize: ResponsiveScreen.normalize(14),
    color: '#333333',
    marginTop: 8
  }
});

export const spacer = (space: number) => {
  return StyleSheet.create({
    space: {
      height: space
    }
  });
};

export { styles };
