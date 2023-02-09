import React from 'react';
import {useSelector} from 'react-redux';
import Modal from '../../shared/Modal';
import {useRoute} from '@react-navigation/native';
import Listdata from '../../shared/ListData';

const Favorites = () => {
  const favourites = useSelector(state => state.isFavorites);
  const routes = useRoute();
  const screenName = routes.name;

  // const actionspopup = value => {
  //   if (id === value.id) {
  //     setShowActions(false);
  //     setId(0);
  //   } else {
  //     setId(value.id);
  //     setShowActions(true);
  //   }
  // };
  // const showeditpopup = value => {
  //   setEditedData(value);
  //   setEditValue(value.name);
  //   setShowPopupOption(true);
  //   // setShowActions(false);
  // };

  // const editedscreen = () => {
  //   setShowPopupOption(false);
  //   const afteredit = {...editeddata};
  //   afteredit.name = editvalue;
  //   dispatch(AddProduct(afteredit));
  // };

  // const RemoveFavorite = value => {
  //   const favValue = JSON.parse(JSON.stringify(value));
  //   favValue.isFavourite = 0;
  //   dispatch(addFavorites(favValue));
  //   setShowActions(false);
  //   setId(0);
  //   setShowActions(false);
  //   dispatch(AddProduct(favValue));
  // };

  // const iteration = ({item, index}) => {
  //   return (
  //     item.isFavourite === 1 && (
  //       <View key={index} style={styles.card}>
  //         <View style={styles.data}>
  //           <Text style={{color: 'black', fontSize: 17}}>{item.name}</Text>
  //           <Image
  //             source={{
  //               uri: 'https://purepng.com/public/uploads/large/purepng.com-golden-starstargeometricallydecagonconcavestardomgold-1421526502166lp0rn.png',
  //             }}
  //             style={{width: 20, height: 20}}
  //           />
  //         </View>

  //         <View style={styles.actions}>
  //           {item.id === id && showactions && (
  //             <View style={styles.popup}>
  //               <TouchableOpacity
  //                 style={styles.editpopup}
  //                 onPress={() => showeditpopup(item)}>
  //                 <Text>Edit</Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity
  //                 style={styles.deletepopup}
  //                 onPress={() => RemoveFavorite(item)}>
  //                 <Text>Remove Favorite</Text>
  //               </TouchableOpacity>
  //             </View>
  //           )}
  //           <View>
  //             <TouchableOpacity onPress={() => actionspopup(item)}>
  //               <Text style={{color: 'red', fontSize: 25}}>...</Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       </View>
  //     )
  //   );
  // };
  return (
    <>
      <Modal screenName={screenName} />
      <Listdata screenName={screenName} data={favourites} />
      {/* <Listdata screenName={screenName} data={favourites} /> */}
      {/*
      <View style={styles.headers}>
        <View style={styles.title}>
          <Text style={{fontFamily: 'AbrilFatface-Regular'}}>Title</Text>
        </View>
        <View>
          <Text>Type</Text>
        </View>
      </View>

      <ScrollView>
        {favourites?.map((item, index) => {
          return iteration({item, index});
        })}
      </ScrollView> */}
      {/* {showpopupoption && (
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
      )} */}
    </>
  );
};

export default Favorites;
