import { connect } from 'react-redux';

import { AppDispatch, RootState } from '../../../redux/combine_reducers';
import { HomeScreen } from '../screens/home_screen';
import {
  getTopRatedMovie,
  getUpcomingMovie,
  getNowPlayingMovie
} from '../actions/home_action';

const mapState = ({
  topRateMovieReducer,
  upcomingMovieReducer,
  nowPlayingMovieReducer
}: RootState) => ({
  loadingTopRatedMovies: topRateMovieReducer.loading,
  topRatedMovies: topRateMovieReducer.results,
  loadingUpcomingMovies: upcomingMovieReducer.loading,
  upcomingMovies: upcomingMovieReducer.results,
  loadingNowPlayingMovies: nowPlayingMovieReducer.loading,
  nowPlayingMovies: nowPlayingMovieReducer.results
});

const mapDispatch = (dispatch: AppDispatch) => ({
  getTopRatedMovie: (page: number) => dispatch(getTopRatedMovie(page)),
  getUpcomingMovie: (page: number) => dispatch(getUpcomingMovie(page)),
  getNowPlayingMovie: (page: number) => dispatch(getNowPlayingMovie(page))
});

export default connect(mapState, mapDispatch)(HomeScreen);
