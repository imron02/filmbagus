/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import LoginScreen from './login_screen';
import AuthContext from 'context/auth_context';

const mockContext = {
  userToken: null,
  signIn: jest.fn(() => Promise.resolve()),
  signOut: jest.fn(() => Promise.resolve()),
  isLoading: false
};
const setup = () =>
  render(
    <AuthContext.Provider value={mockContext}>
      <LoginScreen />
    </AuthContext.Provider>
  );

describe('renders ui login correctly', () => {
  it('render username input', () => {
    const { getByPlaceholderText } = setup();
    const element = getByPlaceholderText('Username');
    expect(element).toBeTruthy();
  });
  it('render password input', () => {
    const { getByPlaceholderText } = setup();
    const element = getByPlaceholderText('Password');
    expect(element).toBeTruthy();
  });
  it('render button sign in', () => {
    const { getByLabelText } = setup();
    const element = getByLabelText('btnSignIn');
    expect(element).toBeTruthy();
  });
  it('render sign up text', () => {
    const { getByText } = setup();
    const element1 = getByText(/New to Netflix?/i);
    const element2 = getByText(/Sign up now/i);
    expect(element1).toBeTruthy();
    expect(element2).toBeTruthy();
  });
});
describe('login flow', () => {
  it('should show required username', async () => {
    const { getByPlaceholderText, getByText } = setup();
    const element = getByPlaceholderText('Username');

    fireEvent(element, 'blur', {
      persist: jest.fn(),
      target: { name: '', value: '' }
    });
    await waitFor(() => expect(getByText('Username is required')).toBeTruthy());
  });
  it('should show min char username', async () => {
    const { getByPlaceholderText, getByText } = setup();
    const element = getByPlaceholderText('Username');

    fireEvent.changeText(element, 'foo');
    fireEvent(element, 'blur', {
      persist: jest.fn(),
      target: { name: '', value: '' }
    });
    await waitFor(() => expect(getByText('username must be at least 5 characters')).toBeTruthy());
  });
  it('should show required password', async () => {
    const { getByPlaceholderText, getByText } = setup();
    const element = getByPlaceholderText('Password');

    fireEvent(element, 'blur', {
      persist: jest.fn(),
      target: { name: '', value: '' }
    });
    await waitFor(() => expect(getByText('Password is required')).toBeTruthy());
  });
  it('should show min char password', async () => {
    const { getByPlaceholderText, getByText } = setup();
    const element = getByPlaceholderText('Password');

    fireEvent.changeText(element, 'foo');
    fireEvent(element, 'blur', {
      persist: jest.fn(),
      target: { name: '', value: '' }
    });
    await waitFor(() => expect(getByText('password must be at least 5 characters')).toBeTruthy());
  });
  it('should enable sign in button', async () => {
    const { getByPlaceholderText, getByA11yLabel } = setup();
    const username = getByPlaceholderText('Username');
    const password = getByPlaceholderText('Password');
    const button = getByA11yLabel('btnSignIn');

    fireEvent.changeText(username, 'testing');
    fireEvent.changeText(password, 'password');
    await waitFor(() => expect(button.props.accessibilityState.disabled).toBe(false));
  });
  it('should call sign in', async () => {
    const { getByPlaceholderText, getByA11yLabel } = setup();
    const username = getByPlaceholderText('Username');
    const password = getByPlaceholderText('Password');
    const button = getByA11yLabel('btnSignIn');

    fireEvent.changeText(username, 'testing');
    fireEvent.changeText(password, 'password');
    fireEvent.press(button);
    await waitFor(() => expect(mockContext.signIn).toHaveBeenCalledTimes(1));
  });
});
