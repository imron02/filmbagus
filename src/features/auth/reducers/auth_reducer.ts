import { ActionType } from '../../../utils/constant';

const initialState = {
  isAuthenticated: false,
  loading: false,
  success: false,
  error: '',
  guest_session_id: '',
  expires_at: ''
};

type ActionType = {
  type: string;
  payload: {
    success: boolean;
    guest_session_id: string;
    expires_at: string;
  };
};

export const authReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ActionType.CREATE_GUEST_SESSION_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: ''
      };
    case ActionType.CREATE_GUEST_SESSION_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        isAuthenticated: true
      };
    case ActionType.CREATE_GUEST_SESSION_FAILURE:
      return {
        ...state,
        ...action.payload,
        loading: false,
        success: false,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
