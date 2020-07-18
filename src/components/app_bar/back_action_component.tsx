/**
 * Alfamind back action component.
 */

import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import ResponsiveScreen from '../../utils/responsive';

type ComponentParamList = {
  BackActionComponent: undefined;
};

type BackActionComponentProp = StackNavigationProp<
  ComponentParamList,
  'BackActionComponent'
>;

const BackActionComponent = () => {
  const navigation = useNavigation<BackActionComponentProp>();

  return (
    <TouchableOpacity
      style={styles.appBarActions}
      activeOpacity={0.5}
      onPress={() => navigation.pop()}>
      <Icon
        name="chevron-left"
        size={ResponsiveScreen.normalize(28)}
        color="#FFFFFF"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appBarActions: {
    height: ResponsiveScreen.normalize(52),
    width: ResponsiveScreen.normalize(55),
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { BackActionComponent };
