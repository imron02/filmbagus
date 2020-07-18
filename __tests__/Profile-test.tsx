/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { ProfileScreen } from '../src/features/profile/screens/profile_screen';
let mockProps: any = { navigation: { navigate: jest.fn() } };

const MySafeArea = React.createContext(null);

jest.useFakeTimers();

it('renders correctly', () => {
  renderer.create(
    <MySafeArea.Provider value={null}>
      <ProfileScreen {...mockProps} />
    </MySafeArea.Provider>
  );
});
