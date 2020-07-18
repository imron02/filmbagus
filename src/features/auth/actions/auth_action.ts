import { ActionType, URL } from '../../../utils/constant';
import { AppThunk } from '../../../redux/combine_reducers';
import client from '../../../utils/service';

export const createGuestSessionRequest = (): AppThunk => async (dispatch) => {
  dispatch({ type: ActionType.CREATE_GUEST_SESSION_REQUEST });

  try {
    const response = await client.get(URL.guest);
    if (response.status === 200 && response?.data?.success) {
      dispatch({
        type: ActionType.CREATE_GUEST_SESSION_SUCCESS,
        payload: response?.data
      });
    } else {
      dispatch({
        type: ActionType.CREATE_GUEST_SESSION_FAILURE,
        payload: response?.data
      });
    }
  } catch (error) {
    dispatch({
      type: ActionType.CREATE_GUEST_SESSION_FAILURE,
      payload: {
        error: error?.response?.data?.status_message ?? 'Failed request'
      }
    });
  }
};

export const createLoginSessionReguest = (
  username: string,
  password: string
): AppThunk => async (dispatch) => {
  dispatch({ type: ActionType.VALIDATE_LOGIN_REQUEST });

  try {
    const token = await client.get(URL.requestToken);
    const login = await client.post(URL.login, {
      username,
      password,
      request_token: token?.data?.request_token
    });
    const response = await client.post(URL.createSession, {
      request_token: login?.data?.request_token
    });

    if (response.status === 200 && response?.data?.success) {
      dispatch({
        type: ActionType.VALIDATE_LOGIN_SUCCESS,
        payload: { ...login?.data, ...response?.data }
      });
    } else {
      dispatch({
        type: ActionType.VALIDATE_LOGIN_FAILURE,
        payload: response?.data
      });
    }
  } catch (error) {
    dispatch({
      type: ActionType.VALIDATE_LOGIN_FAILURE,
      payload: {
        error: error?.response?.data?.status_message ?? 'Failed request'
      }
    });
  }
};
