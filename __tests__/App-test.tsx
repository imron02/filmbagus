/**
 * @format
 */

import 'react-native';
import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.useFakeTimers();
jest.mock('react-native-paper');

it('renders correctly', async () => {
  renderer.create(
    <PaperProvider>
      <App />
    </PaperProvider>
  );
});
