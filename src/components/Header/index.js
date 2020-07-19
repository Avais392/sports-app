import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import assets from '../../assets';
import AsyncStorage from '@react-native-community/async-storage';
import SvgImage from '../../assets/SvgImage';
import endpoint from '../../config';
import {Events} from '../../assets/Events';

const renderFilter = (filter, screen, goBack) => {
  switch (filter) {
    case 'SHOW_ALL':
      return (
        <View style={styles.screenContainer}>
          <Text style={styles.screenText}>{screen}</Text>
          {/* <Text style={styles.filter}>No Filters</Text> */}
        </View>
      );
    case 'ELECTRONICS':
      return (
        <View style={styles.screenContainer}>
          <Text style={styles.screenText}>{screen}</Text>
          {/* <Text style={styles.filter}>Electronics</Text> */}
        </View>
      );
    case 'FOOTBALL':
      return (
        <View style={styles.screenContainer}>
          <Text style={styles.screenText}>{screen}</Text>
          {/* <Text style={styles.filter}>Football</Text> */}
        </View>
      );
    case 'GOLF':
      return (
        <View style={styles.screenContainer}>
          <Text style={styles.screenText}>{screen}</Text>
          {/* <Text style={styles.filter}>Golf</Text> */}
        </View>
      );
    case 'ENDING_SOON':
      return (
        <View style={styles.screenContainer}>
          <Text style={styles.screenText}>{screen}</Text>
          {/* <Text style={styles.filter}>Latest</Text> */}
        </View>
      );
    case 'Back':
      return (
        <TouchableOpacity
          style={styles.screenContainer1}
          onPress={() => goBack()}>
          <SvgImage svgName="Back" />
          <Text style={styles.screenText}>Back</Text>
        </TouchableOpacity>
      );
    default:
      return (
        <View style={styles.screenContainer}>
          <Text style={styles.screenText}>{screen}</Text>
          <Text style={styles.filter} />
        </View>
      );
  }
};

const updateBids = newBids => {
  console.log('jiji');
  setUser({...user, bids: newBids});
}

const Header = props => {
  const {screen, filter, goBack} = props;
  const [user, setUser] = useState({
    username: '',
    avatar: assets.images.totalBiddersImage,
    bids: 0,
  });
  Events.on('change_bid_amount', 'bid', newTotalBids => {
    if (typeof newTotalBids !== 'number') {
      newTotalBids = 0;
    }
    setUser({...user, bids: newTotalBids});
    AsyncStorage.setItem(
      'userData',
      JSON.stringify({...user, bids: newTotalBids}),
    );
  });
  useEffect(() => {
    const fetchBids = async () => {
      const data = JSON.parse(await AsyncStorage.getItem('userData'));
      setUser(data);
    };
    fetchBids();
  }, []);
  return (
    <View style={styles.mainContainer}>
      {renderFilter(filter, screen, goBack)}
      <View style={styles.nameContainer}>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{user.username}</Text>
          <Text style={styles.bidsText}>{user.bids} bids left</Text>
        </View>
        <View style={styles.imageView}>
          <Image
            source={
              user.avatar
                ? {uri: endpoint + user.avatar}
                : assets.images.totalBiddersImage
            }
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
