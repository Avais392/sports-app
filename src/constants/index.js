import {Platform} from 'react-native';

export const constants = {
  productIds:
    Platform.OS === 'ios'
      ? ['01', '02', '03', '04', '05', '06', '7', '8', '9']
      : ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
};
