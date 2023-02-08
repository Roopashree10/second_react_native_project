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
    backgroundColor: 'darkgrey',
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
  adduserpopup: {
    width: '10%',
    height: 45,
    marginLeft: '30%',
    alignItems: 'center',
    transform: [{rotate: '90deg'}],
  },

  verticaldots: {
    backgroundColor: '#1e90ff',
    borderRadius: 5,
  },
  modaldata: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  button: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: 'white',
    margin: 1,
    fontSize: 20,
    color: 'white',
    width: '80%',
  },
  logout: {
    position: 'absolute',
    bottom: 5,
    width: '100%',
  },
});
