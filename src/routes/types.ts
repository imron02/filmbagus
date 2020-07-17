import { StackScreenProps } from '@react-navigation/stack';
import { ScreenName } from 'src/utils/constant';

export type RootStackParamList = {
  SplashScreen: undefined;
  AuthScreen: undefined;
  DashboardScreen: undefined;
};

export type SplashScreenProps = StackScreenProps<
  RootStackParamList,
  ScreenName.splashScreen
>;

export type AuthScreenProps = StackScreenProps<
  RootStackParamList,
  ScreenName.authScreen
>;
