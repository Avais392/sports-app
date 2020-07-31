import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Platform,
  Button,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const PaymentRequest = require('react-native-payments').PaymentRequest;
import styles from './styles';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

const APPLE_PAY_METHOD_DATA = {
  supportedMethods: ['apple-pay'],
  data: {
    merchantIdentifier: 'merchant.sportsauctionapp',
    supportedNetworks: ['visa', 'mastercard', 'amex'],
    countryCode: 'US',
    currencyCode: 'USD',
  },
};

const ANDROID_PAY_METHOD_DATA = {
  supportedMethods: ['android-pay'],
  data: {
    merchantIdentifier: '01476989710935806765p',
    supportedNetworks: ['visa', 'mastercard', 'amex'],
    environment: 'TEST',
    countryCode: 'US',
    currencyCode: 'USD',
    paymentMethodTokenizationParameters: {
      tokenizationType: 'NETWORK_TOKEN',
      parameters: {
        publicKey:
          'BOdoXP+9Aq473SnGwg3JU1aiNpsd9vH2ognq4PtDtlLGa3Kj8TPf+jaQNPyDSkh3JUhiS0KyrrlWhAgNZKHYF2Y=',
      },
    },
  },
};
const METHOD_DATA = [APPLE_PAY_METHOD_DATA, ANDROID_PAY_METHOD_DATA];

const DETAILS = {
  id: 'basic-example',
  displayItems: [
    {
      label: 'Movie Ticket',
      amount: {currency: 'USD', value: '15.00'},
    },
    {
      label: 'Grocery',
      amount: {currency: 'USD', value: '5.00'},
    },
  ],
  shippingOptions: [
    {
      id: 'economy',
      label: 'Economy Shipping',
      amount: {currency: 'USD', value: '0.00'},
      detail: 'Arrives in 3-5 days', // `detail` is specific to React Native Payments
    },
  ],
  total: {
    label: 'Enappd Store',
    amount: {currency: 'USD', value: '20.00'},
  },
};
const OPTIONS = {
  requestPayerName: true,
  // requestPayerPhone: true,
  // requestPayerEmail: true,
  // requestShipping: true,
};
const paymentRequest = new PaymentRequest(METHOD_DATA, DETAILS);

paymentRequest.addEventListener('shippingaddresschange', e => {
  const updatedDetails = this.getUpdatedDetailsForShippingAddress(
    paymentRequest.shippingAddress,
  );

  e.updateWith(updatedDetails);
});

paymentRequest.addEventListener('shippingoptionchange', e => {
  const updatedDetails = this.getUpdatedDetailsForShippingOption(
    paymentRequest.shippingOption,
  );

  e.updateWith(updatedDetails);
});

export default class ApplePay extends Component {
  check = () => {
    paymentRequest.canMakePayments().then(canMakePayment => {
      if (canMakePayment) {
        console.log('he    ');
        Alert.alert('Apple Pay', 'Apple Pay is available in this device');
      }
    });
  };

  pay = () => {
    paymentRequest.canMakePayments().then(canMakePayment => {
      if (canMakePayment) {
        console.log('Can Make Payment');
        paymentRequest.show().then(paymentResponse => {
          // Your payment processing code goes here
          console.log(paymentResponse);
          paymentResponse.complete('success');
          Alert.alert('Apple Pay', 'Success');
        });
      } else {
        console.log('Cant Make Payment');
      }
    });
  };
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal === null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Check</Text>
                <Text style={styles.sectionDescription}>
                  Ideally, you should check if Apple Pay is enable in
                  background, and then accordingly call the payment method.
                  Showing here on button action for demo purpose.
                </Text>
                <Button onPress={() => this.check()} title="Check Apple Pay" />
              </View>
            </View>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <View>
                  <Text style={styles.sectionTitle}>Cart</Text>
                  <Text style={styles.sectionDescription}>
                    Simulating your cart items in an app
                  </Text>
                </View>
              </View>
              <View style={styles.itemContainer}>
                <View style={styles.itemDetail}>
                  <Text style={styles.itemTitle}>Movie Ticket</Text>
                  <Text style={styles.itemDescription}>Some description</Text>
                </View>
                <View style={styles.itemPrice}>
                  <Text>USD 15.00</Text>
                </View>
              </View>
              <View style={styles.itemContainer}>
                <View style={styles.itemDetail}>
                  <Text style={styles.itemTitle}>Grocery</Text>
                  <Text style={styles.itemDescription}>Some description</Text>
                </View>
                <View style={styles.itemPrice}>
                  <Text>USD 5.00</Text>
                </View>
              </View>
              <View style={styles.totalContainer}>
                <View style={styles.itemDetail}>
                  <Text style={styles.itemTitle}>Total</Text>
                </View>
                <View style={styles.itemPrice}>
                  <Text>USD 20.00</Text>
                </View>
              </View>
              <Button
                style={styles.payButton}
                title="Pay with Apple Pay"
                onPress={() => this.pay()}
              />
              {/* <ApplePayButton /> */}
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
