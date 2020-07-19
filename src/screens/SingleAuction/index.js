/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useRef} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import AuctionDetails from '../../components/AuctionDetails';
import Header from '../../components/Header';
import styles from './styles';
import Bid from '../../components/Bid';
import AuctionEnds from '../../components/AuctionEnds';
import LatestBidders from '../../components/LatestBidders';
import LastTenBids from '../../components/LastTenBids';
import SaveBidsPopup from '../../components/SaveBidsPopup';
import ApprovePopup from '../../components/ApprovePopup';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import endpoint from '../../config';
import {Events} from '../../assets/Events';

const SingleAuction = props => {
  const {goBack} = props.navigation;
  const {id, winnerAvatar} = props.navigation.state.params.data;
  const [auctionDetails, setAuctionDetails] = useState({});
  const [userBidHistory, setUserBidsHistory] = useState({});
  const [latestBidders, setLatestBidders] = useState({});
  const [bidStats, setBidStats] = useState({});
  const buttonClick = useRef();
  const approvePopup = useRef();
  useEffect(() => {
    const fetchData = async () => {
      const userData = JSON.parse(await AsyncStorage.getItem('userData'));
      axios
        .post(endpoint, {
          action: 'get-auction-details',
          jwt: userData.jwt,
          auction_id: id,
        })
        .then(response => {
          console.log('new', response.data);
          setAuctionDetails(response.data);
        })
        .catch(error => {
          console.log('error');
        });
    };

    const fetchUserBidHistory = async () => {
      const userData = JSON.parse(await AsyncStorage.getItem('userData'));
      axios
        .post(endpoint, {
          action: 'get-user-bid-history',
          jwt: userData.jwt,
          auction_id: id,
          limit: 10,
        })
        .then(response => {
          setUserBidsHistory(response.data.bids);
        })
        .catch(error => {
          console.log('error');
        });
    };

    const fetchLatestBidders = async () => {
      const userData = JSON.parse(await AsyncStorage.getItem('userData'));
      axios
        .post(endpoint, {
          action: 'get-auction-latest-bidders',
          jwt: userData.jwt,
          auction_id: id,
          limit: 15,
        })
        .then(response => {
          setLatestBidders(response.data.bidders);
        })
        .catch(error => {
          console.log('error');
        });
    };

    const getBidStats = async () => {
      const userData = JSON.parse(await AsyncStorage.getItem('userData'));
      axios
        .post(endpoint, {
          action: 'get-user-bid-stats',
          jwt: userData.jwt,
          auction_id: id,
          limit: 2,
        })
        .then(response => {
          setBidStats(response.data.stats);
        })
        .catch(error => {
          console.log('error');
        });
    };

    fetchData();
    fetchUserBidHistory();
    fetchLatestBidders();
    getBidStats();
  }, []);
  console.log('dedwed', auctionDetails);
  Events.on('single_auction_details', 'auctio_details', async updatedData => {
    setBidStats(updatedData.latestBids.stats);
    const userData = JSON.parse(await AsyncStorage.getItem('userData'));
    axios
      .post(endpoint, {
        action: 'get-user-bid-history',
        jwt: userData.jwt,
        auction_id: id,
        limit: 10,
      })
      .then(response => {
        setUserBidsHistory(response.data.bids);
      })
      .catch(error => {
        console.log('error');
      });
    axios
      .post(endpoint, {
        action: 'get-auction-latest-bidders',
        jwt: userData.jwt,
        auction_id: id,
        limit: 15,
      })
      .then(response => {
        setLatestBidders(response.data.bidders);
      })
      .catch(error => {
        console.log('error');
      });
  });

  const saveBids = (bidType, image) => {
    const {openModal} = buttonClick.current;
    openModal(bidType, image);
  };

  const approvePopupFn = (approvedString, url, data) => {
    const {openModal} = approvePopup.current;
    openModal(approvedString, url, data);
  };

  if (!auctionDetails.title) {
    return (
      <View style={styles.emptyView}>
        <Header
          filter={'Back'}
          goBack={props.navigation.goBack}
          userData={{name: 'Martin Smith-Whittaker', bidsLeft: 180, image: ''}}
        />
        <ActivityIndicator />
      </View>
    );
  }

  const {
    title,
    bidders,
    rrp,
    'end-date': endDate,
    'prize-info': prizeInfo,
    'winner-username': winnerUsername,
    'prize-pic': prizePic,
  } = auctionDetails;
  return (
    <View style={styles.mainContainer}>
      <ApprovePopup ref={approvePopup} popup={saveBids} />
      <SaveBidsPopup ref={buttonClick} />
      <Header
        filter={'Back'}
        goBack={goBack}
        userData={{name: 'Martin Smith-Whittaker', bidsLeft: 180, image: ''}}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{title}</Text>
        </View>
        <AuctionDetails
          showRRP={true}
          data={{
            bidders,
            rrp,
            winnerUsername,
            winnerAvatar,
            prizePic,
          }}
        />
        <Bid
          auctionDetails={auctionDetails}
          setAuctionDetails={setAuctionDetails}
          popup={saveBids}
          approvePopup={approvePopupFn}
          auctionId={id}
          userBids={userBidHistory}
          updateUserBids={setUserBidsHistory}
        />
        <AuctionEnds endsIn={endDate} />
        <View style={styles.descriptionView}>
          <Text style={styles.descriptionText}>{prizeInfo}</Text>
        </View>
        {JSON.stringify(latestBidders) !== '{}' ? (
          <LatestBidders data={latestBidders} />
        ) : (
          <View />
        )}
        {JSON.stringify(userBidHistory) !== '{}' ? (
          <View style={styles.biddingHistory}>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>BIDDING HISTORY</Text>
            </View>
            <View style={styles.rows}>
              <View style={styles.biddingDetail}>
                <Text style={styles.nonUnique}>NON-UNIQUE</Text>
                <Text style={styles.nonUniqueNumber}>
                  {bidStats['non unique']}
                </Text>
              </View>
              <View style={styles.biddingDetail}>
                <Text style={styles.unique}>UNIQUE</Text>
                <Text style={styles.uniqueNumber}>{bidStats.unique}</Text>
              </View>
              <View style={styles.biddingDetail}>
                <Text style={styles.lowest}>LOWEST</Text>
                <Text style={styles.lowestNumber}>{bidStats.lowest}</Text>
              </View>
            </View>
          </View>
        ) : (
          <View />
        )}
        {JSON.stringify(bidStats) !== '{}' ? (
          <LastTenBids data={userBidHistory} />
        ) : (
          <View />
        )}
      </ScrollView>
    </View>
  );
};

export default SingleAuction;
