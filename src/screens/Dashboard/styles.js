import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#bd2532',
    width: '100%',
    top: '0%',
    // position: 'absolute',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTextContainer: {
    marginTop: 28,
    marginLeft: 28,
  },
  bidsContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    // marginTop:30
   
  },
  bidsHeader: {
    backgroundColor: '#3c74b1',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  bidsHeaderText: {color: '#ffffff', margin: 5,alignSelf:'center',fontSize: 16,fontWeight:'bold'},
  screenContainer1: {
    alignItems: 'center',
    marginTop: 28,
    marginLeft: 28,
    flexDirection: 'row',
  },
  headerText: {
    marginLeft: 10,
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  filter: {
    color: '#c2c2c2',
    fontSize: 12,
    marginLeft: 10,
  },
  nameContainer: {
    margin: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // marginRight: 24,
  },
  nameView: {
    marginRight: 16,
    alignItems: 'flex-end',
  },
  nameText: {
    fontSize: 16,
    color: '#ffffff',
  },
  bidsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  imageView: {
    height: 100,
    width: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
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
  buyMoreBidsBtn: {
    borderRadius: 10,
    paddingTop: 5,
    color: 'black',
  },
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
