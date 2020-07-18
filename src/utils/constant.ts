import Config from 'react-native-config';

export enum ScreenName {
  splashScreen = 'SplashScreen',
  authScreen = 'AuthScreen',
  dashboardScreen = 'DashboardScreen',
  homeScreen = 'HomeScreen',
  searchScreen = 'SearchScreen'
}

export const ApiConfig = {
  baseApiUrl: Config.BASE_API_URL,
  timeOut: Config.TIME_OUT,
  apiKey: Config.API_KEY,
  datastore: Config.DATASTORE
};

export const URL = {
  guest: '/authentication/guest_session/new'
};

export const ActionType = {
  CREATE_GUEST_SESSION_REQUEST: 'CREATE_GUEST_SESSION_REQUEST',
  CREATE_GUEST_SESSION_SUCCESS: 'CREATE_GUEST_SESSION_SUCCESS',
  CREATE_GUEST_SESSION_FAILURE: 'CREATE_GUEST_SESSION_FAILURE'
};
