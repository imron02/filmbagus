import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from '../styles/dashboard_style';
import { HomeScreen } from '../../home/screen/home_screen';
import { SearchScreen } from '../../search/screens/search_screen';
import { ScreenName } from '../../../utils/constant';
import ProfileScreen from '../../profile/conainers/profile_container';

const Tab = createMaterialBottomTabNavigator();

const DashboardScreen = () => {
  return (
    <Tab.Navigator barStyle={styles.container}>
      <Tab.Screen
        name={ScreenName.homeScreen}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Browse',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name={ScreenName.searchScreen}
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="image-search" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name={ScreenName.profileScreen}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export { DashboardScreen };
