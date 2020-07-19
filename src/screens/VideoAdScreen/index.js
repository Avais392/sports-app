import React, {useState} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

import {
  IronSource,
  IronSourceSegment,
  IronSourceRewardedVideo,
  IronSourceInterstitials,
  IronSourceOfferwall,
  IronSourceBanner,
} from '@wowmaking/react-native-iron-source';

import styles from './styles';
import {TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get('window');
const segment = new IronSourceSegment();

class VideoAdScreen extends React.Component {
  state = {hasRewardedVideo: false};
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

    this.showRewardedVideo();
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
        this.props.navigation.goBack(null);
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
  // showOfferwall = () => {
  //   IronSourceOfferwall.showOfferwall();
  //   IronSourceOfferwall.addEventListener('ironSourceOfferwallReceivedCredits', res => {
  //     console.warn('Got credits', res)
  //   });
  // };
  grantConsent = () => {
    IronSource.setConsent(true);
  };

  withdrawConsent = () => {
    IronSource.setConsent(false);
  };
  render() {
    // this.props.navigation.goBack();
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.mainContainer}>
          <TouchableOpacity onPress={() => this.showRewardedVideo()}>
            <Text style={styles.button}>Show Rewarded. Video</Text>
          </TouchableOpacity>
          <Text>
            Video Ad. Screen {this.state.hasRewardedVideo ? 'true' : 'false'}
          </Text>
        </View>
      </ScrollView>
    );
  }
}
VideoAdScreen.navigationOptions = {
  title: '',
  headerStyle: {
    height: 0,
  },
};

export default VideoAdScreen;
