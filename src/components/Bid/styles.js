import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bidsOption: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#3c74b1',
    paddingHorizontal: 15,
  },
  selectedBidText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  unSelectedBidText: {
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.5,
    color: '#ffffff',
  },
  bidsSection: {
    width: '100%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  poundView: {},
  poundText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3c74b1',
  },
  textInputView: {
    borderWidth: 1,
    borderColor: '#ffffff',
    borderBottomColor: '#3c74b1',
    alignItems: 'flex-end',
    paddingLeft: 50,
    marginLeft: 20,
    maxWidth: Dimensions.get('screen').width - 200,
  },
  textInput: {
    width: 150,
    fontSize: 40,
    color: '#3c74b1',
  },
  bidButtonView: {
    height: 48,
    width: 52,
    backgroundColor: '#bd2532',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 30,
  },
  bidButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  spreadDescriptionText: {
    color: '#3c74b1',
    fontSize: 12,
    textAlign: 'right',
    paddingRight: 20,
  },
  emptySpace: {
    height: 20,
  }
});

export default styles;
