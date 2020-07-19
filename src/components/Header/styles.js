import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
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
});

export default styles;
