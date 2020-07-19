import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#3c74b1',
    alignItems: 'center',
    justifyContent: 'space-between',
    width:150,
    height:150,
    borderRadius:5,
    margin:5
   
   
  },
  imgContainer: {
    width:'100%',
    height:'100%',
   alignSelf:'center',
   justifyContent:'space-evenly',
   alignItems: 'center',
  },
  textView: {
    color: '#ffffff',
    fontSize: 16,
    textTransform:'uppercase'
  },
  cellView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  singleCell: {
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: 3,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    color: '#ffffff',
    fontSize: 22,
  },
  timeUnit: {
    color: '#ffffff',
    fontSize: 10,
  },
});

export default styles;