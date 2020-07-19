import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  mainContainer1: {
    backgroundColor: '#bd2532',
    width: '100%',
    top: '0%',
    position: 'absolute',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  screenContainer: {
    marginTop: 28,
    marginLeft: 28,
  },
  screenContainer1: {
    alignItems: 'center',
    marginTop: 28,
    marginLeft: 28,
    flexDirection: 'row',
  },
  screenText: {
    marginLeft: 10,
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  filter: {
    color: '#c2c2c2',
    fontSize: 12,
    marginLeft: 10,
  },
  nameContainer: {
    marginTop: 35,
    flexDirection: 'row',
    marginRight: 24,
  },
  nameView: {
    marginRight: 16,
    alignItems: 'flex-end',
  },
  nameText: {
    fontSize: 14,
    color: '#ffffff',
  },
  bidsText: {
    fontSize: 12,
    color: '#ffffff',
  },
  imageView: {
    height: 44,
    width: 44,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
  },
  innerContainer: {
    top: 100,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 100,
  },
  blueContainer: {
    paddingHorizontal: 10,
    backgroundColor: '#3c74b1',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    width: '100%',
    paddingBottom: 20,
  },
  bidRefund: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#ffffff',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  sevenFree: {
    marginTop: 15,
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  free: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  selectBidPack: {
    marginTop: 10,
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  nothing: {
    fontSize: 20,
  },
  bonus: {
    color: '#000000',
    fontSize: 8,
    marginBottom: 5,
    textAlign: 'center',
  },
  timeList: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignSelf: 'center',
    paddingVertical: 20,
  },
  packageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unSelectedText: {
    color: '#000000',
    opacity: 0.5,
  },
  selectedText: {
    color: '#bd2532',
  },
  unSelectedBorder: {
    padding: 4,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
  selectedBorder: {
    padding: 4,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#bd2532',
  },
  packages: {
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  emptyView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
