import { combineReducers, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { authReducer } from '../features/auth/reducers/auth_reducer';
import { accountReducer } from '../features/profile/reducers/profile_reducer';
import { topRateMovieReducer } from '../features/home/reducers/top_rated_movies_reducer';
import { upcomingMovieReducer } from '../features/home/reducers/up_coming_reducer';
import { nowPlayingMovieReducer } from '../features/home/reducers/now_playing_reducer';
import { popularMovieReducer } from '../features/home/reducers/popular_movies_reducer';
import { movieGenreReducer } from '../features/home/reducers/movie_genre_reducer';
import { movieSearchReducer } from '../features/search/reducers/search_reducer';

const rootReducer = combineReducers({
  authReducer,
  accountReducer,
  topRateMovieReducer,
  upcomingMovieReducer,
  nowPlayingMovieReducer,
  popularMovieReducer,
  movieGenreReducer,
  movieSearchReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<RootState, void, Action>;

export default rootReducer;
