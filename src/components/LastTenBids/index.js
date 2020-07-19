import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const row = (dateTime, price) => {
  const actualDate = new Date(dateTime * 1000);
  return (
    <View style={styles.row}>
      <View style={styles.dateTime}>
        <Text style={styles.date}>
          {actualDate.getDate().toString().length < 2
            ? '0' + actualDate.getDate().toString()
            : actualDate.getDate()}
          /
          {actualDate.getMonth().toString().length < 2
            ? '0' + actualDate.getMonth().toString()
            : actualDate.getMonth()}
          /
          {actualDate.getFullYear().toString().length < 2
            ? '0' + actualDate.getFullYear().toString()
            : actualDate.getFullYear()}
        </Text>
        <Text style={styles.time}>
          {actualDate.getHours().toString().length < 2
            ? '0' + actualDate.getHours().toString()
            : actualDate.getHours()}
          :
          {actualDate.getMinutes().toString().length < 2
            ? '0' + actualDate.getMinutes().toString()
            : actualDate.getMinutes()}
        </Text>
      </View>
      <View style={styles.priceView}>
        <Text style={styles.price}>
          {!price.toString().includes('.') ? price + '.00' : price}
        </Text>
      </View>
    </View>
  );
};

const displayList = list => {
  return list.map(item => {
    const {recorded, bid_value} = item;
    return row(recorded, bid_value);
  });
};

const LastTenBidders = props => {
  const {data} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>YOUR LAST 10 BIDS</Text>
      </View>
      {displayList(data)}
    </View>
  );
};

export default LastTenBidders;
