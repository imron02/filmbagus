import React, { useState } from 'react';
import { View, ScrollView, InteractionManager, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';

import { AppBarComponent } from '../../../components/app_bar/app_bar_component';
import { styles } from '../styles/movie_style';
import { BackActionComponent } from '../../../components/app_bar/back_action_component';
import { MovieScreenProps } from '../../../routes/types';
import { ApiConfig } from '../../../utils/constant';

const MovieScreen = ({ route }: MovieScreenProps) => {
  const { item } = route.params;
  const imagePath = item.backdrop_path ?? item.poster_path;
  const releaseDate = moment(item?.release_date, 'YYYY-MM-DD').format(
    'ddd, MMMM YYYYY'
  );

  const [isFinishTransition, setFinishTransition] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        // Expensive task
        setFinishTransition(true);
      });
      return () => task.cancel();
    }, [])
  );

  if (!isFinishTransition) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#0d253f" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppBarComponent
        title="Movie Detail"
        leadings={<BackActionComponent />}
      />
      <ScrollView style={styles.contentWrapper}>
        <Animatable.Image
          animation="fadeInDownBig"
          duration={1300}
          easing="ease-in"
          source={{
            uri: `${ApiConfig.datastore}w1280${imagePath}`
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Animatable.View
          animation="fadeInUpBig"
          duration={1300}
          easing="ease-in">
          <Text style={styles.title}>{item.title ?? item.original_title}</Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.vote}>{`${
              item.vote_average ?? ''
            } User Score`}</Text>
            <Text style={styles.vote}>{releaseDate}</Text>
          </View>
          <Text style={styles.title}>Overview</Text>
          <Text style={styles.overview}>{item.overview}</Text>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export { MovieScreen };
