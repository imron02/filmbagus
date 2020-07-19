import { ActionType } from '../../../utils/constant';
import { AnyAction } from 'redux';

type AccountType = {
  avatar: {
    gravatar: {
      hash: string;
    };
  };
  id: number;
  name: string;
  username: string;
};

type ActionType = {
  type: string;
  payload: AccountType;
};

const initialState = {
  loading: false,
  success: false,
  error: '',
  avatar: null,
  name: '',
  username: ''
};

export const accountReducer = (
  state = initialState,
  action: ActionType | AnyAction
) => {
  switch (action.type) {
    case ActionType.ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: ''
      };
    case ActionType.ACCOUNT_REQUEST_SUCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        success: true
      };
    case ActionType.ACCOUNT_REQUEST_FAILURE:
      return {
        ...initialState,
        ...action.payload
      };
    default:
      return state;
  }
};
