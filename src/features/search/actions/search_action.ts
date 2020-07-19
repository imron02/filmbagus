import { AppThunk } from '../../../redux/combine_reducers';
import { ActionType, URL } from '../../../utils/constant';
import client from '../../../utils/service';

export const searchMovie = (page: number, query: string): AppThunk => async (
  dispatch
) => {
  if (query) {
    dispatch({ type: ActionType.MOVIE_SEARCH_REQUEST });

    try {
      const response = await client.get(URL.movieSearch, {
        params: {
          language: 'en-US',
          query,
          page,
          region: 'id'
        }
      });
      if (response.status === 200) {
        dispatch({
          type: ActionType.MOVIE_SEARCH_SUCCESS,
          payload: response?.data
        });
      } else {
        dispatch({
          type: ActionType.MOVIE_SEARCH_FAILURE,
          payload: response?.data
        });
      }
    } catch (error) {
      dispatch({
        type: ActionType.MOVIE_SEARCH_FAILURE,
        payload: {
          error: error?.response?.data?.status_message ?? 'Failed request'
        }
      });
    }
  }
};
