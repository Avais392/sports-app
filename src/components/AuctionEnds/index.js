import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const getDate = (endsIn, setDate) => {
  const currentDate = new Date();
  const difference = endsIn - currentDate;
  const totalSeconds = Math.floor(difference / 1000);
  const totalDays = Math.floor(totalSeconds / 86400);
  const fractionalDays = totalSeconds % 86400;
  const totalHours = Math.floor(fractionalDays / 3600);
  const fractionalHours = fractionalDays % 3600;
  const totalMinutes = Math.floor(fractionalHours / 60);
  const remainingeconds = Math.floor(fractionalHours % 60);
  setDate([totalDays, totalHours, totalMinutes, remainingeconds]);
};

const AuctionEnds = props => {
  const {endsIn} = props;
  const [date, setDate] = useState(['00', '00', '00', '00']);
  useEffect(() => {
    if (new Date() < new Date(endsIn * 1000)) {
      setInterval(() => getDate(new Date(endsIn * 1000), setDate), 1000);
    }
  }, [endsIn]);
  return (
    <View style={styles.endsInView}>
      <Text style={styles.endsText}>ENDS:</Text>
      <View style={styles.timeView}>
        <View style={styles.cellView}>
          <View style={styles.singleCell}>
            <Text style={styles.cellText}>{date[0].toString().length < 2 ? '0' + date[0] : date[0]}</Text>
          </View>
          <Text style={styles.timeUnit}>DD</Text>
        </View>
        <View style={styles.cellView}>
          <View style={styles.singleCell}>
            <Text style={styles.cellText}>{date[1].toString().length < 2 ? '0' + date[1] : date[1]}</Text>
          </View>
          <Text style={styles.timeUnit}>HH</Text>
        </View>
        <View style={styles.cellView}>
          <View style={styles.singleCell}>
            <Text style={styles.cellText}>{date[2].toString().length < 2 ? '0' + date[2] : date[2]}</Text>
          </View>
          <Text style={styles.timeUnit}>MM</Text>
        </View>
        <View style={styles.cellView}>
          <View style={styles.singleCell}>
            <Text style={styles.cellText}>{date[3].toString().length < 2 ? '0' + date[3] : date[3]}</Text>
          </View>
          <Text style={styles.timeUnit}>SS</Text>
        </View>
      </View>
    </View>
  );
};

export default AuctionEnds;
