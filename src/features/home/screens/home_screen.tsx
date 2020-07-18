import React, { useEffect } from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

import { styles } from '../styles/home_style';
import { AppBarComponent } from '../../../components/app_bar/app_bar_component';
import { HomeScreenProps } from 'src/routes/types';
import { ApiConfig } from '../../../utils/constant';
import { MovieType } from '../reducers/types';

const HomeScreen = (props: HomeScreenProps) => {
  const {
    getTopRatedMovie,
    topRatedMovies,
    loadingTopRatedMovies,
    getUpcomingMovie,
    upcomingMovies,
    loadingUpcomingMovies,
    getNowPlayingMovie,
    nowPlayingMovies,
    loadingNowPlayingMovies
  } = props;

  useEffect(() => {
    getTopRatedMovie(1);
    getUpcomingMovie(1);
    getNowPlayingMovie(1);
  }, []);

  const renderItem = ({ item }: { item: MovieType }) => {
    if (!item.poster_path) {
      return null;
    }

    return (
      <View style={styles.card}>
        <FastImage
          style={styles.image}
          source={{
            uri: `${ApiConfig.datastore}w185${item.poster_path}`
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    );
  };

  const movies = (title: string, loading: boolean, data: MovieType[]) => {
    if (loading) {
      return (
        <View style={styles.topRatedMoviews}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator color="#0d253f" />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.topRatedMoviews}>
        <View style={styles.listHeader}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.more}>View all</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          style={styles.lists}
          horizontal
        />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <AppBarComponent title="Browse" />
      {movies('Top Rated Movies', loadingTopRatedMovies, topRatedMovies)}
      {movies('Upcoming Movies', loadingUpcomingMovies, upcomingMovies)}
      {movies('Now Playing Movies', loadingNowPlayingMovies, nowPlayingMovies)}
    </ScrollView>
  );
};

export { HomeScreen };
