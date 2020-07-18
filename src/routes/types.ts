import { StackScreenProps } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { ScreenName } from '../utils/constant';
import { MovieType, GenreType } from '../features/home/reducers/types';

export type RootStackParamList = {
  SplashScreen: undefined;
  AuthScreen: undefined;
  DashboardScreen: undefined;
  ProfileScreen: undefined;
  HomeScreen: undefined;
  MovieScreen: { item: MovieType };
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
  topRatedMovies: MovieType[];
  getUpcomingMovie: (page: number) => void;
  loadingUpcomingMovies: boolean;
  upcomingMovies: MovieType[];
  getNowPlayingMovie: (page: number) => void;
  loadingNowPlayingMovies: boolean;
  nowPlayingMovies: MovieType[];
  getPopularMovie: (page: number) => void;
  loadingPopularMovies: boolean;
  popularMovies: MovieType[];
  getMovieGenre: () => void;
}

export type HomeScreenProps = StackScreenProps<
  RootStackParamList,
  ScreenName.homeScreen
> &
  HomeDispatchProps;

type MovieScreenRouteProp = RouteProp<
  RootStackParamList,
  ScreenName.movieScreen
>;

export type MovieScreenProps = {
  route: MovieScreenRouteProp;
  genres: GenreType[];
};
