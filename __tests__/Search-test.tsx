/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { SearchScreen } from '../src/features/search/screens/search_screen';

it('renders correctly', () => {
  renderer.create(<SearchScreen />);
});
