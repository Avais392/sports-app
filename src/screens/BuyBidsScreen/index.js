import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Platform,
  Image,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import BidsPackage from '../../components/BidsPackage';
import endpoint from '../../config';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import RNIap, {
  purchaseErrorListener,
  finishTransaction,
  purchaseUpdatedListener,
} from 'react-native-iap';
import assets from '../../assets';
import constants from '../../constants';
import {Events} from '../../assets/Events';

const itemSkus = Platform.select({
  ios: ['7', '8', '9'],
  android: ['07', '08', '09'],
});

const itemSubs = Platform.select({
  ios: ['01', '02', '03', '04', '05', '06'],
  android: ['01', '02', '03', '04', '05', '06'],
});

const renderTextStyle = (actualTime, time) => {
  if (actualTime === time) {
    return styles.selectedText;
  }
  return styles.unSelectedText;
};

const renderBorderStyle = (actualTime, time) => {
  if (actualTime === time) {
    return styles.selectedBorder;
  }
  return styles.unSelectedBorder;
};
let purchaseUpdateSubscription;
let purchaseErrorSubscription;

class BuyBidsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedPlanId: '',
      time: 'WEEKLY',
      packages: {},
      user: {},
      selectedPackage: [],
    };
    this.getItems();
  }
  requestPurchase = async (sku, planId, bids) => {
    this.setState({
      selectedPlanId: planId,
      bids,
    });
    try {
      await RNIap.requestPurchase(sku, false);
    } catch (err) {
      Alert.alert(err.message);
    }
  };
  requestSubscription = async (sku, planId, bids) => {
    this.setState({
      selectedPlanId: planId,
      bids,
    });
    try {
      await RNIap.requestSubscription(sku, false);
    } catch (err) {
      Alert.alert(err.message);
    }
  };
  goNext = async receipt => {
    console.log(receipt);
    const userData = JSON.parse(await AsyncStorage.getItem('userData'));
    axios
      .post(
        endpoint +
          (Platform.OS === 'ios' ? '/payment/ios' : '/payment/android'),
        {
          planID: this.state.selectedPlanId,
          jwt: userData.jwt,
          status: 'success',
          paymentGatewayResponse: receipt,
        },
      )
      .then(response => {
        Alert.alert('Purchase Succesful', 'Your purchase is succesful');
      })
      .catch(error => {
        Alert.alert('Server Error', 'Server Error');
      });
  };
  getItems = async () => {
    try {
      const products = await RNIap.getProducts(itemSkus);
      const subscriptions = await RNIap.getSubscriptions(itemSubs);
      this.setState({productList: products, subscriptionList: subscriptions});
    } catch (err) {
      console.log(err.code, err.message);
    }
  };
  // getSubscriptions = async () => {
  //   try {
  //     const products = await RNIap.getSubscriptions(itemSubs);
  //     this.setState({subscriptionsList: products});
  //   } catch (err) {
  //     console.log(err.code, err.message);
  //   }
  // };
  async componentDidMount() {
    const fetchData = async () => {
      const userData = JSON.parse(await AsyncStorage.getItem('userData'));
      this.setState({
        user: userData,
      });
      axios
        .post(endpoint, {action: 'get-buying-plans', jwt: userData.jwt})
        .then(response => {
          this.setState({
            packages: response.data,
            selectedPackage: response.data.weekly,
          });
        })
        .catch(error => {
          console.log('error');
        });
    };
    fetchData();
    try {
      await RNIap.initConnection();
      // const items = await RNIap.consumeAllItemsAndroid();
      // console.log('items', items);
    } catch (err) {
      console.log(err.code, err.message);
    }
    purchaseUpdateSubscription = purchaseUpdatedListener(async purchase => {
      const receipt = purchase.transactionReceipt;
      if (receipt) {
        try {
          const ackResult = await finishTransaction(purchase);
        } catch (ackErr) {
          console.log('ackErr', ackErr);
        }

        this.setState({receipt}, () => this.goNext(receipt));
      }
    });
    purchaseErrorSubscription = purchaseErrorListener(error => {
      // console.log('purchaseErrorListener', error);
    });
  }
  componentWillUnmount() {
    if (this.purchaseUpdateSubscription) {
      this.purchaseUpdateSubscription.remove();
      this.purchaseUpdateSubscription = null;
    }
    if (this.purchaseErrorSubscription) {
      this.purchaseErrorSubscription.remove();
      this.purchaseErrorSubscription = null;
    }
    RNIap.endConnection();
  }
  render() {
    Events.on('buyBidsBidChange', 'bid', newTotalBids => {
      if (typeof newTotalBids !== 'number') {
        newTotalBids = 0;
      }
      this.setState({
        user: {...this.state.user, bids: newTotalBids},
      });
    });
    const {weekly, monthly, 'pay-as-you-go': payAsYouGo} = this.state.packages;
    if (!this.state.packages.weekly) {
      return (
        <View style={styles.emptyView}>
          <Header
            screen={'Buy Bids'}
            userData={{
              name: 'Martin Smith-Whittaker',
              bidsLeft: 180,
              image: '',
            }}
          />
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View
        style={styles.mainContainer}
        contentContainerStyle={styles.contentStyle}>
        <View style={styles.mainContainer1}>
          <View style={styles.screenContainer}>
            <Text style={styles.screenText}>Buy Bids</Text>
            <Text style={styles.filter} />
          </View>
          <View style={styles.nameContainer}>
            <View style={styles.nameView}>
              <Text style={styles.nameText}>{this.state.user.username}</Text>
              <Text style={styles.bidsText}>
                {this.state.user.bids} bids left
              </Text>
            </View>
            <View style={styles.imageView}>
              <Image
                source={
                  this.state.user.avatar
                    ? {uri: endpoint + this.state.user.avatar}
                    : assets.images.totalBiddersImage
                }
                style={styles.image}
              />
            </View>
          </View>
        </View>
        <ScrollView style={styles.innerContainer}>
          <View style={styles.blueContainer}>
            <Text style={styles.bidRefund}>100% Bid Refund Until You Win</Text>
          </View>
          <View style={styles.timeList}>
            <View style={styles.packageView}>
              <TouchableOpacity
                style={renderBorderStyle(this.state.time, 'WEEKLY')}
                onPress={() => {
                  this.setState({
                    time: 'WEEKLY',
                    selectedPackage: weekly,
                  });
                }}>
                <Text style={renderTextStyle(this.state.time, 'WEEKLY')}>
                  WEEKLY
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.packageView}>
              <TouchableOpacity
                style={renderBorderStyle(this.state.time, 'MONTHLY')}
                onPress={() => {
                  this.setState({
                    time: 'MONTHLY',
                    selectedPackage: monthly,
                  });
                }}>
                <Text style={renderTextStyle(this.state.time, 'MONTHLY')}>
                  MONTHLY
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.packageView}>
              <TouchableOpacity
                style={renderBorderStyle(this.state.time, 'TOP-UP/PAYG')}
                onPress={() => {
                  this.setState({
                    time: 'TOP-UP/PAYG',
                    selectedPackage: payAsYouGo,
                  });
                }}>
                <Text style={renderTextStyle(this.state.time, 'TOP-UP/PAYG')}>
                  TOP-UP/PAYG
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.packages}>
            <BidsPackage
              type={'BEGINNER'}
              freeBids={this.state.selectedPackage[0].bonus}
              weeklyBids={this.state.selectedPackage[0].bids}
              perBids={this.state.selectedPackage[0]['cost-per-bid']}
              price={this.state.selectedPackage[0].price}
              planId={this.state.selectedPackage[0].plan_id}
              requestPurchase={this.requestPurchase}
              requestSubscription={this.requestSubscription}
              popular={false}
            />
            <BidsPackage
              type={'ADVANCED'}
              freeBids={this.state.selectedPackage[1].bonus}
              weeklyBids={this.state.selectedPackage[1].bids}
              perBids={this.state.selectedPackage[1]['cost-per-bid']}
              price={this.state.selectedPackage[1].price}
              planId={this.state.selectedPackage[1].plan_id}
              requestPurchase={this.requestPurchase}
              requestSubscription={this.requestSubscription}
              popular={
                this.state.time === 'WEEKLY' || this.state.time === 'MONTHLY'
              }
            />
            <BidsPackage
              type={'EXPERT'}
              freeBids={this.state.selectedPackage[2].bonus}
              weeklyBids={this.state.selectedPackage[2].bids}
              perBids={this.state.selectedPackage[2]['cost-per-bid']}
              price={this.state.selectedPackage[2].price}
              planId={this.state.selectedPackage[2].plan_id}
              requestPurchase={this.requestPurchase}
              requestSubscription={this.requestSubscription}
              popular={this.state.time === 'TOP-UP/PAYG'}
            />
          </View>
          <Text style={styles.bonus}>
            *BONUS BIDS AND BIDS WITHIN FREE TRIAL PERIOD ARE NON-REFUNDABLE
          </Text>
        </ScrollView>
      </View>
    );
  }
}

BuyBidsScreen.navigationOptions = () => ({
  headerStyle: {
    height: 0,
    title: '',
  },
});

export default BuyBidsScreen;
