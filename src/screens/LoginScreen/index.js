import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';
import endpoint from '../../config';
import {NetworkInfo} from 'react-native-network-info';
import AsyncStorage from '@react-native-community/async-storage';

import assets from '../../assets';
import styles from './styles';
import {TextInput} from 'react-native-gesture-handler';

const displayError = (error, value) => {
  if (error) {
    return (
      <View style={styles.errorView}>
        <Text style={styles.errorText}>{value}</Text>
      </View>
    );
  }
  return <View />;
};

const onSubmit = (username, password, props, setError, setErrorValue) => {
  const {navigate} = props.navigation;
  if (username.length === 0) {
    setError(true);
    setErrorValue('Please Enter Username');
    return;
  }
  if (password.length === 0) {
    setError(true);
    setErrorValue('Please Enter Password');
    return;
  }
  axios
    .post(endpoint, {action: 'login', username: username, password: password})
    .then(response => {
      if ('jwt' in response.data) {
        AsyncStorage.setItem(
          'userData',
          JSON.stringify({jwt: response.data.jwt, ...response.data.user}),
        );
        navigate('Tabs');
      }
      setError(true);
      setErrorValue('User Not Found');
    })
    .catch(error => {
      setError(true);
      setErrorValue('Server Error');
    });
  return;
};

const onCreateNew = (props, setError, setErrorValue) => {
  const {navigate} = props.navigation;
  NetworkInfo.getIPAddress().then(ipAddress => {
    axios
      .post(endpoint, {action: 'create-guest-user', ip: ipAddress})
      .then(async response => {
        if (response.data.jwt) {
          AsyncStorage.setItem('userData', JSON.stringify(response.data));
          navigate('Tabs');
        }
        setError(true);
        setErrorValue('Network Error');
      })
      .catch(error => {
        setError(true);
        setErrorValue('Network Error');
      });
  });
};

const LoginScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState('');

  const {splash} = assets.images;
  return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior="height">
      <View style={styles.imageView}>
        <Image style={styles.image} source={splash} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            value={username}
            placeholder={'Username'}
            placeholderTextColor={'#3c74b1'}
            onChangeText={event => setUsername(event)}
            maxLength={30}
            autoCapitalize={'none'}
          />
        </View>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            value={password}
            placeholder={'Password'}
            placeholderTextColor={'#3c74b1'}
            onChangeText={event => setPassword(event)}
            secureTextEntry={true}
            maxLength={30}
            autoCapitalize={'none'}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.goButton}
        onPress={() =>
          onSubmit(username, password, props, setError, setErrorValue)
        }>
        <Text style={styles.goText}>Existing Member Login!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => onCreateNew(props, setError, setErrorValue)}>
        <Text style={styles.registerText}>Create New & Start Bidding</Text>
      </TouchableOpacity>
      {displayError(error, errorValue)}
      <View style={styles.copyrightView}>
        <Text style={styles.copyrightText}>© 2020 Sports Fans Auctions</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.object,
};

export default LoginScreen;
