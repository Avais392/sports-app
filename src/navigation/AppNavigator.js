import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import TabNavigation from './BottomTabs';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SingleAuction from '../screens/SingleAuction';

const Stack = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Tabs: {
    screen: TabNavigation,
    navigationOptions: {
      headerShown: false,
    },
  },
  SingleAuction: {
    screen: SingleAuction,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(Stack);
