import { connect } from 'react-redux';

import { SplashScreen } from '../screens/splash_screen';
import { RootState } from '../../../redux/combine_reducers';

const mapState = ({ authReducer }: RootState) => ({
  isAuthenticated: authReducer.isAuthenticated
});

export default connect(mapState, null)(SplashScreen);
