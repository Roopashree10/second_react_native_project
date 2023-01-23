import {useEffect, useState} from 'react';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  AddProduct,
  RemoveProduct,
  SetData,
  setDeleted,
  setFavorite,
} from '../../Redux/actions';
import styles from './styles';
import Modal from '../../Modal';
import {TextInput} from 'react-native-gesture-handler';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';

const Home = () => {
  const [showactions, setShowActions] = useState(false);
  const [showpopupoption, setShowPopupOption] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [id, setId] = useState();
  const [editeddata, setEditedData] = useState();
  const [editvalue, setEditValue] = useState('');
  const dispatch = useDispatch();
  const routes = useRoute();
  console.log(routes.params);
  const {email, password} = routes.params;
  const screenName = routes.name;
  const data = useSelector(state => state?.projects);

  useEffect(() => {
    console.log(email, password, routes.params);
    const url =
      'https://vxk5y6ogyb.execute-api.us-east-1.amazonaws.com/dev/login';
    const home = async () => {
      await axios
        .post(url, {
          email: email,
          password: password,
        })
        .then(async resp => {
          console.log(resp);
          await axios
            .get(
              'https://vxk5y6ogyb.execute-api.us-east-1.amazonaws.com/dev/getMyProjects?type=PROJECT',
              {
                headers: {
                  Authorization: `Bearer ${resp.data.token}`,
                },
              },
            )
            .then(response => {
              dispatch(SetData(response.data.myProjects));
              response.data.myProjects.forEach(element => {
                if (element.isFavourite) {
                  dispatch(setFavorite(element));
                }
                if (element.isDeleted) {
                  dispatch(setDeleted(element));
                }
              });
              setIsLoading(false);
            })
            .catch(e => console.log(e));
        });
    };
    home();
  }, []);

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
    setEditValue(value.name);
    setShowPopupOption(true);
    setShowActions(false);
  };

  const editedscreen = () => {
    setShowPopupOption(false);
    const afteredit = {...editeddata};
    afteredit.name = editvalue;
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
          <Text style={{color: 'black', fontSize: 17}}>{item.name}</Text>
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
              <Text style={{color: 'red'}}>...</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <Modal screenName={screenName} />
      <View style={styles.headers}>
        <View style={styles.title}>
          <Text style={{fontFamily: 'AbrilFatface-Regular'}}>Title</Text>
        </View>
        <View>
          <Text>Type</Text>
        </View>
      </View>
      {isloading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={data}
          renderItem={iteration}
          keyExtractor={item => item?.id?.toString()}
        />
      )}
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

export default Home;
