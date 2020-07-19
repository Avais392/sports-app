import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 4,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 7,
  },
  card: {
    width: '100%',
  },
  typeView: {
    backgroundColor: '#3c74b1',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  type: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  innerContainer: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(60, 116, 177, 0.1)',
  },
  imageView: {
    paddingBottom: 10,
  },
  yellowCircle: {
    backgroundColor: '#fdcb00',
    width: 100,
    height: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteCircle: {
    backgroundColor: '#fdcb00',
    borderColor: '#ffffff',
    borderWidth: 2,
    width: 93,
    height: 93,
    borderRadius: 93,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bidsValue: {
    color: '#3c74b1',
    fontSize: 28,
    fontWeight: 'bold',
  },
  bids: {
    color: '#3c74b1',
    fontWeight: 'bold',
  },
  image: {},
  bidsView: {},
  bidsText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottomContainer: {
    backgroundColor: '#3c74b1',
    width: '100%',
    alignItems: 'center',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
  },
  only: {
    fontSize: 10,
    marginTop: 7,
    color: '#ffffff',
  },
  perBidsPrice: {
    color: '#ecb622',
    fontSize: 16,
    fontWeight: 'bold',
  },
  perBids: {
    fontSize: 10,
    color: '#ffffff',
  },
  buyNowView: {
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 7,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#ecb622',
  },
  buyBow: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    fontSize: 12,
    marginBottom: 10,
    color: '#ffffff',
  },
  popularView: {
    height: 30,
    backgroundColor: '#bd2532',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    marginBottom: 20,
  },
  popular: {
    fontSize: 10,
    fontWeight: 'bold',
    paddingHorizontal: 4,
    color: '#ffffff',
  },
  emptyView: {
    height: 50,
  },
});

export default styles;
