import { connect } from 'react-redux';

import {
  createGuestSessionRequest,
  createLoginSessionReguest
} from '../actions/auth_action';
import { RootState, AppDispatch } from '../../../redux/combine_reducers';
import { AuthScreen } from '../screens/auth_screen';

const mapState = ({ authReducer }: RootState) => ({
  isAuthenticated: authReducer.isAuthenticated,
  loadingGuest: authReducer.loadingGuest,
  loadingLogin: authReducer.loadingLogin,
  success: authReducer.success,
  errorMessage: authReducer.error
});

const mapDispatch = (dispatch: AppDispatch) => ({
  createGuestSessionRequest: () => dispatch(createGuestSessionRequest()),
  createLoginSessionReguest: (username: string, password: string) =>
    dispatch(createLoginSessionReguest(username, password))
});

export default connect(mapState, mapDispatch)(AuthScreen);
