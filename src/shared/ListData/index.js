import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  Image,
  Text,
} from 'react-native';
import {
  AddDeleted,
  addFavorites,
  AddProduct,
  AddRecentData,
  AddShareData,
  Restore,
  SetData,
  setRecent,
  setRestoreRecent,
  setRestoreShared,
  setShared,
} from '../../store/actions';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import Popup from '../PopupComponent';

const Listdata = props => {
  const data = props.data;
  const [showactions, setShowActions] = useState(false);
  const [showpopupoption, setShowPopupOption] = useState(false);
  const [id, setId] = useState();
  const [editeddata, setEditedData] = useState();
  const [editvalue, setEditValue] = useState('');
  const dispatch = useDispatch();
  const screenName = props.screenName;
  const popup = useSelector(state => state.popup);

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
    setEditedData(JSON.parse(JSON.stringify(value)));
    setEditValue(JSON.parse(JSON.stringify(value.name)));
    setShowPopupOption(true);
    setShowActions(false);
  };

  const isFavourite = (value, index) => {
    const favValue = JSON.parse(JSON.stringify(value));
    favValue.isFavourite = favValue.isFavourite ? 0 : 1;
    const updatedData = JSON.parse(JSON.stringify(data));
    updatedData.splice(index, 1, favValue);
    if (favValue.isShared) {
      dispatch(setShared(updatedData));
      dispatch(addFavorites(favValue));
    } else {
      dispatch(SetData(updatedData));
      dispatch(addFavorites(favValue));
    }
    setShowActions(false);
    setId(0);
  };

  const editedscreen = () => {
    setShowPopupOption(false);
    setId(0);
    const afteredit = {...editeddata};
    afteredit.name = editvalue;
    if (afteredit.isShared === 0) {
      dispatch(AddRecentData(afteredit));
    } else if (afteredit.isShared) {
      dispatch(AddShareData(afteredit));
    } else {
      dispatch(AddProduct(afteredit));
    }
  };

  const restore = value => {
    const restoreDelete = JSON.parse(JSON.stringify(value));
    if (restoreDelete.isShared === 0) {
      dispatch(setRestoreRecent(restoreDelete));
    } else if (restoreDelete.isShared) {
      dispatch(setRestoreShared(restoreDelete));
    } else {
      dispatch(Restore(restoreDelete));
    }
  };

  const deleteitem = (value, index) => {
    const delValue = JSON.parse(JSON.stringify(value));
    const updatedData = JSON.parse(JSON.stringify(data));
    updatedData.splice(index, 1);
    setShowActions(false);
    if (delValue.isShared === 0) {
      dispatch(setRecent(updatedData));
    } else if (delValue.isShared) {
      dispatch(setShared(updatedData));
    } else {
      dispatch(SetData(updatedData));
    }
    dispatch(AddDeleted(delValue));
  };

  const RemoveFavorite = value => {
    const favValue = JSON.parse(JSON.stringify(value));
    favValue.isFavourite = 0;
    dispatch(addFavorites(favValue));
    setShowActions(false);
    setId(0);
    setShowActions(false);
    dispatch(AddShareData(favValue));
    dispatch(AddProduct(favValue));
  };

  const iteration = ({item, index}) => {
    return (
      <View
        key={index}
        style={[styles.card, {zIndex: item.id === id && showactions ? 1 : 0}]}>
        <View style={styles.data}>
          {item.isFavourite === 0 || screenName === 'Recents' ? (
            <Text numberOfLines={1} style={styles.textcontent}>
              {item.name}
            </Text>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <Text numberOfLines={1} style={styles.textcontent}>
                {item.name}
              </Text>
              <Image
                source={{
                  uri: 'https://purepng.com/public/uploads/large/purepng.com-golden-starstargeometricallydecagonconcavestardomgold-1421526502166lp0rn.png',
                }}
                style={{width: 20, height: 20}}
              />
            </View>
          )}
        </View>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => actionspopup(item)}>
            <Text style={{color: 'red', fontSize: 25}}>...</Text>
          </TouchableOpacity>
          {item.id === id && showactions && (
            <View style={styles.popup}>
              {(screenName === 'Shared' ||
                screenName === 'Home' ||
                screenName === 'Recents') && (
                <TouchableOpacity
                  style={styles.editpopup}
                  onPress={() => showeditpopup(item)}>
                  <Text style={{fontSize: 17, color: 'black'}}>EDIT</Text>
                </TouchableOpacity>
              )}
              {(screenName === 'Shared' || screenName === 'Home') && (
                <TouchableOpacity
                  style={styles.editpopup}
                  onPress={() => isFavourite(item, index)}>
                  {item.isFavourite === 0 ? (
                    <Text style={{fontSize: 17, color: 'black'}}>
                      FAVORITES
                    </Text>
                  ) : (
                    <Text style={{fontSize: 17, color: 'black'}}>
                      UNFAVORITES
                    </Text>
                  )}
                </TouchableOpacity>
              )}
              {(screenName === 'Shared' ||
                screenName === 'Home' ||
                screenName === 'Recents') && (
                <TouchableOpacity
                  style={styles.deletepopup}
                  onPress={() => {
                    deleteitem(item, index);
                  }}>
                  <Text style={{fontSize: 17, color: 'black'}}>DELETE</Text>
                </TouchableOpacity>
              )}
              {screenName === 'Delete Files' && (
                <TouchableOpacity
                  style={styles.deletepopup}
                  onPress={() => restore(item)}>
                  <Text>Restore</Text>
                </TouchableOpacity>
              )}
              {screenName === 'Favorites' && (
                <TouchableOpacity
                  style={styles.deletepopup}
                  onPress={() => RemoveFavorite(item)}>
                  <Text style={{fontSize: 17, color: 'black'}}>UNFAVORITE</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={styles.headers}>
        <View style={styles.title}>
          <Text style={{fontFamily: 'AbrilFatface-Regular'}}>Title</Text>
        </View>
      </View>
      <ScrollView>
        {data?.map((item, index) => {
          if (screenName === 'Favorites') {
            return item.isFavourite === 1 && iteration({item, index});
          }
          return iteration({item, index});
        })}
      </ScrollView>
      {showpopupoption && (
        <View style={styles.editpopupscreen}>
          <TextInput
            style={styles.editfield}
            value={editvalue}
            onChangeText={e => setEditValue(e)}
            multiline={true}
            textAlignVertical="top"
          />
          <TouchableOpacity
            style={styles.savebutton}
            onPress={() => editedscreen()}>
            <Text style={{color: 'black'}}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
      {popup && <Popup />}
    </>
  );
};

export default Listdata;
