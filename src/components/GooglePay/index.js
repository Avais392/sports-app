import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import {
  GooglePay,
  RequestDataType,
  AllowedCardNetworkType,
  AllowedCardAuthMethodsType,
} from 'react-native-google-pay';
import styles from './styles';
const allowedCardNetworks = ['VISA', 'MASTERCARD'];
const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];

const gatewayRequestData = {
  cardPaymentMethod: {
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      gateway: 'example',
      gatewayMerchantId: 'exampleGatewayMerchantId',
    },
    allowedCardNetworks,
    allowedCardAuthMethods,
  },
  transaction: {
    totalPrice: '123',
    totalPriceStatus: 'FINAL',
    currencyCode: 'RUB',
  },
  merchantName: 'Example Merchant',
};

const directRequestData = {
  cardPaymentMethod: {
    tokenizationSpecification: {
      type: 'DIRECT',
      publicKey:
        'BOdoXP+9Aq473SnGwg3JU1aiNpsd9vH2ognq4PtDtlLGa3Kj8TPf+jaQNPyDSkh3JUhiS0KyrrlWhAgNZKHYF2Y=',
    },
    allowedCardNetworks,
    allowedCardAuthMethods,
  },
  transaction: {
    totalPrice: '123',
    totalPriceStatus: 'FINAL',
    currencyCode: 'PKR',
  },
  merchantName: 'Example Merchant',
};

const stripeRequestData = {
  cardPaymentMethod: {
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      gateway: 'stripe',
      gatewayMerchantId: '',
      stripe: {
        publishableKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
        version: '2018-11-08',
      },
    },
    allowedCardNetworks,
    allowedCardAuthMethods,
  },
  transaction: {
    totalPrice: '123',
    totalPriceStatus: 'FINAL',
    currencyCode: 'RUB',
  },
  merchantName: 'Example Merchant',
};

export default class App extends Component {
  componentDidMount() {
    // Set the environment before the payment request
    if (Platform.OS === 'android') {
      GooglePay.setEnvironment(GooglePay.ENVIRONMENT_TEST);
    }
  }

  payWithGooglePay = requestData => {
    // Check if Google Pay is available
   
    GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods).then(
      ready => {
        
        if (ready) {
          // Request payment token
          console.log('// Check if Google Pay is available')
          GooglePay.requestPayment(requestData)
            .then(this.handleSuccess)
            .catch(this.handleError);
        }
      },
    );
  };

  handleSuccess = token => {
    // Send a token to your payment gateway
    console.log(`token: ${token}`)
    Alert.alert('Success', `token: ${token}`);
  };

  handleError = error =>
    Alert.alert('Error', `${error.code}\n${error.message}`);

  render() {
    return (
      <View >
       
        <TouchableOpacity
         
          onPress={() => this.payWithGooglePay(directRequestData)}>
         {this.props.children}
        </TouchableOpacity>
       
      </View>
    );
  }
}
