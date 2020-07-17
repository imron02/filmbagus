import React from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { styles, spacer } from '../styles/auth_style';
import images from '../../../utils/images';

const AuthScreen = () => {
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
          mode="contained"
          style={styles.btnLogin}
          contentStyle={styles.button}>
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
