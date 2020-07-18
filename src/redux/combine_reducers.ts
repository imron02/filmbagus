import { combineReducers, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { authReducer } from '../features/auth/reducers/auth_reducer';
import { accountReducer } from '../features/profile/reducer/profile_reducer';
import { topRateMovieReducer } from '../features/home/reducers/top_rated_movies_reducer';
import { upcomingMovieReducer } from '../features/home/reducers/up_coming_reducer';

const rootReducer = combineReducers({
  authReducer,
  accountReducer,
  topRateMovieReducer,
  upcomingMovieReducer
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
