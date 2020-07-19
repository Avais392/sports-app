import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '50%',
    padding: 5,
  },
  header: {
    backgroundColor: '#bd2532',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10,

    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  footer: {
    backgroundColor: '#bd2532',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  headerTextView: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    
  },
  footerTextView: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,
    textTransform:'uppercase'
    
  },

  descriptionView: {
    alignSelf: 'center',
    marginHorizontal: 5,
    backgroundColor: '#12339c',
    paddingVertical: 4,
    paddingHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  descriptionText: {
    color: '#ffffff',
    fontSize: 33,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  imageView: {
    alignSelf: 'center',
    width: '100%',
    height: 200,
    padding: 5,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },

  rrpView: {
    position: 'absolute',
    right: '0%',
    bottom: 100,
    marginRight: 20,
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: '#3b3b3b',
    borderColor: '#ffffff',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rrpText: {
    color: '#ffffff',
    fontSize: 12,
  },
  rrpValue: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lowestBidderView: {
    position: 'absolute',
    bottom: '0%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  lowestBidderImageView: {
    width: 79,
    height: 79,
    marginBottom: 30,
    marginLeft: 19,
  },
  lowestBidderImage: {
    borderRadius: 40,
    width: '100%',
    height: '100%',
  },
  bidderView: {
    marginLeft: 16,
  },
  bidderText: {
    color: '#3c74b1',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bidderValue: {
    color: '#3c74b1',
    fontSize: 14,
  },
  totalBiddersView: {
    backgroundColor: '#3c74b1',
    position: 'absolute',
    right: '0%',
    marginRight: 20,
    padding: 4,
    borderRadius: 3,
    alignItems: 'center',
  },
  totalBidders: {
    height: 26,
    width: 26,
    alignSelf: 'center',
  },
  totalBiddersImage: {
    width: '100%',
    height: '100%',
  },
  totalBiddersText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default styles;
