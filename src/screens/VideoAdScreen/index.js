import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import endpoint from '../../config';
import {Events} from '../../assets/Events';

import {
  IronSource,
  IronSourceSegment,
  IronSourceRewardedVideo,
  IronSourceInterstitials,
  IronSourceOfferwall,
  IronSourceBanner,
} from '@wowmaking/react-native-iron-source';

import styles from './styles';

const {width, height} = Dimensions.get('window');
const segment = new IronSourceSegment();

class VideoAdScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {hasRewardedVideo: false};
  rewardUserWithBids = async () => {
    const userData = JSON.parse(await AsyncStorage.getItem('userData'));
    console.log('Video Done', userData);
    axios
      .post(endpoint + '/user/watched-video', {
        jwt: userData.jwt,
      })
      .then(response => {
        console.log('new', response.data);
        // AsyncStorage.setItem('userData', {
        //   ...userData,
        //   bids: response.data.extra_bids,
        // });
      })
      .catch(error => {
        console.log('error');
      });
  };
  componentDidMount() {
    // It’s recommended to set consent prior to SDK Initialization.
    // IronSource.setConsent(true);

    IronSource.initializeIronSource('c7174b45', 'demoapp', {
      validateIntegration: false,
    }).then(() => {
      IronSourceRewardedVideo.addEventListener(
        'ironSourceRewardedVideoAvailable',
        () => {
          this.setState({hasRewardedVideo: true});
          console.warn('Rewarded video became available');
        },
      );
      IronSourceRewardedVideo.addEventListener(
        'ironSourceRewardedVideoUnavailable',
        () => {
          this.setState({hasRewardedVideo: false});
        },
      );
      IronSourceRewardedVideo.initializeRewardedVideo();
    });
  }

  showRewardedVideo = () => {
    if (!this.state.hasRewardedVideo) {
      console.warn('Rewarded video is not available');
    }

    const onClose = () => IronSourceRewardedVideo.removeAllListeners();

    IronSourceRewardedVideo.addEventListener(
      'ironSourceRewardedVideoAdRewarded',
      res => {
        console.warn('Rewarded!', res);
        this.rewardUserWithBids();
      },
    );

    IronSourceRewardedVideo.addEventListener(
      'ironSourceRewardedVideoClosedByUser',
      onClose,
    );
    IronSourceRewardedVideo.addEventListener(
      'ironSourceRewardedVideoClosedByError',
      onClose,
    );

    IronSourceRewardedVideo.isRewardedVideoAvailable().then(available => {
      if (available) {
        IronSourceRewardedVideo.showRewardedVideo();
      } else {
        console.warn('No Video available');
      }
    });
  };
  grantConsent = () => {
    IronSource.setConsent(true);
  };

  withdrawConsent = () => {
    IronSource.setConsent(false);
  };
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.showRewardedVideo()}>
          <View>{this.props.children}</View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default VideoAdScreen;
