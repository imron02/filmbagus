import { connect } from 'react-redux';

import { AppDispatch, RootState } from '../../../redux/combine_reducers';
import { HomeScreen } from '../screens/home_screen';
import { getTopRatedMovie, getUpcomingMovie } from '../actions/home_action';

const mapState = ({
  topRateMovieReducer,
  upcomingMovieReducer
}: RootState) => ({
  loadingTopRatedMovies: topRateMovieReducer.loading,
  topRatedMovies: topRateMovieReducer.results,
  loadingUpcomingMovies: upcomingMovieReducer.loading,
  upcomingMovies: upcomingMovieReducer.results
});

const mapDispatch = (dispatch: AppDispatch) => ({
  getTopRatedMovie: (page: number) => dispatch(getTopRatedMovie(page)),
  getUpcomingMovie: (page: number) => dispatch(getUpcomingMovie(page))
});

export default connect(mapState, mapDispatch)(HomeScreen);
