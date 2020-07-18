import React, { useEffect } from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { styles, spacer } from '../styles/auth_style';
import { AuthScreenProps } from '../../../routes/types';
import { ScreenName } from '../../../utils/constant';
import images from '../../../utils/images';

const AuthScreen = ({
  navigation,
  createGuestSessionRequest,
  loading,
  isAuthenticated
}: AuthScreenProps) => {
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
        />
        <View style={spacer(16).space} />
        <TextInput
          label="Password"
          mode="outlined"
          theme={{
            roundness: 8,
            colors: { primary: '#90cea1', placeholder: '#90cea1', text: '#FFF' }
          }}
          style={styles.input}
        />
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
          onPress={goToDashboard}>
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
