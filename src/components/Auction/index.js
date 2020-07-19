import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import AuctionDetails from '../AuctionDetails';

import styles from './styles';
import AuctionEnds from '../AuctionEnds';

const Auction = props => {
  const {navigation, item} = props;
  const {
    bidders,
    'end-date': endDate,
    id,
    'prize-pic': prizePic,
    rrp,
    title,
    'winner-avatar': winnerAvatar,
    'winner-username': winnerUsername,
    description,
  } = item;
  const {navigate} = navigation;
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        navigate('SingleAuction', {
          data: {id, winnerAvatar},
        });
      }}>
      <View style={styles.nameView}>
        <Text style={styles.nameText}>{title}</Text>
      </View>
      <AuctionDetails
        showRRP={false}
        data={{
          description,
          bidders,
          winnerUsername,
          rrp,
          prizePic,
          winnerAvatar,
        }}
      />
      <AuctionEnds endsIn={endDate} />
    </TouchableOpacity>
  );
};

export default Auction;
