import React from 'react';
import styled from 'styled-components';
import { RefreshControlProps, ScrollView, View } from 'react-native';
import { ColorEnum } from '../../utils/colors';
import { SizeEnum } from '../../utils/size';

export interface LayoutComponentProps {
  children: React.ReactNode;
  isWithoutScroll?: boolean;
  refreshControl?: React.ReactElement<RefreshControlProps>;
  disableGrow?: boolean;
}

const LayoutStyled = styled(View)`
  padding-left: ${SizeEnum['20x']};
  padding-right: ${SizeEnum['20x']};
  background-color: ${ColorEnum.black};
  flex: ${(props: { disableGrow?: boolean }) => (props.disableGrow ? 0 : 1)};
`;

export default function LayoutComponent(props: LayoutComponentProps) {
  if (props.isWithoutScroll) {
    return <LayoutStyled disableGrow={props.disableGrow}>{props.children}</LayoutStyled>;
  }

  return (
    <ScrollView testID="scrollView" refreshControl={props.refreshControl}>
      <LayoutStyled>{props.children}</LayoutStyled>
    </ScrollView>
  );
}
