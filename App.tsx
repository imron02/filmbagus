import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { ColorEnum } from 'utils/colors';
import AppNavigator from 'navigator/app_navigator';

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: ColorEnum.red,
    accent: '#f1c40f',
    placeholder: ColorEnum.grey200,
    text: ColorEnum.grey200,
    background: ColorEnum.black
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}
