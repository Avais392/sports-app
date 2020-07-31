import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import styles from './styles';

import InstructionStep from '../../components/InstructionStep';

const {width, height} = Dimensions.get('window');

const HelpScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <WebView
        source={{uri: 'https://sportsfansauctions.com/how-to-play'}}
        style={{marginTop: -70,marginBottom:-400,  width: width}}
      />
    </View>
  );
};
HelpScreen.navigationOptions = {
  title: '',
  headerStyle: {
    height: 0,
  },
};

export default HelpScreen;
