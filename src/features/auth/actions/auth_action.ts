import { ActionType, URL } from '../../../utils/constant';
import { AppThunk } from '../../../redux/combine_reducers';
import client from '../../../utils/service';

export const createGuestSessionRequest: AppThunk = async (dispatch) => {
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
      error: error?.response?.message ?? 'Failed request'
    });
  }
};
