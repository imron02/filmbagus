import { AppThunk } from '../../../redux/combine_reducers';
import { ActionType, URL } from '../../../utils/constant';
import client from '../../../utils/service';

export const getTopRatedMovie = (page: number): AppThunk => async (
  dispatch
) => {
  dispatch({ type: ActionType.TOP_RATE_MOVIE_REQUEST });

  try {
    const response = await client.get(URL.topRateMovie, {
      params: {
        language: 'en-US',
        page,
        region: 'id'
      }
    });
    if (response.status === 200) {
      dispatch({
        type: ActionType.TOP_RATE_MOVIE_SUCCESS,
        payload: response?.data
      });
    } else {
      dispatch({
        type: ActionType.TOP_RATE_MOVIE_FAILURE,
        payload: response?.data
      });
    }
  } catch (error) {
    dispatch({
      type: ActionType.TOP_RATE_MOVIE_FAILURE,
      payload: {
        error: error?.response?.data?.status_message ?? 'Failed request'
      }
    });
  }
};
