import { combineReducers, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { authReducer } from '../features/auth/reducers/auth_reducer';
import { accountReducer } from '../features/profile/reducer/profile_reducer';

const rootReducer = combineReducers({
  authReducer,
  accountReducer
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
