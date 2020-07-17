/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { SplashScreen } from '../src/features/splash/screens/splash_screen';

let mockProps: any = { navigation: { navigate: jest.fn() } };

it('renders correctly', () => {
  renderer.create(<SplashScreen {...mockProps} />);
});
