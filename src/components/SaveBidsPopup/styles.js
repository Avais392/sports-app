import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: 300,
    height: 270,
    alignItems: 'center',
  },
  bidTypeView: {
    width: '100%',
    backgroundColor: '#000000',
    opacity: 0.8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  bidTypeText: {
    color: '#ffffff',
    fontSize: 25,
  },
  imageView: {
    width: '75%',
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  offerView: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 45,
    backgroundColor: '#bd2532',
  },
  offerText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
