import { connect } from 'react-redux';
import { Action } from 'redux';

import { createGuestSessionRequest } from '../actions/auth_action';
import { RootState } from '../../../redux/combine_reducers';
import { AuthScreen } from '../screens/auth_screen';
import { ThunkDispatch } from 'redux-thunk';

const mapState = ({ authReducer }: RootState) => ({
  isAuthenticated: authReducer.isAuthenticated,
  loading: authReducer.loading,
  success: authReducer.success
});

const mapDispatch = (dispatch: ThunkDispatch<RootState, void, Action>) => ({
  createGuestSessionRequest: () => dispatch(createGuestSessionRequest)
});

export default connect(mapState, mapDispatch)(AuthScreen);
