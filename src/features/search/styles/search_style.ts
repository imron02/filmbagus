import { StyleSheet, Dimensions } from 'react-native';

import ResponsiveScreen from '../../../utils/responsive';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  emptyContainer: {
    height: ResponsiveScreen.normalize(height - 300),
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
  },
  list: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  card: {
    height: ResponsiveScreen.normalize(170),
    marginHorizontal: 2.5,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
    flexDirection: 'row',
    paddingRight: 12
  },
  image: {
    width: ResponsiveScreen.normalize(110),
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginRight: 12
  },
  contentWrapper: {
    flex: 1,
    paddingVertical: 12,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: ResponsiveScreen.normalize(16),
    fontWeight: '600'
  },
  description: {
    flexWrap: 'wrap',
    flexGrow: 1,
    fontSize: ResponsiveScreen.normalize(14),
    color: '#333333',
    marginTop: 4
  },
  scoreWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  score: {
    color: '#858585',
    fontSize: ResponsiveScreen.normalize(12)
  },
  chipContainer: {
    flexDirection: 'row'
  },
  chip: {
    marginRight: 2
  }
});

export { styles };
