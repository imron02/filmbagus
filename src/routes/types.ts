import { StackScreenProps } from '@react-navigation/stack';

import { ScreenName } from '../utils/constant';

export type RootStackParamList = {
  SplashScreen: undefined;
  AuthScreen: undefined;
  DashboardScreen: undefined;
};

export type SplashScreenProps = StackScreenProps<
  RootStackParamList,
  ScreenName.splashScreen
>;

interface AuthDispatchProps {
  createGuestSessionRequest: () => void;
}

export type AuthScreenProps = StackScreenProps<
  RootStackParamList,
  ScreenName.authScreen
> &
  AuthDispatchProps;
