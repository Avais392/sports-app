import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    // height: 150,
    // borderRadius: 5,
    margin: 5,
  },
  imgContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 50,
  },
  textView:{
    backgroundColor: '#3c74b1',
    // padding: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
    borderRadius:5,
    fontWeight:'bold',
    width:50,
    height:50,
  },
  instructionNumber: {
   color: '#ffffff',
    fontSize: 22,
    textTransform: 'uppercase',
  },
  
});

export default styles;
