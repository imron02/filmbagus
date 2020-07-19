import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
import { View, Text, FlatList, Keyboard, TouchableOpacity } from 'react-native';
import { Searchbar, Chip } from 'react-native-paper';
import _debounce from 'lodash/debounce';
import FastImage from 'react-native-fast-image';

import { styles } from '../styles/search_style';
import { AppBarComponent } from '../../../components/app_bar/app_bar_component';
import { SearchScreenProps } from '../../../routes/types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ResponsiveScreen from '../../../utils/responsive';
import { MovieType } from '../../../features/home/reducers/types';
import { ApiConfig, ScreenName } from '../../../utils/constant';

const searchQuery = _debounce(
  (query: string, setSearch: Dispatch<SetStateAction<string>>) => {
    setSearch(query);
  },
  500
);

const SearchScreen = (props: SearchScreenProps) => {
  const {
    searchMovie,
    success,
    movies,
    genres,
    loading,
    totalPages,
    navigation
  } = props;

  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState<MovieType[]>([]);

  useEffect(() => {
    searchMovie(page, query);
  }, [page, search]);

  useEffect(() => {
    if (success) {
      if (page === 1) {
        setData(movies);
      } else {
        const newData = [...data, ...movies];
        setData(newData);
      }
    }
  }, [success]);

  const onChangeSearch = (value: string) => {
    setQuery(value);
    if (value === '') {
      setSearch('');
      setData([]);
      return Keyboard.dismiss();
    }
    searchQuery(value, setSearch);
  };

  const handleRefresh = () => {
    setPage(1);
  };

  const onLoadMore = async () => {
    const newPage = page + 1;
    if (newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const goToMovie = (item: MovieType) => () => {
    navigation.navigate(ScreenName.movieScreen, {
      item
    });
  };

  const renderEmptySearch = () => {
    return (
      <View style={styles.emptyContainer}>
        <Icon name="search" size={ResponsiveScreen.normalize(150)} />
        <Text style={styles.searchTitle}>Search</Text>
        <Text style={styles.searchSubtitle}>Find your favorite movies</Text>
      </View>
    );
  };

  const renderItem = ({ item }: { item: MovieType }) => {
    if (!item.poster_path) {
      return null;
    }

    const genreNames = item.genre_ids.map((genre) => {
      return genres.find((list) => list.id === genre)?.name;
    });

    return (
      <TouchableOpacity style={styles.card} onPress={goToMovie(item)}>
        <FastImage
          style={styles.image}
          source={{
            uri: `${ApiConfig.datastore}w185${item.poster_path}`
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.contentWrapper}>
          <View>
            <Text style={styles.title}>
              {item.title ?? item.original_title}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
              {item.overview ?? ''}
            </Text>
            <View style={styles.scoreWrapper}>
              <Text
                style={styles.score}>{`${item.vote_average} Users score`}</Text>
              <Text style={styles.score}>{item.release_date}</Text>
            </View>
          </View>
          <View style={styles.chipContainer}>
            {genreNames.map((genre, index) => {
              return (
                <Chip key={index} style={styles.chip}>
                  {genre}
                </Chip>
              );
            })}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <AppBarComponent title="Search Movie" />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={query}
      />
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptySearch}
        style={styles.list}
        refreshing={loading}
        onRefresh={handleRefresh}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.01}
      />
    </View>
  );
};

export { SearchScreen };
