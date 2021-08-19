import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/login/login_screen';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { ColorEnum } from 'utils/colors';

type RootStackParamList = {
  Login: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

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
        <RootStack.Navigator>
          <RootStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </RootStack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
