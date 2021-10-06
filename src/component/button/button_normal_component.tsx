import React from 'react';
import { Button } from 'react-native-paper';
import { ColorEnum } from 'utils/colors';

interface ButtonNormalComponentProps {
  label: string;
  onPress: () => void;
  accessibilityLabel?: string;
  disabled?: boolean;
}

export default function ButtonNormalComponent(props: ButtonNormalComponentProps) {
  return (
    <Button
      mode="contained"
      onPress={props.onPress}
      contentStyle={{ height: 50 }}
      accessibilityLabel={props.accessibilityLabel}
      style={{ backgroundColor: props.disabled ? ColorEnum.grey100 : ColorEnum.red }}
      labelStyle={{ color: props.disabled ? ColorEnum.grey200 : ColorEnum.white }}
      disabled={props.disabled}>
      {props.label}
    </Button>
  );
}
