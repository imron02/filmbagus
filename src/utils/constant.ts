import Config from 'react-native-config';

export enum ScreenName {
  splashScreen = 'SplashScreen',
  authScreen = 'AuthScreen',
  dashboardScreen = 'DashboardScreen',
  homeScreen = 'HomeScreen',
  searchScreen = 'SearchScreen',
  profileScreen = 'ProfileScreen'
}

export const ApiConfig = {
  baseApiUrl: Config.BASE_API_URL,
  timeOut: Config.TIME_OUT,
  apiKey: Config.API_KEY,
  datastore: Config.DATASTORE
};

export const URL = {
  guest: '/authentication/guest_session/new',
  requestToken: '/authentication/token/new',
  login: '/authentication/token/validate_with_login'
};

export const ActionType = {
  CREATE_GUEST_SESSION_REQUEST: 'CREATE_GUEST_SESSION_REQUEST',
  CREATE_GUEST_SESSION_SUCCESS: 'CREATE_GUEST_SESSION_SUCCESS',
  CREATE_GUEST_SESSION_FAILURE: 'CREATE_GUEST_SESSION_FAILURE',
  LOGOUT: 'LOGOUT',
  VALIDATE_LOGIN_REQUEST: 'VALIDATE_LOGIN_REQUEST',
  VALIDATE_LOGIN_SUCCESS: 'VALIDATE_LOGIN_SUCCESS',
  VALIDATE_LOGIN_FAILURE: 'VALIDATE_LOGIN_FAILURE'
};
