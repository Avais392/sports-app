import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  endsInView: {
    backgroundColor: '#3c74b1',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
   
  },
  endsText: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  timeView: {
    flexDirection: 'row',
    marginRight: 20,
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