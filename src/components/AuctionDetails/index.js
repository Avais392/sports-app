import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';

import assets from '../../assets';
import styles from './styles';

const AuctionDetails = props => {
  const {totalBiddersImage} = assets.images;
  const {
    description,
    bidders,
    winnerUsername,
    prizePic,
    winnerAvatar,
    rrp,
  } = props.data;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.backgroundImageView}>
        <ImageBackground
          style={styles.backgroundImage}
          source={{uri: prizePic}}>
          {props.showRRP ? (
            <View style={styles.rrpView}>
              <Text style={styles.rrpText}>RRP:</Text>
              <Text style={styles.rrpValue}>£{rrp}</Text>
            </View>
          ) : (
            <View />
          )}
          <View style={styles.lowestBidderView}>
            <View style={styles.lowestBidderImageView}>
              <Image
                style={styles.lowestBidderImage}
                source={{uri: winnerAvatar}}
              />
            </View>
            <View style={styles.bidderView}>
              <Text style={styles.bidderText}>LOWEST BIDDER: </Text>
              <Text style={styles.bidderValue}>{winnerUsername}</Text>
            </View>
            <View style={styles.totalBiddersView}>
              <View style={styles.totalBidders}>
                <Image
                  source={totalBiddersImage}
                  style={styles.totalBiddersImage}
                />
              </View>
              <Text style={styles.totalBiddersText}>{bidders}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default AuctionDetails;
