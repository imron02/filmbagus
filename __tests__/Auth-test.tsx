/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { AuthScreen } from '../src/features/auth/screens/auth_screen';

it('renders correctly', () => {
  renderer.create(<AuthScreen />);
});
