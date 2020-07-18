import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

import { styles } from '../styles/home_style';
import { AppBarComponent } from '../../../components/app_bar/app_bar_component';
import { HomeScreenProps } from 'src/routes/types';
import { ApiConfig, ScreenName } from '../../../utils/constant';
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
    loadingNowPlayingMovies,
    getPopularMovie,
    popularMovies,
    loadingPopularMovies,
    navigation,
    getMovieGenre
  } = props;

  useEffect(() => {
    getTopRatedMovie(1);
    getUpcomingMovie(1);
    getNowPlayingMovie(1);
    getPopularMovie(1);
    getMovieGenre();
  }, []);

  const goToMovie = (item: MovieType) => () => {
    navigation.navigate(ScreenName.movieScreen, {
      item
    });
  };

  const renderItem = ({ item }: { item: MovieType }) => {
    if (!item.poster_path) {
      return null;
    }

    return (
      <TouchableOpacity style={styles.card} onPress={goToMovie(item)}>
        <FastImage
          style={styles.image}
          source={{
            uri: `${ApiConfig.datastore}w185${item.poster_path}`
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </TouchableOpacity>
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
    <View style={styles.container}>
      <AppBarComponent title="Browse" />
      <ScrollView>
        {movies('Top Rated Movies', loadingTopRatedMovies, topRatedMovies)}
        {movies('Upcoming Movies', loadingUpcomingMovies, upcomingMovies)}
        {movies(
          'Now Playing Movies',
          loadingNowPlayingMovies,
          nowPlayingMovies
        )}
        {movies('Popular Movies', loadingPopularMovies, popularMovies)}
      </ScrollView>
    </View>
  );
};

export { HomeScreen };
