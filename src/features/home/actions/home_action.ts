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

export const getUpcomingMovie = (page: number): AppThunk => async (
  dispatch
) => {
  dispatch({ type: ActionType.UPCOMING_MOVIE_REQUEST });

  try {
    const response = await client.get(URL.upcomingMovie, {
      params: {
        language: 'en-US',
        page,
        region: 'id'
      }
    });
    if (response.status === 200) {
      dispatch({
        type: ActionType.UPCOMING_MOVIE_SUCCESS,
        payload: response?.data
      });
    } else {
      dispatch({
        type: ActionType.UPCOMING_MOVIE_FAILURE,
        payload: response?.data
      });
    }
  } catch (error) {
    dispatch({
      type: ActionType.UPCOMING_MOVIE_FAILURE,
      payload: {
        error: error?.response?.data?.status_message ?? 'Failed request'
      }
    });
  }
};

export const getNowPlayingMovie = (page: number): AppThunk => async (
  dispatch
) => {
  dispatch({ type: ActionType.NOW_PLAYING_MOVIE_REQUEST });

  try {
    const response = await client.get(URL.nowPlayingMovie, {
      params: {
        language: 'en-US',
        page,
        region: 'id'
      }
    });
    if (response.status === 200) {
      dispatch({
        type: ActionType.NOW_PLAYING_MOVIE_SUCCESS,
        payload: response?.data
      });
    } else {
      dispatch({
        type: ActionType.NOW_PLAYING_MOVIE_FAILURE,
        payload: response?.data
      });
    }
  } catch (error) {
    dispatch({
      type: ActionType.NOW_PLAYING_MOVIE_FAILURE,
      payload: {
        error: error?.response?.data?.status_message ?? 'Failed request'
      }
    });
  }
};

export const getPopularMovie = (page: number): AppThunk => async (dispatch) => {
  dispatch({ type: ActionType.POPULAR_MOVIE_REQUEST });

  try {
    const response = await client.get(URL.popularMovie, {
      params: {
        language: 'en-US',
        page,
        region: 'id'
      }
    });
    if (response.status === 200) {
      dispatch({
        type: ActionType.POPULAR_MOVIE_SUCCESS,
        payload: response?.data
      });
    } else {
      dispatch({
        type: ActionType.POPULAR_MOVIE_FAILURE,
        payload: response?.data
      });
    }
  } catch (error) {
    dispatch({
      type: ActionType.POPULAR_MOVIE_FAILURE,
      payload: {
        error: error?.response?.data?.status_message ?? 'Failed request'
      }
    });
  }
};

export const getMovieGenre = (): AppThunk => async (dispatch) => {
  dispatch({ type: ActionType.GENRE_MOVIE_REQUEST });

  try {
    const response = await client.get(URL.movieGenre, {
      params: {
        language: 'en-US'
      }
    });
    if (response.status === 200) {
      dispatch({
        type: ActionType.GENRE_MOVIE_SUCCESS,
        payload: response?.data
      });
    } else {
      dispatch({
        type: ActionType.GENRE_MOVIE_FAILURE,
        payload: response?.data
      });
    }
  } catch (error) {
    dispatch({
      type: ActionType.GENRE_MOVIE_FAILURE,
      payload: {
        error: error?.response?.data?.status_message ?? 'Failed request'
      }
    });
  }
};
