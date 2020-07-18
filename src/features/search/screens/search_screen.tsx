import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/search_style';
import { AppBarComponent } from '../../../components/app_bar/app_bar_component';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ResponsiveScreen from '../../../utils/responsive';

const SearchScreen = () => {
  const [query, setQuery] = useState('');

  const onChangeSearch = (value: string) => {
    setQuery(value);
  };

  const renderEmptySearch = () => {
    if (!query) {
      return (
        <View style={styles.emptyContainer}>
          <Icon name="search" size={ResponsiveScreen.normalize(150)} />
          <Text style={styles.searchTitle}>Search</Text>
          <Text style={styles.searchSubtitle}>Find your favorite movies</Text>
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <AppBarComponent title="Search Movie" />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={query}
      />
      {renderEmptySearch()}
    </View>
  );
};

export { SearchScreen };
