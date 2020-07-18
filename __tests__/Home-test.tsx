/**
 * @format
 */

import 'react-native';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { HomeScreen } from '../src/features/home/screens/home_screen';

let mockProps: any = {
  navigation: { navigate: jest.fn() },
  getTopRatedMovie: jest.fn(),
  getUpcomingMovie: jest.fn(),
  getNowPlayingMovie: jest.fn(),
  getPopularMovie: jest.fn(),
  getMovieGenre: jest.fn()
};

const mockStore = configureMockStore();
const store = mockStore({});

it('renders correctly', async () => {
  renderer.create(
    <Provider store={store}>
      <HomeScreen {...mockProps} />
    </Provider>
  );
});
