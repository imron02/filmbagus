import React from 'react';
import { TextInput } from 'react-native-paper';
import { ColorEnum } from 'utils/colors';

interface FormInputComponentProps {
  placeholder: string;
}

export default function FormInputComponent(props: FormInputComponentProps) {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={{ backgroundColor: ColorEnum.grey100, marginBottom: 10, borderRadius: 5 }}
      selectionColor={ColorEnum.grey200}
      underlineColor={ColorEnum.grey200}
    />
  );
}
