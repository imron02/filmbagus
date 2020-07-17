/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-screens', () => {
  const RealComponent = jest.requireActual('react-native-screens');
  RealComponent.enableScreens = function () {};
  return RealComponent;
});

jest.useFakeTimers();

it('renders correctly', async () => {
  renderer.create(<App />);
});
