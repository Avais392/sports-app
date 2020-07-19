/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text, Platform, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import {constants} from '../../constants';
import RNIap, {
  purchaseErrorListener,
  purchaseUpdatedListener,
  ProductPurchase,
  PurchaseError,
  getProducts,
} from 'react-native-iap';
import axios from 'axios';
import endpoint from '../../config';
import AsyncStorage from '@react-native-community/async-storage';

class BidsPackage extends React.Component {
  purchaseUpdateSubscription = null;
  purchaseErrorSubscription = null;
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedPlanId: '',
    };
  }
  popularView = value => {
    if (value) {
      return (
        <View style={styles.popularView}>
          <Text style={styles.popular}>MOST POPULAR!</Text>
        </View>
      );
    }
    return <View style={styles.emptyView} />;
  };
  // requestPurchase = async sku => {
  //   try {
  //     await RNIap.requestPurchase(sku, false);
  //   } catch (err) {
  //     Alert.alert(err.message);
  //   }
  // };

  // requestSubscription = async sku => {
  //   try {
  //     await RNIap.requestSubscription(sku);
  //   } catch (err) {
  //     Alert.alert(err.message);
  //   }
  // };

  purchase = async (
    value,
    platform,
    planId,
    requestPurchase,
    requestSubscription,
  ) => {
    let sku = '';
    if (value === 625 || value === 1100 || value === 9000) {
      switch (value) {
        case 625:
          sku = Platform.OS === 'ios' ? '7' : '07';
          break;
        case 1100:
          sku = Platform.OS === 'ios' ? '8' : '08';
          break;
        case 9000:
          sku = Platform.OS === 'ios' ? '9' : '09';
          break;
      }
      this.props.requestPurchase(sku, planId, value);
    } else {
      switch (value) {
        case 100:
          sku = '01';
          break;
        case 565:
          sku = '02';
          break;
        case 1600:
          sku = '03';
          break;
        case 260:
          sku = '04';
          break;
        case 700:
          sku = '05';
          break;
        case 1650:
          sku = '06';
          break;
      }
      this.props.requestSubscription(sku, planId, value);
    }
  };

  // goNext = async () => {
  //   console.log('goNext');
  //   const userData = JSON.parse(await AsyncStorage.getItem('userData'));
  //   axios
  //     .post(endpoint, {
  //       plan_Id: this.state.selectedPlanId,
  //       jwt: userData.jwt,
  //       success: true,
  //     })
  //     .then(response => {
  //       Alert.alert('Purchase Succesful', 'Your purchase is succesful');
  //     })
  //     .catch(error => {
  //       Alert.alert('Server Error', 'Server Error');
  //     });
  // };

  // async componentDidMount() {
  //   const connection = await RNIap.initConnection();
  //   if (connection) {
  //     const productList = await RNIap.getProducts(constants.productIds);
  //     this.setState({
  //       products: productList,
  //     });
  //     this.purchaseUpdateSubscription = purchaseUpdatedListener(purchase => {
  //       this.setState(
  //         {
  //           receipt: purchase.transactionReceipt,
  //         },
  //         () => this.goNext(),
  //       );
  //     });
  //     this.purchaseErrorSubscription = purchaseErrorListener(async error => {
  //       const userData = JSON.parse(await AsyncStorage.getItem('userData'));
  //       axios
  //         .post(endpoint, {
  //           plan_Id: this.state.selectedPlanId,
  //           jwt: userData.jwt,
  //           success: true,
  //         })
  //         .then(response => {
  //           Alert.alert('Purchase Error1', JSON.stringify(error));
  //         });
  //     });
  //   } else {
  //     Alert.alert(
  //       'Connection Error',
  //       'Connection with store was unsuccessful. PLease try after some time.',
  //     );
  //   }
  // }

  // componentWillUnmount() {
  //   if (this.purchaseUpdateSubscription) {
  //     this.purchaseUpdateSubscription.remove();
  //     this.purchaseUpdateSubscription = null;
  //   }
  //   if (this.purchaseErrorSubscription) {
  //     this.purchaseErrorSubscription.remove();
  //     this.purchaseErrorSubscription = null;
  //   }
  //   RNIap.endConnection();
  // }
  render() {
    const {
      type,
      freeBids,
      weeklyBids,
      perBids,
      price,
      popular,
      planId,
    } = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.typeView}>
          <Text style={styles.type}>{type}</Text>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.imageView}>
            <View style={styles.yellowCircle}>
              <View style={styles.whiteCircle}>
                <Text style={styles.bidsValue}>{freeBids + weeklyBids}</Text>
                <Text style={styles.bids}>BIDS</Text>
              </View>
            </View>
          </View>
          <View style={styles.bidsView}>
            <Text style={styles.bidsText}>
              {freeBids} Free Bonus + {weeklyBids} Weekly bids
            </Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.only}>ONLY</Text>
          <Text style={styles.perBidsPrice}>£{perBids}</Text>
          <Text style={styles.perBids}>per bid</Text>
          <TouchableOpacity
            style={styles.buyNowView}
            onPress={() =>
              this.purchase(
                freeBids + weeklyBids,
                'ios',
                planId,
                this.props.requestPurchase,
                this.props.requestSubscription,
              )
            }>
            <Text style={styles.buyBow}>BUY NOW</Text>
          </TouchableOpacity>
          <Text style={styles.price}>For £{price}</Text>
        </View>
        {this.popularView(popular)}
      </View>
    );
  }
}

export default BidsPackage;
