import { ActionType } from '../../../utils/constant';

const initialState = {
  isAuthenticated: false,
  loadingGuest: false,
  loadingLogin: false,
  success: false,
  error: '',
  guest_session_id: '',
  expires_at: '',
  type: ''
};

type ActionType = {
  type: string;
  payload: {
    success: boolean;
    guest_session_id?: string;
    expires_at: string;
    request_token?: string;
  };
};

export const authReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ActionType.CREATE_GUEST_SESSION_REQUEST:
      return {
        ...state,
        loadingGuest: true,
        success: false,
        error: '',
        type: 'guest'
      };
    case ActionType.CREATE_GUEST_SESSION_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loadingGuest: false,
        isAuthenticated: true
      };
    case ActionType.CREATE_GUEST_SESSION_FAILURE:
      return {
        ...state,
        ...action.payload,
        loadingGuest: false,
        success: false,
        isAuthenticated: false
      };
    case ActionType.VALIDATE_LOGIN_REQUEST:
      return {
        ...state,
        loadingLogin: true,
        success: false,
        error: '',
        type: 'login'
      };
    case ActionType.VALIDATE_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loadingLogin: false,
        isAuthenticated: true
      };
    case ActionType.VALIDATE_LOGIN_FAILURE:
      return {
        ...state,
        ...action.payload,
        loadingLogin: false,
        success: false,
        isAuthenticated: false
      };
    case ActionType.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
