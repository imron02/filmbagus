/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer, { act } from 'react-test-renderer';

import { DashboardScreen } from '../src/features/dashboard/screens/dashboard_screen';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  topRateMovieReducer: {
    loading: false
  },
  upcomingMovieReducer: {
    loading: false
  },
  nowPlayingMovieReducer: {
    loading: false
  },
  popularMovieReducer: {
    loading: false
  }
});

jest.useFakeTimers();

it('renders correctly', async () => {
  renderer.create(
    <Provider store={store}>
      <NavigationContainer>
        <DashboardScreen />
      </NavigationContainer>
    </Provider>
  );

  await act(async () => {});
});
