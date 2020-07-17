import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  SplashScreen: undefined;
  AuthScreen: undefined;
};

export type SplashScreenProps = StackScreenProps<
  RootStackParamList,
  'SplashScreen'
>;
