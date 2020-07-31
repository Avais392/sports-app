import {StyleSheet} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  scrollView: {backgroundColor: Colors.lighter},
  engine: {position: 'absolute', right: 0},
  body: {
    backgroundColor: Colors.white,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  sectionContainer: {marginTop: 32, paddingHorizontal: 24},
  itemContainer: {
    marginTop: 12,
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'row',
  },
  totalContainer: {
    marginTop: 12,
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: '#cccccc',
    borderTopWidth: 1,
    paddingTop: 10,
    marginBottom: 20,
  },
  itemDetail: {flex: 2},
  itemTitle: {fontWeight: '500', fontSize: 18},
  itemDescription: {fontSize: 12},
  itemPrice: {flex: 1},
  sectionTitle: {fontSize: 24, fontWeight: '600', color: Colors.black},
  sectionDescription: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {fontWeight: '700'},
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default styles;
