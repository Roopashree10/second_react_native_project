import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Modal from '../../shared/Modal';
import {useRoute} from '@react-navigation/native';
import {projectsApi} from '../../services/api';
import Listdata from '../../shared/ListData';

const Home = () => {
  const routes = useRoute();
  const screenName = routes.name;
  const data = useSelector(state => state?.projects);

  useEffect(() => {
    projectsApi()
      .then(response => {
        console.log(response);
      })
      .catch(e => console.log(e));
  }, []);
  // const [showactions, setShowActions] = useState(false);
  // const [showpopupoption, setShowPopupOption] = useState(false);
  // const [id, setId] = useState();
  // const [editeddata, setEditedData] = useState();
  // const [editvalue, setEditValue] = useState('');
  // const dispatch = useDispatch();

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
  //   setEditedData(JSON.parse(JSON.stringify(value)));
  //   setEditValue(JSON.parse(JSON.stringify(value.name)));
  //   setShowPopupOption(true);
  //   setShowActions(false);
  // };

  // const isFavourite = (value, index) => {
  //   const favValue = JSON.parse(JSON.stringify(value));
  //   favValue.isFavourite = favValue.isFavourite ? 0 : 1;
  //   const updatedData = JSON.parse(JSON.stringify(data));
  //   updatedData.splice(index, 1, favValue);
  //   dispatch(addFavorites(favValue));
  //   dispatch(SetData(updatedData));
  //   setShowActions(false);
  //   setId(0);
  // };

  // const editedscreen = () => {
  //   setShowPopupOption(false);
  //   setId(0);
  //   const afteredit = {...editeddata};
  //   afteredit.name = editvalue;
  //   dispatch(AddProduct(afteredit));
  // };

  // const deleteitem = (value, index) => {
  //   const delValue = JSON.parse(JSON.stringify(value));
  //   const updatedData = JSON.parse(JSON.stringify(data));
  //   updatedData.splice(index, 1);
  //   setShowActions(false);
  //   dispatch(SetData(updatedData));
  //   dispatch(AddDeleted(delValue));
  // };

  // const iteration = ({item, index}) => {
  //   return (
  //     <View
  //       key={index}
  //       style={[styles.card, {zIndex: item.id === id && showactions ? 1 : 0}]}>
  //       <View style={styles.data}>
  //         {item.isFavourite === 0 ? (
  //           <Text numberOfLines={1} style={styles.textcontent}>
  //             {item.name}
  //           </Text>
  //         ) : (
  //           <View style={{flexDirection: 'row'}}>
  //             <Text style={{color: 'black', fontSize: 17}}>{item.name}</Text>
  //             <Image
  //               source={{
  //                 uri: 'https://purepng.com/public/uploads/large/purepng.com-golden-starstargeometricallydecagonconcavestardomgold-1421526502166lp0rn.png',
  //               }}
  //               style={{width: 20, height: 20}}
  //             />
  //           </View>
  //         )}
  //       </View>
  //       <View style={styles.actions}>
  //         <TouchableOpacity onPress={() => actionspopup(item)}>
  //           <Text style={{color: 'red', fontSize: 25}}>...</Text>
  //         </TouchableOpacity>
  //         {item.id === id && showactions && (
  //           <View style={styles.popup}>
  //             <TouchableOpacity
  //               style={styles.editpopup}
  //               onPress={() => showeditpopup(item)}>
  //               <Text style={{fontSize: 17, color: 'black'}}>Edit</Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               style={styles.editpopup}
  //               onPress={() => isFavourite(item, index)}>
  //               {item.isFavourite === 0 ? (
  //                 <Text>FAVORITES</Text>
  //               ) : (
  //                 <Text>UNFAVORITES</Text>
  //               )}
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               style={styles.deletepopup}
  //               onPress={() => {
  //                 deleteitem(item, index);
  //               }}>
  //               <Text style={{fontSize: 17, color: 'black'}}>Delete</Text>
  //             </TouchableOpacity>
  //           </View>
  //         )}
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
      </View> */}

      {/* <ScrollView>
        {data?.map((item, index) => {
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

export default Home;
