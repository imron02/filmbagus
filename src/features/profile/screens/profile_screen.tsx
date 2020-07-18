import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, ActivityIndicator, Avatar } from 'react-native-paper';

import { styles } from '../styles/profile_style';
import { AppBarComponent } from '../../../components/app_bar/app_bar_component';
import { ProfileScreenProps } from '../../../routes/types';
import { ScreenName } from '../../../utils/constant';
import ResponsiveScreen from '../../../utils/responsive';

const ProfileScreen = (props: ProfileScreenProps) => {
  const { navigation, logout, getAccount, loading, username, avatar } = props;

  useEffect(() => {
    getAccount();
  }, []);

  const onLogout = () => {
    logout();
    navigation.reset({
      index: 0,
      routes: [
        {
          name: ScreenName.authScreen
        }
      ]
    });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#0d253f" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppBarComponent title="Profile" />
      <View style={styles.profileContainer}>
        <Avatar.Image
          size={ResponsiveScreen.normalize(41)}
          source={{ uri: `http://gravatar.com/avatar/${avatar}` }}
        />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Button onPress={onLogout} mode="contained" style={styles.button}>
        Sign Out
      </Button>
    </View>
  );
};

export { ProfileScreen };
