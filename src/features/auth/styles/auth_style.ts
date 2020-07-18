import { StyleSheet } from 'react-native';
import ResponsiveScreen from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d253f',
    paddingHorizontal: 16
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logo: {
    height: ResponsiveScreen.normalize(80),
    width: ResponsiveScreen.normalize(80)
  },
  inputContainer: {
    flex: 0.8
  },
  input: {
    backgroundColor: '#0d253f'
  },
  title: {
    marginTop: 24,
    fontSize: ResponsiveScreen.normalize(30),
    color: '#FFF'
  },
  subtitle: {
    color: '#FFF',
    fontSize: ResponsiveScreen.normalize(12)
  },
  button: {
    height: ResponsiveScreen.normalize(40)
  },
  btnLogin: {
    backgroundColor: '#90cea1'
  },
  btnSignUp: {
    borderColor: '#90cea1',
    borderWidth: 1
  },
  errMessage: {
    color: '#90cea1'
  }
});

const spacer = (height: number) => {
  return StyleSheet.create({
    space: {
      height
    }
  });
};

export { styles, spacer };
