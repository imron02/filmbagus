import { connect } from 'react-redux';

import { AppDispatch, RootState } from '../../../redux/combine_reducers';
import { ProfileScreen } from '../screens/profile_screen';
import { ActionType } from '../../../utils/constant';
import { getAccount } from '../actions/profile_action';

const mapState = ({ accountReducer }: RootState) => ({
  loading: accountReducer.loading,
  success: accountReducer.success,
  errorMessage: accountReducer.error,
  avatar: accountReducer.avatar?.gravatar?.hash,
  username: accountReducer.username
});

const mapDispatch = (dispatch: AppDispatch) => ({
  logout: () => dispatch({ type: ActionType.LOGOUT }),
  getAccount: () => dispatch(getAccount())
});

export default connect(mapState, mapDispatch)(ProfileScreen);
