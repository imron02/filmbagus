/**
 * App Bar Component.
 * @param {string} paddingTopColor - The padding top color (optional)
 * @param {string} backgroundColor - The backgroundColor (optional)
 * @param {React.ReactNode} leadings - The leadings is left component on app bar (optional)
 * @param {Function} actions - The actions is right component on app bar (optional)
 * @param {string} title - The title is middle component on app bar (optional)
 * @param {number} height - The height is size of app bar (optional)
 */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSafeArea, EdgeInsets } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import ResponsiveScreen from '../../utils/responsive';

type OwnProps = {
  paddingTopColor?: string;
  backgroundColor?: string;
  height?: number;
  leadings?: React.ReactNode;
  actions?: Function;
  title: string;
};

const AppBarComponent = ({
  paddingTopColor = '#0d253f',
  backgroundColor = '#0d253f',
  height = ResponsiveScreen.normalize(52),
  leadings,
  actions,
  title
}: OwnProps) => {
  const insets = useSafeArea();
  const customHeight = {
    height
  };
  const customColor = {
    backgroundColor: backgroundColor
  };
  return (
    <View>
      <View style={appBarStyle({ insets, paddingTopColor }).topPadding} />
      <View style={[styles.containerContent, customHeight, customColor]}>
        <Text style={styles.appBarTitle}>{title}</Text>
        <View style={[styles.leftStyle, customHeight]}>{leadings}</View>
        <View style={[styles.rightStyle, customHeight]}>{actions}</View>
      </View>
    </View>
  );
};

export { AppBarComponent };

AppBarComponent.defaultProps = {};

AppBarComponent.propTypes = {
  paddingTopColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  leadings: PropTypes.any,
  actions: PropTypes.any,
  title: PropTypes.any,
  height: PropTypes.any
};

type AppBar = {
  insets: EdgeInsets;
  paddingTopColor: string;
};

const appBarStyle = ({ insets, paddingTopColor }: AppBar) =>
  StyleSheet.create({
    topPadding: {
      height: insets.top,
      width: ResponsiveScreen.normalize(414),
      backgroundColor: paddingTopColor
    }
  });

const styles = StyleSheet.create({
  containerContent: {
    height: ResponsiveScreen.normalize(52),
    width: ResponsiveScreen.normalize(414),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  leftStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: ResponsiveScreen.normalize(52),
    justifyContent: 'center'
  },
  rightStyle: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: ResponsiveScreen.normalize(52),
    justifyContent: 'center'
  },
  appBarTitle: {
    fontSize: ResponsiveScreen.normalize(16),
    fontWeight: '600',
    color: '#FFFFFF'
  }
});
