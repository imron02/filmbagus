import { StackScreenProps } from '@react-navigation/stack';

import { ScreenName } from '../utils/constant';

export type RootStackParamList = {
  SplashScreen: undefined;
  AuthScreen: undefined;
  DashboardScreen: undefined;
};

interface SplashStateProps {
  isAuthenticated: boolean;
}

export type SplashScreenProps = StackScreenProps<
  RootStackParamList,
  ScreenName.splashScreen
> &
  SplashStateProps;

interface AuthDispatchProps {
  createGuestSessionRequest: () => void;
  loading: boolean;
  isAuthenticated: boolean;
}

export type AuthScreenProps = StackScreenProps<
  RootStackParamList,
  ScreenName.authScreen
> &
  AuthDispatchProps;
