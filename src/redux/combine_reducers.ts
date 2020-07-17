import { combineReducers } from 'redux';

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

export default combineReducers({
  dummyReducer
});
