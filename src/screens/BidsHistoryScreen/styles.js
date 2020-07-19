import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 0,
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
  list: {
    top: 100,
    marginTop: 10,
    width: '95%',
    marginBottom: 100,
  },
  buttonView: {
    backgroundColor: '#bd2532',
    borderWidth: 1,
    height: 64,
    width: 64,
    borderRadius: 32,
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {},
  optionView: {
    alignSelf: 'flex-end',
    backgroundColor: '#bd2532',
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  optionText: {
    fontSize: 16,
    color: '#ffffff',
  },
  emptyView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
