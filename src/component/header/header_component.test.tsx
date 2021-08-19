/* eslint-disable testing-library/prefer-screen-queries */
import { render, within } from '@testing-library/react-native';
import React from 'react';
import { ColorEnum } from 'utils/colors';
import HeaderComponent, { HeaderComponentProps } from './header_component';
import '@testing-library/jest-native/extend-expect';

const setup = (props?: Omit<HeaderComponentProps, 'label'>) => {
  return render(<HeaderComponent {...props} label="Header" />);
};

describe('render header correctly', () => {
  it('render header with label', () => {
    const { getByText } = setup();
    const element = getByText('Header');
    expect(element).toBeTruthy();
  });
  it('header with custom color', () => {
    const { getByTestId } = setup({ color: ColorEnum.black });
    const element = getByTestId('header-component');
    expect(element).toHaveProp('color', ColorEnum.black);
  });
  it('header with custom text color', () => {
    const { getByTestId } = setup({ textColor: ColorEnum.white });
    const element = within(getByTestId('header-component'));
    expect(element.getByText('Header')).toHaveProp('color', ColorEnum.white);
  });
});
