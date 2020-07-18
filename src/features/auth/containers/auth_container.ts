import { connect } from 'react-redux';

import { createGuestSessionRequest } from '../actions/auth_action';
import { RootState, AppDispatch } from '../../../redux/combine_reducers';
import { AuthScreen } from '../screens/auth_screen';

const mapState = ({ authReducer }: RootState) => ({
  isAuthenticated: authReducer.isAuthenticated,
  loading: authReducer.loading,
  success: authReducer.success
});

const mapDispatch = (dispatch: AppDispatch) => ({
  createGuestSessionRequest: () => dispatch(createGuestSessionRequest)
});

export default connect(mapState, mapDispatch)(AuthScreen);
