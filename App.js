/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Stack from './src/navigation/AppNavigator';

const App: () => React$Node = () => {
  console.disableYellowBox = true;
  return (
    <View style={styles.main}>
      <Stack />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
  },
});

export default App;
