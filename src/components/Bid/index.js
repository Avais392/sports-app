import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import endpoint from '../../config';
import NumericInput from '@wwdrew/react-native-numeric-textinput';
import {Events} from '../../assets/Events';

const renderTextInput = (state, setState, dummyData, setDummyData) => {
  return (
    <View style={styles.row}>
      <View style={styles.poundView}>
        <Text style={styles.poundText}>£</Text>
      </View>
      <View style={styles.textInputView}>
        <NumericInput
          type="decimal"
          style={styles.textInput}
          placeholder={'000.00'}
          placeholderTextColor={'#3c74b1'}
          decimalPlaces={2}
          value={state}
          maxLength={6}
          onUpdate={state => setState(state)}
        />
      </View>
    </View>
  );
};

const onSubmit = async (
  bids,
  data,
  setError,
  setErrorState,
  userBids,
  updateUserBids,
  popup,
  approvePopup,
  changeButtonState,
  auctionDetails,
  setAuctionDetails,
) => {
  changeButtonState(true);
  const userData = JSON.parse(await AsyncStorage.getItem('userData'));
  data.jwt = userData.jwt;
  if (userData.bids === 0) {
    changeButtonState(false);
    setErrorState(true);
    setError("You don't have enough bids.");
  } else if (bids === 'SPREAD BIDS' && data.low >= data.high) {
    changeButtonState(false);
    setErrorState(true);
    setError('Invalid Values');
  } else if (
    (data.single === 0 || data.single === '' || !data.single) &&
    (data.high === 0 || data.high === '' || !data.high) &&
    (data.low === 0 || data.low === '' || !data.low) &&
    (data.bomb === 0 || data.bomb === '' || !data.bomb)
  ) {
    changeButtonState(false);
    setErrorState(true);
    setError('You cannot bid zero.');
  } else {
    setErrorState(false);
    axios.post(endpoint, data).then(response => {
      const bidType = response.data.response.random;
      changeButtonState(false);
      if (bids === 'SINGLE BID') {
        Events.trigger('change_bid_amount', parseInt(userData.bids) - 1);
        Events.trigger('auctionScreenBidChange', parseInt(userData.bids) - 1);
        Events.trigger('buyBidsBidChange', parseInt(userData.bids) - 1);
        popup(bidType, response.data.response.image);
        console.log('ji');
        console.log(setAuctionDetails);
        console.log(response.data.response);
        setAuctionDetails({
          ...auctionDetails,
          'winner-username': response.data.response.winner,
        });
        updateUserBids([
          {
            bid_value: `${data.single}`,
            recorded: Math.round(new Date().getTime() / 1000),
          },
          ...userBids,
        ]);
      } else {
        if (response.data.response.random) {
          popup(bidType, response.data.response.image);
        } else {
          approvePopup(response.data.response.approve, endpoint, data);
        }
      }
    });
  }
};

