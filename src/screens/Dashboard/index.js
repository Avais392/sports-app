import React, {useState, useEffect} from 'react';
import {Share, View, Text, Image, Button} from 'react-native';
import {CheckBox} from 'react-native-elements';
import styles from './styles';
import assets from '../../assets';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import endpoint from '../../config';
import {Events} from '../../assets/Events';

import DashboardButton from '../../components/DashboardButton';
import {ScrollView} from 'react-native-gesture-handler';
import VideoAdScreen from '../VideoAdScreen';

const data = [
  {status: true},
  {status: false},
  {status: false},
  {status: true},
  {status: true},
];

const DashboardScreen = props => {
  const {navigation} = props;
  const [auctions, setAuctions] = useState([]);
  const [user, setUser] = useState({});
  const [filter, setFilter] = useState('SHOW_ALL');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userData = JSON.parse(await AsyncStorage.getItem('userData'));
      setUser(userData);
      // axios
      //   .post(endpoint, {action: 'get-auction-list', jwt: userData.jwt})
      //   .then(response => {
      //     if (response.data.err) {
      //       setAuctions([]);
      //     } else {
      //       setAuctions(response.data);
      //     }
      //   })
      //   .catch(error => {
      //     setAuctions([]);
      //     // console.log('error');
      //   });
    };
    fetchData();
  }, []);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.nameContainer}>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>{user.username}</Text>
            <Text style={styles.bidsText}>{user.bids} bids left</Text>
            <View style={styles.buyMoreBidsBtn}>
              <Button title="BUY MORE BIDS" color="#fcc92e" />
            </View>
          </View>
          <View style={styles.imageView}>
            <Image
              source={
                user.avatar
                  ? {uri: endpoint + user.avatar}
                  : assets.images.totalBiddersImage
              }
              style={styles.image}
            />
          </View>
        </View>
      </View>
      {/* <CheckBox
            title={'MOT'}
            checked={true}
            style={{width: '100%'}}
            onPress={() => {}}
          /> */}
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            // Top: 300,
          }}>
          <View style={styles.bidsContainer}>
            <View style={styles.bidsHeader}>
              <Text style={styles.bidsHeaderText}>EARNED BIDS CHECKLIST</Text>
            </View>
            {data.map((item, index) => (
              <CheckBox
                title={'MOT'}
                checked={item.status}
                containerStyle={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                }}
                textStyle={item.status ? {color: 'red'} : null}
                checkedColor={item.status ? 'red' : null}
                onPress={() => {}}
              />
            ))}
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <DashboardButton onPress={()=>onShare()} />
            {/* <VideoAdScreen></VideoAdScreen> */}
            <DashboardButton onPress={()=>props.navigation.navigate('VideoAd')}/>
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
};

DashboardScreen.navigationOptions = () => ({
  title: '',

  headerStyle: {
    height: 0,
    title: '',
  },
});

export default DashboardScreen;
