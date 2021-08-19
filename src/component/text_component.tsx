import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { SizeEnum } from '../utils/size';
import { ColorEnum } from '../utils/colors';

type TextVariant = 'extra-large' | 'x-large' | 'large' | 'regular' | 'small' | 'super-small';
export type TextAlign = 'left' | 'center' | 'right';
type TextTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none';
type TextDecoration = 'underline' | 'none' | 'line-through';
type FontWeight = 'lighter' | 'normal' | 'bold';

export interface TextProps {
  label?: string;
  color?: string;
  variant?: TextVariant;
  fontWeight?: FontWeight;
  textAlign?: TextAlign;
  textTransform?: TextTransform;
  textDecoration?: TextDecoration;
  numberOfLines?: number;
  fontSize?: number;
}

const TextStyled = styled(Text)`
  font-size: ${(props: TextProps) =>
    props.fontSize
      ? `${props.fontSize}px`
      : props.variant === 'extra-large'
      ? SizeEnum['20x']
      : props.variant === 'x-large'
      ? SizeEnum['18x']
      : props.variant === 'large'
      ? SizeEnum['16x']
      : props.variant === 'regular'
      ? SizeEnum['14x']
      : props.variant === 'small'
      ? SizeEnum['12x']
      : props.variant === 'super-small'
      ? SizeEnum['10x']
      : SizeEnum['14x']};
  text-transform: ${({ textTransform }: TextProps) => textTransform || 'none'};
  text-decoration: ${({ textDecoration }: TextProps) => textDecoration || 'none'}
  color: ${(props: TextProps) => props.color || ColorEnum.white};
  text-align: ${({ textAlign }: TextProps) => textAlign || 'left'};
  font-weight: ${({ fontWeight }: TextProps) => fontWeight || 'normal'};
`;

export default function TextComponent(props: TextProps) {
  return <TextStyled {...props}>{props.label}</TextStyled>;
}
