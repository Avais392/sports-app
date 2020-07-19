import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const row = (image, name, city) => {
  return (
    <View style={styles.row}>
      <View style={styles.imageView}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.nameView}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.cityText}>{city}</Text>
      </View>
    </View>
  );
};

const displayList = list => {
  const finalList = list.map(item => {
    const {'bidder-avatar': image, name, city} = item;
    return row(image, name, city);
  });
  return finalList;
};

const LastTenBids = props => {
  const {data} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>LATEST BIDDERS</Text>
      </View>
      {displayList(data)}
    </View>
  );
};

export default LastTenBids;
