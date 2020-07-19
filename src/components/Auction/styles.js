import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    borderRadius: 5,
    marginBottom: 15,
  },
  nameView: {
    width: '100%',
    backgroundColor: '#3c74b1',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    // marginBottom: 5,
  },
  nameText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    paddingVertical: 11,
    paddingHorizontal: 30,
  },
  endsInView: {
    backgroundColor: '#3c74b1',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
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
    height: 35,
    width: 35,
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