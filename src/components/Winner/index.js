import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';

import assets from '../../assets';
import styles from './styles';

const AuctionDetails = props => {
  // const {totalBiddersImage} = assets.images;
  // const {
  //   description,
  //   bidders,
  //   winnerUsername,
  //   prizePic,
  //   winnerAvatar,
  //   rrp,
  // } = props.data;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTextView}>Header</Text>
      </View>
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/images/700.png')}
          style={{width: '100%', height: '100%'}}
        />
  
      </View>
      <View style={styles.footer}>
        
      <Text style={styles.footerTextView}>Footer</Text>
      </View>
    </View>
  );
};

export default AuctionDetails;
