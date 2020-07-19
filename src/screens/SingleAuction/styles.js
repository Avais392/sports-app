import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
  scrollView: {
    top: 100,
    marginTop: 10,
    marginBottom: 100,
  },
  nameView: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: 5,
    borderWidth: 3,
    borderColor: '#3c74b1',
    marginHorizontal: 1,
  },
  nameText: {
    textAlign: 'center',
    color: '#3c74b1',
    fontSize: 20,
    paddingVertical: 11,
    paddingHorizontal: 30,
  },
  descriptionView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    marginHorizontal: 4,
  },
  descriptionText: {
    color: '#3c74b1',
  },
  biddingHistory: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  headerView: {
    backgroundColor: '#000000',
    padding: 10,
  },
  headerText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  biddingDetail: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 14,
  },
  nonUnique: {
    color: '#000000',
    fontWeight: 'bold',
  },
  nonUniqueNumber: {},
  unique: {
    color: '#3c74b1',
    fontWeight: 'bold',
  },
  uniqueNumber: {
    color: '#3c74b1',
  },
  lowest: {
    color: '#bd2532',
    fontWeight: 'bold',
  },
  lowestNumber: {
    color: '#bd2532',
  },
  emptyView: {
    alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
  },
});

export default styles;
