import { connect } from 'react-redux';

import { AppDispatch } from '../../../redux/combine_reducers';
import { ProfileScreen } from '../screens/profile_screen';
import { ActionType } from '../../../utils/constant';

const mapDispatch = (dispatch: AppDispatch) => ({
  logout: () => dispatch({ type: ActionType.LOGOUT })
});

export default connect(null, mapDispatch)(ProfileScreen);
