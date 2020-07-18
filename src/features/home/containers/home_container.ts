import { connect } from 'react-redux';

import { AppDispatch, RootState } from '../../../redux/combine_reducers';
import { HomeScreen } from '../screens/home_screen';
import {
  getTopRatedMovie,
  getUpcomingMovie,
  getNowPlayingMovie,
  getPopularMovie
} from '../actions/home_action';

const mapState = ({
  topRateMovieReducer,
  upcomingMovieReducer,
  nowPlayingMovieReducer,
  popularMovieReducer
}: RootState) => ({
  loadingTopRatedMovies: topRateMovieReducer.loading,
  topRatedMovies: topRateMovieReducer.results,
  loadingUpcomingMovies: upcomingMovieReducer.loading,
  upcomingMovies: upcomingMovieReducer.results,
  loadingNowPlayingMovies: nowPlayingMovieReducer.loading,
  nowPlayingMovies: nowPlayingMovieReducer.results,
  loadingPopularMovies: popularMovieReducer.loading,
  popularMovies: popularMovieReducer.results
});

const mapDispatch = (dispatch: AppDispatch) => ({
  getTopRatedMovie: (page: number) => dispatch(getTopRatedMovie(page)),
  getUpcomingMovie: (page: number) => dispatch(getUpcomingMovie(page)),
  getNowPlayingMovie: (page: number) => dispatch(getNowPlayingMovie(page)),
  getPopularMovie: (page: number) => dispatch(getPopularMovie(page))
});

export default connect(mapState, mapDispatch)(HomeScreen);
