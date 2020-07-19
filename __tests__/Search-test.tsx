/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { SearchScreen } from '../src/features/search/screens/search_screen';

let mockProps: any = {
  navigation: { navigate: jest.fn() },
  loading: false,
  searchMovie: jest.fn()
};

it('renders correctly', () => {
  renderer.create(<SearchScreen {...mockProps} />);
});
