import React, {useState} from 'react';
import styles from './styles';
// import {useState} from 'react';
// import {ScrollView, Text, View} from 'react-native';
// import {DataTable} from 'react-native-paper';
import {View, Text, TouchableOpacity, FlatList, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AddProduct, RemoveProduct} from '../Redux/actions';
import Modal from '../Modal';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {AddProduct} from '../Redux/actions';

const ListData = () => {
  const [showactions, setShowActions] = useState(false);
  const [showpopupoption, setShowPopupOption] = useState(false);
  const [id, setId] = useState();
  const [editeddata, setEditedData] = useState();
  const [editvalue, setEditValue] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state?.projects);

  const actionspopup = value => {
    if (id === value.id) {
      setShowActions(false);
      setId(0);
    } else {
      setId(value.id);
      setShowActions(true);
    }
  };
  const showeditpopup = value => {
    setEditedData(value);
    setEditValue(value.title);
    setShowPopupOption(true);
    setShowActions(false);
  };

  const editedscreen = () => {
    setShowPopupOption(false);
    const afteredit = {...editeddata};
    afteredit.title = editvalue;
    dispatch(AddProduct(afteredit));
  };

  const deleteitem = value => {
    setShowActions(false);
    dispatch(RemoveProduct(value));
  };

  const iteration = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.data}>
          <Text style={{color: 'black'}}>{item.name}</Text>
        </View>
        <View style={styles.actions}>
          {item.id === id && showactions && (
            <View style={styles.popup}>
              <TouchableOpacity
                style={styles.editpopup}
                onPress={() => showeditpopup(item)}>
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deletepopup}
                onPress={() => deleteitem(item)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          <View>
            <TouchableOpacity onPress={() => actionspopup(item)}>
              <Text style={{color: 'red'}}>type</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <Modal />
      <View style={styles.headers}>
        <View style={styles.title}>
          <Text style={{fontFamily: 'AbrilFatface-Regular'}}>Title</Text>
        </View>
        <View>
          <Text>Type</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={iteration}
        keyExtractor={item => item?.id?.toString()}
      />
      {showpopupoption && (
        <View style={styles.editpopupscreen}>
          <TextInput
            style={styles.editfield}
            value={editvalue}
            onChangeText={e => setEditValue(e)}
            multiline={true}
          />
          <TouchableOpacity
            style={styles.savebutton}
            onPress={() => editedscreen()}>
            <Text style={{color: 'black'}}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default ListData;
