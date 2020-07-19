import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

import assets from '../../assets';
import styles from './styles';

const SplashScreen = props => {
  const navigateToScreen = route => {
    const navigateAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: route})],
    });
    props.navigation.dispatch(navigateAction);
  };

  useEffect(() => {
    setTimeout(async () => {
      if (await AsyncStorage.getItem('userData')) {
        navigateToScreen('Tabs');
      } else {
        navigateToScreen('Login');
      }
    }, 1000);
  }, []);

  const {splash} = assets.images;
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.imageView} source={splash} />
    </View>
  );
};

SplashScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SplashScreen;
