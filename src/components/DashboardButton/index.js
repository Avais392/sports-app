import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Image} from 'react-native';

const DashboardButton = props => {
  useEffect(() => {}, []);
  const {onPress, title, disabled} = props;
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={styles.btnContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../assets/images/700.png')}
          />
          <Text style={styles.textView}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

DashboardButton.defaultProps = {
  title: 'title',
  imgSource: "{require('../../assets/images/700.png')}",
};

export default DashboardButton;
