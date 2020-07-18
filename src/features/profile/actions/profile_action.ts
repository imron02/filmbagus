import { AppThunk } from '../../../redux/combine_reducers';
import { ActionType, URL } from '../../../utils/constant';
import { store } from '../../../redux/store';
import client from '../../../utils/service';

export const getAccount = (): AppThunk => async (dispatch) => {
  dispatch({ type: ActionType.ACCOUNT_REQUEST });

  try {
    const sessionId = store.getState().authReducer.session_id;
    const response = await client.get(URL.account, {
      params: {
        session_id: sessionId
      }
    });
    if (response.status === 200) {
      dispatch({
        type: ActionType.ACCOUNT_REQUEST_SUCESS,
        payload: response?.data
      });
    } else {
      dispatch({
        type: ActionType.ACCOUNT_REQUEST_FAILURE,
        payload: response?.data
      });
    }
  } catch (error) {
    dispatch({
      type: ActionType.ACCOUNT_REQUEST_FAILURE,
      payload: {
        error: error?.response?.data?.status_message ?? 'Failed request'
      }
    });
  }
};
