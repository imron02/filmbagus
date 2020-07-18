import { ActionType } from '../../../utils/constant';

export type TopRateMovieDataType = {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
};

type TopRateMovieType = {
  page: number;
  total_results: number;
  total_pages: number;
  results: TopRateMovieDataType[];
};

type ActionType = {
  type: string;
  payload: TopRateMovieDataType;
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

export const topRateMovieReducer = (
  state = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case ActionType.TOP_RATE_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: ''
      };
    case ActionType.TOP_RATE_MOVIE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        success: true
      };
    case ActionType.TOP_RATE_MOVIE_FAILURE:
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
