import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from '../styles/dashboard_style';
import { ScreenName } from '../../../utils/constant';
import HomeScreen from '../../home/containers/home_container';
import ProfileScreen from '../../profile/conainers/profile_container';
import SearchScreen from '../../search/containers/search_container';
import ResponsiveScreen from '../../../utils/responsive';

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
            <Icon
              name="home"
              color={color}
              size={ResponsiveScreen.normalize(26)}
            />
          )
        }}
      />
      <Tab.Screen
        name={ScreenName.searchScreen}
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon
              name="image-search"
              color={color}
              size={ResponsiveScreen.normalize(26)}
            />
          )
        }}
      />
      <Tab.Screen
        name={ScreenName.profileScreen}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon
              name="account"
              color={color}
              size={ResponsiveScreen.normalize(26)}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export { DashboardScreen };
