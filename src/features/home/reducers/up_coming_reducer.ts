import { ActionType } from '../../../utils/constant';
import { MovieType } from './types';

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

export const upcomingMovieReducer = (
  state = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case ActionType.UPCOMING_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: ''
      };
    case ActionType.UPCOMING_MOVIE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        success: true
      };
    case ActionType.UPCOMING_MOVIE_FAILURE:
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
