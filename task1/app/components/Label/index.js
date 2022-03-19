import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import ReduxWrapper from 'Redux/ReduxWrapper';
import {appColors} from '../../utils/appColors';

function Label({
  text,
  style,
  appState: {darkMode},
  light,
  extlight,
  bold,
  medium,
  bElight,
  bMedium
}) {
  return (
    <Text
      style={[
        styles.label,
        style,
        darkMode ? styles.dark : styles.light,
        extlight && styles.extlight,
        light && styles.light,
        bold && styles.bold,
        medium && styles.medium,
        bElight&& styles.bElight,
        bMedium&& styles.bMedium
      ]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: scale(16),
    color: appColors.black,
    fontFamily: 'BarlowCondensed-Regular',
  },
  light: {
    color: appColors.black,
  },
  dark: {
    color: appColors.white,
  },
  extlight: {
    fontFamily: 'BarlowCondensed-ExtraLight',
  },
  light: {
    fontFamily: 'BarlowCondensed-Light',
  },
  bold: {
    fontFamily: 'BarlowCondensed-Bold',
  },
  medium: {
    fontFamily: 'BarlowCondensed-Medium',
  },
  bElight: {
    fontFamily: "Barlow-ExtraLight"
   },
  bMedium: {
    fontFamily: "Barlow-Medium"
   }
});

export default ReduxWrapper(Label);