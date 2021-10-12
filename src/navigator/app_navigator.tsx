import LoginScreen, { LoginInterface } from 'screens/login/login_screen';
import React, { useMemo, useReducer } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from 'screens/dashboard/dashboard_screen';
import authReducer, { authInitialState } from 'reducer/auth_reducer';
import AuthContext from 'context/auth_context';
import { fetchToken, postLogin } from 'api/fetch_login';
import { Alert } from 'react-native';

type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  const authContext = useMemo(
    () => ({
      userToken: authState.userToken,
      signIn: async (payload: LoginInterface) => {
        try {
          const response = await fetchToken();
          const { request_token } = await postLogin({
            ...payload,
            request_token: response.request_token
          });
          authDispatch({ type: 'SIGN_IN', userToken: request_token });
        } catch (e) {
          Alert.alert('Error', 'Login error');
        }
      },
      signOut: async () => authDispatch({ type: 'SIGN_OUT' })
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <RootStack.Navigator>
        {authState.userToken ? (
          <RootStack.Screen name="Dashboard" component={DashboardScreen} />
        ) : (
          <RootStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        )}
      </RootStack.Navigator>
    </AuthContext.Provider>
  );
}
