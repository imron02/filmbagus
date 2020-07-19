import { connect } from 'react-redux';

import { AppDispatch, RootState } from '../../../redux/combine_reducers';
import { SearchScreen } from '../screens/search_screen';
import { searchMovie } from '../actions/search_action';

const mapState = ({ movieSearchReducer, movieGenreReducer }: RootState) => ({
  loading: movieSearchReducer.loading,
  success: movieSearchReducer.success,
  page: movieSearchReducer.page,
  totalPages: movieSearchReducer.total_pages,
  errorMessage: movieSearchReducer.error,
  movies: movieSearchReducer.results,
  genres: movieGenreReducer.genres
});

const mapDispatch = (dispatch: AppDispatch) => ({
  searchMovie: (page: number, query: string) =>
    dispatch(searchMovie(page, query))
});

export default connect(mapState, mapDispatch)(SearchScreen);
