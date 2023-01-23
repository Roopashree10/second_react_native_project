import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headers: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  inputView: {
    backgroundColor: '#ADD8E6',
    flexDirection: 'row',
    width: '70%',
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '15%',
    marginBottom: 10,
  },
  loginbtn: {
    backgroundColor: 'black',
    borderRadius: 5,
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
