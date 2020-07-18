import { StackScreenProps } from '@react-navigation/stack';

import { ScreenName } from '../utils/constant';

export type RootStackParamList = {
  SplashScreen: undefined;
  AuthScreen: undefined;
  DashboardScreen: undefined;
  ProfileScreen: undefined;
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
  createLoginSessionReguest: (username: string, password: string) => void;
  loadingGuest: boolean;
  loadingLogin: boolean;
  isAuthenticated: boolean;
  errorMessage: string;
  success: boolean;
}

export type AuthScreenProps = StackScreenProps<
  RootStackParamList,
  ScreenName.authScreen
> &
  AuthDispatchProps;

interface ProfileDispatchProps {
  logout: () => void;
}

export type ProfileScreenProps = StackScreenProps<
  RootStackParamList,
  ScreenName.profileScreen
> &
  ProfileDispatchProps;
