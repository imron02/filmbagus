import Config from 'react-native-config';

export enum ScreenName {
  splashScreen = 'SplashScreen',
  authScreen = 'AuthScreen',
  dashboardScreen = 'DashboardScreen',
  homeScreen = 'HomeScreen',
  searchScreen = 'SearchScreen',
  profileScreen = 'ProfileScreen',
  movieScreen = 'MovieScreen'
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
  login: '/authentication/token/validate_with_login',
  createSession: '/authentication/session/new',
  account: '/account',
  topRateMovie: '/movie/top_rated',
  upcomingMovie: '/movie/upcoming',
  nowPlayingMovie: '/movie/now_playing',
  popularMovie: '/movie/popular',
  movieGenre: '/genre/movie/list',
  movieSearch: '/search/movie'
};

export const ActionType = {
  CREATE_GUEST_SESSION_REQUEST: 'CREATE_GUEST_SESSION_REQUEST',
  CREATE_GUEST_SESSION_SUCCESS: 'CREATE_GUEST_SESSION_SUCCESS',
  CREATE_GUEST_SESSION_FAILURE: 'CREATE_GUEST_SESSION_FAILURE',
  LOGOUT: 'LOGOUT',
  VALIDATE_LOGIN_REQUEST: 'VALIDATE_LOGIN_REQUEST',
  VALIDATE_LOGIN_SUCCESS: 'VALIDATE_LOGIN_SUCCESS',
  VALIDATE_LOGIN_FAILURE: 'VALIDATE_LOGIN_FAILURE',
  ACCOUNT_REQUEST: 'ACCOUNT_REQUEST',
  ACCOUNT_REQUEST_SUCESS: 'ACCOUNT_REQUEST_SUCESS',
  ACCOUNT_REQUEST_FAILURE: 'ACCOUNT_REQUEST_FAILURE',
  TOP_RATE_MOVIE_REQUEST: 'TOP_RATE_MOVIE_REQUEST',
  TOP_RATE_MOVIE_SUCCESS: 'TOP_RATE_MOVIE_SUCCESS',
  TOP_RATE_MOVIE_FAILURE: 'TOP_RATE_MOVIE_FAILURE',
  UPCOMING_MOVIE_REQUEST: 'UPCOMING_MOVIE_REQUEST',
  UPCOMING_MOVIE_SUCCESS: 'UPCOMING_MOVIE_SUCCESS',
  UPCOMING_MOVIE_FAILURE: 'UPCOMING_MOVIE_FAILURE',
  NOW_PLAYING_MOVIE_REQUEST: 'NOW_PLAYING_MOVIE_REQUEST',
  NOW_PLAYING_MOVIE_SUCCESS: 'NOW_PLAYING_MOVIE_SUCCESS',
  NOW_PLAYING_MOVIE_FAILURE: 'NOW_PLAYING_MOVIE_FAILURE',
  POPULAR_MOVIE_REQUEST: 'POPULAR_MOVIE_REQUEST',
  POPULAR_MOVIE_SUCCESS: 'POPULAR_MOVIE_SUCCESS',
  POPULAR_MOVIE_FAILURE: 'POPULAR_MOVIE_FAILURE',
  GENRE_MOVIE_REQUEST: 'GENRE_MOVIE_REQUEST',
  GENRE_MOVIE_SUCCESS: 'GENRE_MOVIE_SUCCESS',
  GENRE_MOVIE_FAILURE: 'GENRE_MOVIE_FAILURE',
  MOVIE_SEARCH_REQUEST: 'MOVIE_SEARCH_REQUEST',
  MOVIE_SEARCH_SUCCESS: 'MOVIE_SEARCH_SUCCESS',
  MOVIE_SEARCH_FAILURE: 'MOVIE_SEARCH_FAILURE'
};
