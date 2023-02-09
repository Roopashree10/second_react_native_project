import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headers: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
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

  textcontent: {
    alignSelf: 'stretch',
    color: 'black',
    fontSize: 17,
    overflow: 'hidden',
    height: 25,
    width: '100%',
  },

  newuserpopup: {
    borderRadius: 10,
    width: '90%',
    height: 350,
    backgroundColor: 'white',
    position: 'absolute',
    top: '20%',
    alignSelf: 'center',
  },

  popupscreentitle: {
    flexDirection: 'row',
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
    width: '100%',
    height: '10%',
  },

  label: {
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginBottom: 10,
  },

  inputView: {
    flexDirection: 'row',
    width: '90%',
    borderWidth: 1,
    borderColor: '#1e90ff',
    borderRadius: 5,
    height: 40,
    marginBottom: 20,
  },
  actions: {
    position: 'absolute',
    right: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
  },
  editpopup: {
    height: 25,
    paddingLeft: 10,
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
    paddingLeft: 20,
  },

  savebutton: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'green',
    width: 100,
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
  deleteactionpopup: {
    width: 150,
    borderWidth: 1,
    borderColor: 'grey',
    position: 'absolute',
    right: 80,
    top: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 25,
  },
  recentactionpopup: {
    width: 150,
    borderWidth: 1,
    borderColor: 'grey',
    position: 'absolute',
    right: 80,
    top: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 50,
  },
  favoriteactionpopup: {
    width: 150,
    borderWidth: 1,
    borderColor: 'grey',
    position: 'absolute',
    right: 80,
    top: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 50,
  },
});
