import React from 'react';
import {View, Text, FlatList, ScrollView, Dimensions} from 'react-native';
import Header from '../../components/Header';
import Winner from '../../components/Winner';
import styles from './styles';
import WebView from 'react-native-webview';
// const $ = require('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');
const {width, height} = Dimensions.get('window');

const data = [
  {key: '1'},
  {key: '2'},
  {key: '3'},
  {key: '4'},
  {key: '5'},
  {key: '6'},
  {key: '7'},
  {key: '8'},
];
const WinnersScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <Header
        screen={'Winners'}
        // filter={filter}
        userData={{name: 'Martin Smith-Whittaker', bidsLeft: 180, image: ''}}
      />
      <WebView
        // injectedJavaScript={() => {
        // "$('header').hide();"
        // }}
        // javaScriptEnabled={true}
        source={{uri: 'https://sportsfansauctions.com/winners'}}
        style={{marginTop: -70,marginBottom:-400, width: width}}
      />
      {/* <ScrollView contentContainerStyle={{flex:1}}>
      <FlatList
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //     onRefresh={() => onRefresh()}
        //   />
        // }
        style={styles.list}
        numColumns={2}
      
        horizontal={false}
        columnWrapperStyle={{margin:2}}
        column
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <Winner />}
       
      />
     </ScrollView> */}
      {/* <Winner />
      <Winner /> */}

      {/* <Text>Winners</Text> */}
    </View>
  );
};

WinnersScreen.navigationOptions = () => ({
  title: '',
  headerStyle: {
    height: 0,
    // title: '',
  },
});
export default WinnersScreen;
