import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useDispatch} from 'react-redux';
import Icon from '../IcoMoon';
import {setTitle} from '../Redux/actions';
import styles from './styles';

const Modal = props => {
  const [isvisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const title = props.screenName;
  const navigation = useNavigation();

  const Headings = ['Home', 'Recents', 'Favorites', 'Shared', 'Delete Files'];

  const clicked = data => {
    dispatch(setTitle(data));
    setIsVisible(false);
    return navigation.navigate(data);
  };
  return (
    <View style={styles.commonScreen}>
      <View style={styles.icons}>
        <Icon onPress={() => setIsVisible(!isvisible)} name="menu" size={30} />
      </View>
      <View style={styles.title}>
        <Text style={{fontSize: 20}}>{title}</Text>
      </View>
      <ReactNativeModal
        style={styles.modal}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        onBackdropPress={() => setIsVisible(false)}
        isVisible={isvisible}>
        <View style={styles.modaldata}>
          {Headings.map(data => {
            console.log(title === data, title, data);

            return (
              <TouchableOpacity
                style={title === data && {backgroundColor: 'blue'}}
                onPress={() => clicked(data)}>
                <Text style={styles.button}>{data}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default Modal;
