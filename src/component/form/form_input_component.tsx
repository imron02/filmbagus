import React from 'react';
import { HelperText, TextInput } from 'react-native-paper';
import { ColorEnum } from 'utils/colors';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

interface FormInputComponentProps {
  placeholder: string;
  handleChange: (text: string) => void;
  handleBlur: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  value: string;
  errorMessage: string;
  secureTextEntry?: boolean;
}

export default function FormInputComponent(props: FormInputComponentProps) {
  return (
    <>
      <TextInput
        placeholder={props.placeholder}
        style={{
          backgroundColor: ColorEnum.grey100,
          marginBottom: props.errorMessage ? 0 : 10,
          borderRadius: 5
        }}
        selectionColor={ColorEnum.grey200}
        underlineColor={ColorEnum.grey200}
        onChangeText={props.handleChange}
        onBlur={props.handleBlur}
        secureTextEntry={props.secureTextEntry}
      />
      {!!props.errorMessage && (
        <HelperText type="error" visible style={{ color: ColorEnum.red, paddingLeft: 0 }}>
          {props.errorMessage}
        </HelperText>
      )}
    </>
  );
}