const renderBids = (
  auctionId,
  bids,
  singleBid,
  setSingleBid,
  spreadBidsLowerBound,
  setSpreadBidsLowerBound,
  spreadBidsUpperBound,
  setSpreadBidsUpperBound,
  bidBomb,
  setBidBomb,
  setError,
  setErrorState,
  userBids,
  updateUserBids,
  dummyData,
  setDummyData,
  popup,
  approvePopup,
  buttonState,
  changeButtonState,
  auctionDetails,
  setAuctionDetails,
) => {
  if (buttonState) {
    if (bids === 'SPREAD BIDS') {
      return (
        <View style={styles.bidsSection}>
          <View>
            <Text style={styles.spreadDescriptionText}>HIGHEST BID VALUE</Text>
            {renderTextInput(
              spreadBidsUpperBound,
              setSpreadBidsUpperBound,
              dummyData,
              setDummyData,
            )}
            <View style={styles.emptySpace} />
            <Text style={styles.spreadDescriptionText}>LOWEST BID VALUE</Text>
            {renderTextInput(
              spreadBidsLowerBound,
              setSpreadBidsLowerBound,
              dummyData,
              setDummyData,
            )}
          </View>
          <View style={styles.bidButtonView}>
            <ActivityIndicator color="#ffffff" />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.bidsSection}>
        {renderTextInput(singleBid, setSingleBid, dummyData, setDummyData)}
        <View style={styles.bidButtonView}>
          <ActivityIndicator color="#ffffff" />
        </View>
      </View>
    );
  }
  switch (bids) {
    case 'SINGLE BID':
      return (
        <View style={styles.bidsSection}>
          {renderTextInput(singleBid, setSingleBid, dummyData, setDummyData)}
          <TouchableOpacity
            style={styles.bidButtonView}
            onPress={() => {
              const requestData = {
                action: 'save-bids',
                auction_id: auctionId,
                single: singleBid,
                high: 0,
                low: 0,
                bomb: 0,
              };
              onSubmit(
                bids,
                requestData,
                setError,
                setErrorState,
                userBids,
                updateUserBids,
                popup,
                approvePopup,
                changeButtonState,
                auctionDetails,
                setAuctionDetails,
              );
            }}>
            <Text style={styles.bidButtonText}>BID!</Text>
          </TouchableOpacity>
        </View>
      );
    case 'SPREAD BIDS':
      return (
        <View style={styles.bidsSection}>
          <View>
            <Text style={styles.spreadDescriptionText}>HIGHEST BID VALUE</Text>
            {renderTextInput(
              spreadBidsUpperBound,
              setSpreadBidsUpperBound,
              dummyData,
              setDummyData,
            )}
            <View style={styles.emptySpace} />
            <Text style={styles.spreadDescriptionText}>LOWEST BID VALUE</Text>
            {renderTextInput(
              spreadBidsLowerBound,
              setSpreadBidsLowerBound,
              dummyData,
              setDummyData,
            )}
          </View>
          <TouchableOpacity
            style={styles.bidButtonView}
            onPress={() => {
              const requestData = {
                action: 'save-bids',
                auction_id: auctionId,
                single: 0,
                high: spreadBidsUpperBound,
                low: spreadBidsLowerBound,
                bomb: 0,
              };
              onSubmit(
                bids,
                requestData,
                setError,
                setErrorState,
                userBids,
                updateUserBids,
                popup,
                approvePopup,
                changeButtonState,
                auctionDetails,
                setAuctionDetails,
              );
            }}>
            <Text style={styles.bidButtonText}>BID!</Text>
          </TouchableOpacity>
        </View>
      );
    case 'BID BOMB':
      return (
        <View style={styles.bidsSection}>
          {renderTextInput(bidBomb, setBidBomb, dummyData, setDummyData)}
          <TouchableOpacity
            style={styles.bidButtonView}
            onPress={() => {
              const requestData = {
                action: 'save-bids',
                auction_id: auctionId,
                single: 0,
                high: 0,
                low: 0,
                bomb: bidBomb,
              };
              onSubmit(
                bids,
                requestData,
                setError,
                setErrorState,
                userBids,
                updateUserBids,
                popup,
                approvePopup,
                changeButtonState,
                auctionDetails,
                setAuctionDetails,
              );
            }}>
            <Text style={styles.bidButtonText}>BID!</Text>
          </TouchableOpacity>
        </View>
      );
  }
};

const bidTextStyle = (bidValue, selectedBidValue) => {
  if (bidValue === selectedBidValue) {
    return styles.selectedBidText;
  }
  return styles.unSelectedBidText;
};

const Bid = props => {
  const {
    auctionId,
    userBids,
    updateUserBids,
    popup,
    approvePopup,
    auctionDetails,
    setAuctionDetails,
  } = props;
  const [bids, setBids] = useState('SINGLE BID');
  const [singleBid, setSingleBid] = useState();
  const [dummyData, setDummyData] = useState();
  const [spreadBidsLowerBound, setSpreadBidsLowerBound] = useState(0);
  const [spreadBidsUpperBound, setSpreadBidsUpperBound] = useState(0);
  const [bidBomb, setBidBomb] = useState(0);
  const [error, setError] = useState('');
  const [errorState, setErrorState] = useState(false);
  const [buttonState, changeButtonState] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bidsOption}>
        <TouchableOpacity
          style={styles.singleBidView}
          onPress={() => {
            setBids('SINGLE BID');
            setErrorState(false);
          }}>
          <Text style={bidTextStyle(bids, 'SINGLE BID')}>SINGLE BID</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.spreadBidsView}
          onPress={() => {
            setErrorState(false);
            setBids('SPREAD BIDS');
          }}>
          <Text style={bidTextStyle(bids, 'SPREAD BIDS')}>SPREAD BIDS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bidBombView}
          onPress={() => {
            setErrorState(false);
            setBids('BID BOMB');
          }}>
          <Text style={bidTextStyle(bids, 'BID BOMB')}>BID BOMB</Text>
        </TouchableOpacity>
      </View>
      {errorState ? <Text>{error}</Text> : <View />}
      {renderBids(
        auctionId,
        bids,
        singleBid,
        setSingleBid,
        spreadBidsLowerBound,
        setSpreadBidsLowerBound,
        spreadBidsUpperBound,
        setSpreadBidsUpperBound,
        bidBomb,
        setBidBomb,
        setError,
        setErrorState,
        userBids,
        updateUserBids,
        dummyData,
        setDummyData,
        popup,
        approvePopup,
        buttonState,
        changeButtonState,
        auctionDetails,
        setAuctionDetails,
      )}
    </View>
  );
};

export default Bid;
