/**
 * @format
 */

import 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import renderer, { act } from 'react-test-renderer';

import { MovieScreen } from '../src/features/movie/screens/movie_screen';

let mockProps: any = {
  navigation: { navigate: jest.fn() },
  route: {
    params: {
      item: {
        genre_ids: []
      }
    }
  }
};

jest.useFakeTimers();

it('renders correctly', async () => {
  renderer.create(
    <NavigationContainer>
      <MovieScreen {...mockProps} />
    </NavigationContainer>
  );

  await act(async () => {});
});
