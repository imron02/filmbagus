import { ActionType } from '../../../utils/constant';
import { GenreType } from './types';

type ActionType = {
  type: string;
  payload: GenreType[];
};

const initialState = {
  loading: false,
  success: false,
  error: '',
  genres: []
};

export const movieGenreReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ActionType.GENRE_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: ''
      };
    case ActionType.GENRE_MOVIE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        success: true
      };
    case ActionType.GENRE_MOVIE_FAILURE:
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
