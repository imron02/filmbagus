import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

import { styles } from '../styles/home_style';
import { AppBarComponent } from '../../../components/app_bar/app_bar_component';
import { HomeScreenProps } from 'src/routes/types';
import { TopRateMovieDataType } from '../reducers/top_rated_movies_reducer';
import { ApiConfig } from '../../../utils/constant';

const HomeScreen = (props: HomeScreenProps) => {
  const {
    getTopRatedMovie,
    success,
    topRatedMovies,
    loadingTopRatedMovies
  } = props;

  const [page] = useState(1);

  useEffect(() => {
    getTopRatedMovie(page);
  }, []);

  const renderItem = ({ item }: { item: TopRateMovieDataType }) => {
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

  const TopRatedMovies = () => {
    if (loadingTopRatedMovies) {
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
          <Text style={styles.title}>Top Rated Movies</Text>
          <Text style={styles.more}>View all</Text>
        </View>
        <FlatList
          data={topRatedMovies}
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
      <TopRatedMovies />
    </View>
  );
};

export { HomeScreen };
