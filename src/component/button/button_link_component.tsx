import TextComponent from 'component/text_component';
import React from 'react';
import { TouchableOpacity } from 'react-native';

interface ButtonLinkComponentProps {
  onPress: () => void;
}

interface ButtonChildrenProps extends ButtonLinkComponentProps {
  children: React.ReactNode;
}

interface ButtonLabelProps extends ButtonLinkComponentProps {
  label: string;
}

export default function ButtonLinkComponent(props: ButtonLabelProps | ButtonChildrenProps) {
  if ('label' in props) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        {<TextComponent label={props.label} />}
      </TouchableOpacity>
    );
  }
  return <TouchableOpacity onPress={props.onPress}>{props.children}</TouchableOpacity>;
}
