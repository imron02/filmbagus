import React from 'react';
import { Button } from 'react-native-paper';

interface ButtonNormalComponentProps {
  label: string;
  onPress: () => void;
  accessibilityLabel?: string;
}

export default function ButtonNormalComponent(props: ButtonNormalComponentProps) {
  return (
    <Button
      mode="contained"
      onPress={props.onPress}
      contentStyle={{ height: 50 }}
      accessibilityLabel={props.accessibilityLabel}>
      {props.label}
    </Button>
  );
}
