import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import TextComponent from '../text_component';
import { ColorEnum } from '../../utils/colors';

export interface HeaderComponentProps {
  label: string;
  color?: ColorEnum;
  textColor?: ColorEnum;
}

const HeaderComponentStyled = styled(View)`
  height: 62px;
  justify-content: center;
  background-color: ${(props: { color?: ColorEnum }) => props.color || ColorEnum.black};
`;

export default function HeaderComponent(props: HeaderComponentProps) {
  return (
    <HeaderComponentStyled testID="header-component" color={props.color}>
      <TextComponent
        label={props.label}
        variant="extra-large"
        fontWeight="bold"
        color={props.textColor}
        fontSize={32}
      />
    </HeaderComponentStyled>
  );
}
