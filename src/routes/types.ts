import { StackScreenProps } from '@react-navigation/stack';

import { ScreenName } from '../utils/constant';
import { TopRateMovieDataType } from '../features/home/reducers/top_rated_movies_reducer';

export type RootStackParamList = {
  SplashScreen: undefined;
  AuthScreen: undefined;
  DashboardScreen: undefined;
  ProfileScreen: undefined;
  HomeScreen: undefined;
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
  getAccount: () => void;
  loading: boolean;
  errorMessage: string;
  success: boolean;
  avatar: string;
  username: string;
}

export type ProfileScreenProps = StackScreenProps<
  RootStackParamList,
  ScreenName.profileScreen
> &
  ProfileDispatchProps;

interface HomeDispatchProps {
  getTopRatedMovie: (page: number) => void;
  loadingTopRatedMovies: boolean;
  errorMessage: string;
  success: boolean;
  page: number;
  total_pages: number;
  topRatedMovies: TopRateMovieDataType[];
}

export type HomeScreenProps = StackScreenProps<
  RootStackParamList,
  ScreenName.homeScreen
> &
  HomeDispatchProps;
