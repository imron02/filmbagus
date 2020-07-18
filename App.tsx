/**
 * FilimBagus App
 *
 * @format
 */

const { PersistGate } = require('redux-persist/integration/react');

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import getStore from './src/redux/store';
import RootNavigation from './src/routes/root';
import { createStackNavigator } from '@react-navigation/stack';

const { store, persistor } = getStore();

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0d253f',
    accent: '#01b4e4'
  }
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
          </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

const Stack = createStackNavigator();
export const MockedNavigator = ({ component }: { component: any }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MockedScreen" component={component} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
