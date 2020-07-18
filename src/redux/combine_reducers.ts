import { combineReducers, Action } from 'redux';
import { authReducer } from '../features/auth/reducers/auth_reducer';
import { ThunkAction } from 'redux-thunk';

const initialState = {
  todos: []
};

function dummyReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'Add':
      const tempArray: string[] = [...state.todos];
      tempArray.push('a');
      return {
        ...state,
        todos: tempArray
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dummyReducer,
  authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default rootReducer;
