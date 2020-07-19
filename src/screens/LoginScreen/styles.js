import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
  },
  imageView: {
    width: '100%',
    marginVertical: 60,
    height: 70,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
  },
  textInputView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: '80%',
    marginBottom: 20,
    height: 44,
    borderColor: '#3c74b1',
    borderRadius: 6,
  },
  textInput: {
    marginLeft: 10,
    fontSize: 20,
    width: '100%',
    textAlign: 'left',
    color: '#3c74b1',
    height: 44,
  },
  goButton: {
    alignSelf: 'center',
    padding: 12,
    backgroundColor: '#3c74b1', //blue
    borderRadius: 6,
    marginBottom: 41,
  },
  goText: {
    fontSize: 20,
    color: '#ffffff',
  },
  registerButton: {
    alignSelf: 'center',
    backgroundColor: '#bd2532', //red
    borderRadius: 6,
    padding: 11.6,
  },
  registerText: {
    fontSize: 20,
    color: '#ffffff',
  },
  copyrightView: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  copyrightText: {
    fontSize: 10,
    color: '#3c74b1',
  },
  errorView: {
    marginTop: 20,
    alignSelf: 'center',
  },
  errorText: {
    color: '#ff6347',
    fontSize: 16,
  },
});

export default styles;
