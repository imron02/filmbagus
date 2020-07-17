/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';

import { DashboardScreen } from '../src/features/dashboard/screens/dashboard_screen';

it('renders correctly', async () => {
  renderer.create(
    <NavigationContainer>
      <DashboardScreen />
    </NavigationContainer>
  );

  await act(async () => {});
});
