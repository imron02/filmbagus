/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { HomeScreen } from '../src/features/home/screen/home_screen';

it('renders correctly', () => {
  renderer.create(<HomeScreen />);
});
