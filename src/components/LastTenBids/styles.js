import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    margin: 10,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },
  headerView: {
    backgroundColor: '#000000',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingVertical: 10,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  row: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateTime: {
    flexDirection: 'row',
  },
  date: {
    marginRight: 20,
    fontWeight: 'bold',
  },
  time: {
    fontWeight: 'bold',
  },
  priceView: {},
  price: {
    fontWeight: 'bold',
  },
});

export default styles;
