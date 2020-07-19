import React from 'react';
import {View, Text, ScrollView,Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import styles from './styles';

import InstructionStep from '../../components/InstructionStep';

const {width ,height}=Dimensions.get("window")

const HelpScreen = props => {
  return (
    // <ScrollView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        {/* <InstructionStep /> */}
        <WebView
          source={{uri: 'https://sportsfansauctions.com/how-to-play'}}
          style={{marginTop: -70,width:width}}
        />

        {/* <Text>Help</Text> */}
      </View>
    // </ScrollView>
  );
};
HelpScreen.navigationOptions = {
  title: '',
  headerStyle: {
    height: 0,
  },
};

export default HelpScreen;
