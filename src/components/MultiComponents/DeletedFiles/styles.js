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
    top: 13,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  editpopup: {
    height: 25,
    paddingLeft: 10,
    justifyContent: 'center',
  },
});
