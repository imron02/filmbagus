type AuthType = 'SIGN_IN' | 'SIGN_OUT';

type AuthStateType = {
  isSignOut: boolean;
  userToken: string;
};

type AuthActionType = {
  type: AuthType;
  userToken?: string;
};

export const authInitialState: AuthStateType = {
  isSignOut: false,
  userToken: ''
};

export default function authReducer(state: AuthStateType, action: AuthActionType) {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, userToken: action.userToken!, isSignOut: false };
    case 'SIGN_OUT':
      return { ...state, isSignOut: true, userToken: '' };
    default:
      return authInitialState;
  }
}
