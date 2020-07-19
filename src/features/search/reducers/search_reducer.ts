import { ActionType } from '../../../utils/constant';
import { MovieType } from '../../home/reducers/types';

type ActionType = {
  type: string;
  payload: MovieType;
};

const initialState = {
  loading: false,
  success: false,
  error: '',
  avatar: null,
  name: '',
  username: '',
  page: 1,
  total_pages: 0,
  results: []
};

export const movieSearchReducer = (
  state = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case ActionType.MOVIE_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: ''
      };
    case ActionType.MOVIE_SEARCH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        success: true
      };
    case ActionType.MOVIE_SEARCH_FAILURE:
      return {
        ...state,
        ...action.payload,
        loading: false,
        success: false
      };
    default:
      return state;
  }
};
