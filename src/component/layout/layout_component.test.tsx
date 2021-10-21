/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react-native';
import React from 'react';
import { RefreshControl, Text } from 'react-native';
import LayoutComponent, { LayoutComponentProps } from './layout_component';
import '@testing-library/jest-native/extend-expect';

const label = 'Layout';
const setup = (props?: Partial<LayoutComponentProps>) => {
  return render(
    <LayoutComponent {...props}>
      <Text>{label}</Text>
    </LayoutComponent>
  );
};

describe('render layout correctly', () => {
  it('layout with ScrollView', () => {
    const { getByTestId } = setup();
    const element = getByTestId('scrollView');
    expect(element).toBeTruthy();
  });
  it('layout without ScrollView', () => {
    const { queryByTestId } = setup({ isWithoutScroll: true });
    const element = queryByTestId('scrollView');
    expect(element).toBeFalsy();
  });
  it('layout with flex 0 or 1', () => {
    const { getByText } = setup({ isWithoutScroll: true, disableGrow: true });
    const element = getByText(label);
    expect(element.parent).toHaveProp('disableGrow');
  });
  it('layout with refresh control', () => {
    const refreshControl = <RefreshControl onRefresh={jest.fn()} refreshing={false} />;
    const { getByTestId } = setup({ refreshControl });
    const element = getByTestId('scrollView');
    expect(element).toHaveProp('refreshControl');
  });
});
