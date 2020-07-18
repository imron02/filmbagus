import { connect } from 'react-redux';

import { AppDispatch, RootState } from '../../../redux/combine_reducers';
import { HomeScreen } from '../screens/home_screen';
import { getTopRatedMovie } from '../actions/home_action';

const mapState = ({ topRateMovieReducer }: RootState) => ({
  loadingTopRatedMovies: topRateMovieReducer.loading,
  success: topRateMovieReducer.success,
  errorMessage: topRateMovieReducer.error,
  page: topRateMovieReducer.page,
  total_pages: topRateMovieReducer.total_pages,
  topRatedMovies: topRateMovieReducer.results
});

const mapDispatch = (dispatch: AppDispatch) => ({
  getTopRatedMovie: (page: number) => dispatch(getTopRatedMovie(page))
});

export default connect(mapState, mapDispatch)(HomeScreen);
