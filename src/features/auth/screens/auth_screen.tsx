import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';

import { styles, spacer } from '../styles/auth_style';
import { AuthScreenProps } from '../../../routes/types';
import { ScreenName } from '../../../utils/constant';
import images from '../../../utils/images';

interface IErrInput {
  username?: string;
  password?: string;
}

const AuthScreen = ({
  navigation,
  createGuestSessionRequest,
  loading,
  isAuthenticated
}: AuthScreenProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errInput, setErrInput] = useState<IErrInput>({});

  useEffect(() => {
    if (isAuthenticated) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: ScreenName.dashboardScreen
          }
        ]
      });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    let errorInput = errInput;
    if (username) {
      errorInput.username = '';
    }

    if (password) {
      errorInput.password = '';
    }

    setErrInput(errorInput);
  }, [username, password]);

  const goToDashboard = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: ScreenName.dashboardScreen
        }
      ]
    });
  };

  const onGuest = () => {
    createGuestSessionRequest();
  };

  const validateOnPressLogin = (): boolean => {
    let valid = true;
    let errorInput: IErrInput = {};

    if (username === '' || !username) {
      valid = false;
      errorInput.username = "Username can't be empty";
    }

    if (password === '' || !password) {
      valid = false;
      errorInput.password = "Password can't be empty";
    }

    if (valid) {
      return true;
    }

    setErrInput(errorInput);
    return false;
  };

  const onLogin = () => {
    const valid = validateOnPressLogin();
    if (valid) {
      goToDashboard();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.title}>Welcome to Film Bagus</Text>
        <Text style={styles.subtitle}>Powered by The Movie Database</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="Username"
          mode="outlined"
          theme={{
            roundness: 8,
            colors: { primary: '#90cea1', placeholder: '#90cea1', text: '#FFF' }
          }}
          style={styles.input}
          value={username}
          onChangeText={(value) => setUsername(value)}
        />
        {!!errInput?.username && (
          <HelperText type="error" style={styles.errMessage}>
            {errInput?.username}
          </HelperText>
        )}
        <View style={spacer(16).space} />
        <TextInput
          label="Password"
          mode="outlined"
          theme={{
            roundness: 8,
            colors: { primary: '#90cea1', placeholder: '#90cea1', text: '#FFF' }
          }}
          style={styles.input}
          value={password}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry
        />
        {!!errInput?.password && (
          <HelperText type="error" style={styles.errMessage}>
            {errInput?.password}
          </HelperText>
        )}
        <View style={spacer(40).space} />
        <Button
          uppercase={false}
          color="#90cea1"
          onPress={onGuest}
          loading={loading}>
          Continue as Guest
        </Button>
        <Button
          mode="contained"
          style={styles.btnLogin}
          contentStyle={styles.button}
          onPress={onLogin}>
          Log in
        </Button>
        <View style={spacer(16).space} />
        <Button
          mode="text"
          style={styles.btnSignUp}
          contentStyle={styles.button}
          color="#90cea1">
          Sign Up
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export { AuthScreen };
