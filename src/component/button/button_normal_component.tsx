import { useDebouncedCallback } from 'use-debounce';
import React from 'react';
import { Button } from 'react-native-paper';
import { ColorEnum } from 'utils/colors';

interface ButtonNormalComponentProps {
  loading?: boolean;
  label: string;
  onPress: () => void;
  accessibilityLabel?: string;
  disabled?: boolean;
}

export default function ButtonNormalComponent(props: ButtonNormalComponentProps) {
  const pressDebounced = useDebouncedCallback(props.onPress, 500);

  return (
    <Button
      mode="contained"
      onPress={pressDebounced}
      contentStyle={{ height: 50 }}
      accessibilityLabel={props.accessibilityLabel}
      style={{ backgroundColor: props.disabled ? ColorEnum.grey100 : ColorEnum.red }}
      labelStyle={{ color: props.disabled ? ColorEnum.grey200 : ColorEnum.white }}
      disabled={props.disabled}
      loading={props.loading}>
      {props.label}
    </Button>
  );
}
