import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { RootStackParamList } from './types';
import { ScreenName } from '../utils/constant';
import { DashboardScreen } from '../features/dashboard/screens/dashboard_screen';
import SplashScreen from '../features/splash/containers/splash_container';
import AuthScreen from '../features/auth/containers/auth_container';

enableScreens();
const Stack = createNativeStackNavigator<RootStackParamList>();

const root = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenName.splashScreen}
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name={ScreenName.splashScreen} component={SplashScreen} />
      <Stack.Screen name={ScreenName.authScreen} component={AuthScreen} />
      <Stack.Screen
        name={ScreenName.dashboardScreen}
        component={DashboardScreen}
      />
    </Stack.Navigator>
  );
};

export default root;
