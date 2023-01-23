import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  commonScreen: {
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    height: 50,
  },
  title: {
    justifyContent: 'center',
    marginLeft: '32%',
  },
  modal: {
    backgroundColor: 'lightblue',
    marginBottom: 0,
    marginLeft: 0,
    marginTop: 0,
    marginRight: '30%',
  },
  icons: {
    paddingLeft: 8,
    height: 50,
    width: '10%',
    justifyContent: 'center',
  },
  modaldata: {
    paddingTop: 30,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  button: {
    padding: 20,
    margin: 1,
    fontSize: 20,
    color: 'black',
    width: '80%',
  },
});
