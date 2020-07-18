import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import { styles } from '../styles/profile_style';
import { AppBarComponent } from '../../../components/app_bar/app_bar_component';
import { ProfileScreenProps } from '../../../routes/types';
import { ScreenName } from '../../../utils/constant';

const ProfileScreen = ({ navigation, logout }: ProfileScreenProps) => {
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

  return (
    <View style={styles.container}>
      <AppBarComponent title="Profile" />
      <Text>Profile</Text>
      <Button onPress={onLogout}>Sign Out</Button>
    </View>
  );
};

export { ProfileScreen };
