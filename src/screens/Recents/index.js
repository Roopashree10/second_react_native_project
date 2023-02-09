import React from 'react';
import {useSelector} from 'react-redux';
import Modal from '../../shared/Modal';
import {useRoute} from '@react-navigation/native';
import Listdata from '../../shared/ListData';

const Recent = () => {
  const data = useSelector(state => state?.recent);
  const routes = useRoute();
  const screenName = routes.name;

  // const showeditpopup = value => {
  //   setEditedData(JSON.parse(JSON.stringify(value)));
  //   setEditValue(JSON.parse(JSON.stringify(value.name)));
  //   setShowPopupOption(true);
  //   setShowActions(false);
  // };

  // const actionspopup = value => {
  //   if (id === value.id) {
  //     setShowActions(false);
  //     setId(0);
  //   } else {
  //     setId(value.id);
  //     setShowActions(true);
  //   }
  // };

  // const editedscreen = () => {
  //   setShowPopupOption(false);
  //   setId(0);
  //   const afteredit = {...editeddata};
  //   afteredit.name = editvalue;
  //   dispatch(AddRecentProduct(afteredit));
  // };

  // const deleteitem = value => {
  //   setShowActions(false);
  //   dispatch(RemoveProduct(value));
  // };

  // const iteration = ({item, index}) => {
  //   return (
  //     <View key={index} style={styles.card}>
  //       <View style={styles.data}>
  //         <Text style={{color: 'black', fontSize: 17}}>{item.name}</Text>
  //       </View>
  //       <View style={styles.actions}>
  //         {item.id === id && showactions && (
  //           <View style={styles.popup}>
  //             <TouchableOpacity
  //               style={styles.editpopup}
  //               onPress={() => showeditpopup(item)}>
  //               <Text>Edit</Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               style={styles.deletepopup}
  //               onPress={() => deleteitem(item)}>
  //               <Text>Delete</Text>
  //             </TouchableOpacity>
  //           </View>
  //         )}
  //         <View>
  //           <TouchableOpacity onPress={() => actionspopup(item)}>
  //             <Text style={{color: 'red', fontSize: 25}}>...</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };
  return (
    <>
      <Modal screenName={screenName} />
      <Listdata screenName={screenName} data={data} />
      {/* <View style={styles.headers}>
        <View style={styles.title}>
          <Text style={{fontFamily: 'AbrilFatface-Regular'}}>Title</Text>
        </View>
        <View>
          <Text>Type</Text>
        </View>
      </View>

      <ScrollView>
        {data?.map((item, index) => {
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
      )} */}
    </>
  );
};

export default Recent;
