import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: 300,
    height: 270,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  textView: {},
  text: {
    marginVertical: 4,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  buttonView: {
    backgroundColor: '#bd2532',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    padding: 15,
  },
});

export default styles;
