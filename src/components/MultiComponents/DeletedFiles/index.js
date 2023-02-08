import {useRoute} from '@react-navigation/native';
import React from 'react';

import {useSelector} from 'react-redux';
import Listdata from '../../CommonComponent';
import Modal from '../../Modal';

const DeleteFiles = () => {
  const deleted = useSelector(state => state.isDeleted);
  const routes = useRoute();
  const screenName = routes.name;
  // const [showactions, setShowActions] = useState(false);
  // const [id, setId] = useState();
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
  // const restore = value => {
  //   const restoreDelete = JSON.parse(JSON.stringify(value));
  //   if (restoreDelete.isShared) {
  //     dispatch(setRestoreShared(restoreDelete));
  //   } else {
  //     dispatch(Restore(restoreDelete));
  //   }
  // };

  // const iteration = ({item, index}) => {
  //   return (
  //     <View
  //       key={index}
  //       style={[
  //         styles.card,
  //         {zIndex: item.id === id && showactions ? 100 : 0},
  //       ]}>
  //       <View style={styles.data}>
  //         <Text style={{color: 'black', fontSize: 17}}>{item.name}</Text>
  //       </View>
  //       <View style={styles.actions}>
  //         {item.id === id && showactions && (
  //           <View style={styles.popup}>
  //             <TouchableOpacity
  //               style={styles.editpopup}
  //               onPress={() => restore(item)}>
  //               <Text>Restore</Text>
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
      <Listdata screenName={screenName} data={deleted} />
      {/* <View style={styles.headers}>
        <View style={styles.title}>
          <Text style={{fontFamily: 'AbrilFatface-Regular'}}>Title</Text>
        </View>
        <View>
          <Text>Type</Text>
        </View>
      </View>
      <ScrollView>
        {deleted?.map((item, index) => {
          return iteration({item, index});
        })}
      </ScrollView> */}
    </>
  );
};

export default DeleteFiles;
