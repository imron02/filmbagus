import { connect } from 'react-redux';

import { RootState } from '../../../redux/combine_reducers';
import { MovieScreen } from '../screens/movie_screen';

const mapState = ({ movieGenreReducer }: RootState) => ({
  genres: movieGenreReducer.genres
});

export default connect(mapState, null)(MovieScreen);
