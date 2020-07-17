import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SplashScreens from 'react-native-splash-screen';

import { styles } from '../styles/splash_style';
import { wait } from '../../../utils/helper';
import { ScreenName } from '../../../utils/constant';
import { SplashScreenProps } from '../../../routes/types';
import images from '../../../utils/images';

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    SplashScreens.hide();
    redirect();
  }, []);

  const redirect = async () => {
    await wait(2000);
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
      <Animatable.Image
        animation="bounceInDown"
        duration={1300}
        easing="ease-in"
        source={images.logo}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export { SplashScreen };
