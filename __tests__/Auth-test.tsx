/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { AuthScreen } from '../src/features/auth/screens/auth_screen';

let mockProps: any = { navigation: { navigate: jest.fn() } };

it('renders correctly', () => {
  renderer.create(<AuthScreen {...mockProps} />);
});
