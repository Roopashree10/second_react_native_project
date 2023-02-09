import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headers: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    height: 50,
    alignItems: 'center',
  },

  title: {
    padding: 5,
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '65%',
  },
  card: {
    flexDirection: 'row',
    height: 50,
  },
  data: {
    justifyContent: 'center',
    paddingLeft: 15,
    width: '80%',
  },

  container: {
    flex: 1,
  },

  id: {
    padding: 5,
    paddingLeft: 20,
    justifyContent: 'center',
  },

  titlestyle: {
    color: 'red',
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: 150,
    borderWidth: 1,
    borderColor: 'grey',
    position: 'absolute',
    right: 80,
    top: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 75,
  },
  editpopup: {
    height: 25,
    paddingLeft: 10,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  editpopupscreen: {
    width: '80%',
    position: 'absolute',
    top: 300,
    alignSelf: 'center',
  },
  editfield: {
    borderRadius: 20,
    height: 200,
    backgroundColor: 'lightblue',
    fontSize: 17,
  },

  savebutton: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'green',
    width: 80,
    height: 40,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  deletepopup: {
    height: 25,
    paddingLeft: 10,
    justifyContent: 'center',
  },
});
