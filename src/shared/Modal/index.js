import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import Icon from '../Icon';
// import image from '../Images';
import {setPopup, setTitle} from '../../store/actions';
import styles from './styles';

const Modal = props => {
  const [isvisible, setIsVisible] = useState(false);
  const owner = useSelector(state => state?.owner);
  const dispatch = useDispatch();
  const title = props.screenName;
  const navigation = useNavigation();
  const popup = useSelector(state => state.popup);

  const Headings = [
    'Home',
    'Recents',
    'Favorites',
    'Shared',
    'Delete Files',
    'Created Projects',
  ];

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
      {title === 'Home' && (
        <View style={styles.adduserpopup}>
          <TouchableOpacity style={styles.verticaldots}>
            <Text
              onPress={() => dispatch(setPopup(!popup))}
              style={{
                alignSelf: 'center',
                fontSize: 25,
                marginBottom: 15,
                marginLeft: 5,
                marginRight: 5,
                color: 'black',
              }}>
              ...
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <ReactNativeModal
        style={styles.modal}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        onBackdropPress={() => setIsVisible(false)}
        isVisible={isvisible}>
        <View style={styles.modaldata}>
          <View
            style={{
              height: 170,
              width: '100%',
              flexDirection: 'row',
              backgroundColor: 'white',
            }}>
            <View
              style={{
                height: '100%',
                width: '40%',
                paddingTop: 10,
                paddingBottom: 10,
                padding: 10,
              }}>
              {console.log(owner)}
              {owner.image !== null ? (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}>
                  <Image
                    source={{
                      uri: owner.image,
                    }}
                    style={{height: '100%', width: '100%', borderRadius: 100}}
                  />
                </TouchableOpacity>
              ) : (
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}
                    style={{
                      backgroundColor: 'lightblue',
                      borderWidth: 1,
                      height: '100%',
                      width: '100%',
                      borderRadius: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 100,
                        paddingBottom: 20,
                      }}>
                      {owner.name[0]}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View
              style={{
                height: '100%',
                width: '60%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 25, color: 'black', fontWeight: '600'}}>
                {owner.name}
              </Text>
              <Text style={{fontSize: 20, marginTop: 20}}>
                {owner.permission}
              </Text>
            </View>
          </View>
          {Headings.map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={title === data && {backgroundColor: 'lightblue'}}
                onPress={() => clicked(data)}>
                <Text style={styles.button}>{data}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.logout}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.button}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default Modal;
