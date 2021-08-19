/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react-native';
import LoginScreen from './login_screen';

const setup = () => render(<LoginScreen />);

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
