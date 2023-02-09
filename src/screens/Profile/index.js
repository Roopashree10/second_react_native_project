import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from '../../shared/Modal';
import styles from './styles';
import {setOwner} from '../../store/actions';
import Icon from '../../shared/Icon';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ProfileData = () => {
  const routes = useRoute();
  const owner = useSelector(state => state?.owner);
  const screenName = routes.name;
  const [imageuri, setImageUri] = useState(owner.image);
  const [name, setName] = useState(owner.name);
  const [email, setEmail] = useState(owner.email);
  const [password, setPassword] = useState(owner.password);
  const [successMsg, setSuccessMsg] = useState(false);
  const [openPictureSettings, setOpenPictureSettings] = useState(false);
  const dispatch = useDispatch();

  const openCamera = () => {
    const options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchCamera(options, response => {
      console.log('response =', response);
      if (response.didCancel) {
        console.log('calcelled');
      } else if (response.error) {
        console.log('error', response.error);
      } else if (response.customButton) {
        console.log('custom button: ', response.customButton);
      } else {
        console.log('success', response.assets[0].uri, response.base64);
        setImageUri(response.assets[0].uri);
      }
    });
    setOpenPictureSettings(false);
  };

  const openGallary = () => {
    const options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      console.log('response =', response);
      if (response.didCancel) {
        console.log('calcelled');
      } else if (response.error) {
        console.log('error', response.error);
      } else if (response.customButton) {
        console.log('custom button: ', response.customButton);
      } else {
        console.log('success', response.assets[0].uri, response.base64);
        setImageUri(response.assets[0].uri);
        setOpenPictureSettings(true);
      }
    });
    setOpenPictureSettings(false);
  };

  const saveIn = () => {
    const newUSerDetails = {
      name,
      password,
      email,
      image: imageuri,
      permission: owner.permission,
    };
    console.log(newUSerDetails);
    dispatch(setOwner(newUSerDetails));
    setSuccessMsg(true);
    //   setTimeout(() => {
    //     setSuccessMsg(false);
    //   }, 2000);
  };

  return (
    <>
      {console.log('owner', owner)}
      <Modal screenName={screenName} />
      {successMsg && (
        <View
          style={{
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            width: '50%',
            borderRadius: 100,
            borderWidth: 1,
            position: 'absolute',
            top: 60,
            right: 10,
          }}>
          <Text style={{color: 'white'}}>Updated Successfully</Text>
        </View>
      )}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderRadius: 35,
              height: '80%',
              width: '66%',
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: 'green',
              elevation: 10,
            }}>
            <View
              style={{
                height: 200,
                width: 200,
                paddingTop: 1,
                justifyContent: 'center',
              }}>
              {imageuri !== null ? (
                <>
                  <Image
                    source={{
                      uri: imageuri,
                    }}
                    style={{height: '100%', width: '100%', borderRadius: 100}}
                  />
                </>
              ) : (
                <View
                  style={{
                    backgroundColor: 'green',
                    borderRadius: 100,
                    borderWidth: 1,
                    alignItems: 'center',
                    paddingTop: 20,
                    height: '100%',
                  }}>
                  <Text style={{fontSize: 100}}>
                    {owner.name[0].toUpperCase()}
                  </Text>
                </View>
              )}
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  backgroundColor: 'white',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="pencil"
                  size={30}
                  onPress={() => setOpenPictureSettings(true)}
                />
              </View>
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text style={styles.label}>NAME</Text>
              <View style={styles.inputView}>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  style={styles.TextInput}
                  placeholder="Enter email address"
                />
              </View>
            </View>

            <View style={{width: '100%', alignItems: 'center'}}>
              <Text style={styles.label}>Email address</Text>
              <View style={styles.inputView}>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  style={styles.TextInput}
                  placeholder="Enter email address"
                />
              </View>
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputView}>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  style={styles.TextInput}
                  placeholder="Enter email address"
                />
              </View>
            </View>
            <View style={{width: '100%', paddingTop: 30}}>
              <TouchableOpacity
                onPress={saveIn}
                style={{
                  backgroundColor: '#44f806',
                  width: '70%',
                  height: 50,
                  borderRadius: 5,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'white',
                    fontSize: 22,
                    fontWeight: '500',
                  }}>
                  SAVE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {openPictureSettings && (
            <View
              style={{
                height: '20%',
                width: '100%',
                backgroundColor: 'lightblue',
                position: 'absolute',
                flexDirection: 'row',
                bottom: 0,
              }}>
              <View
                style={{
                  height: '100%',
                  width: '25%',
                  justifyContent: 'center',
                  marginLeft: '15%',
                  paddingBottom: '10%',
                }}>
                <Icon
                  size={70}
                  name="camera"
                  style={{alignSelf: 'center', color: 'black'}}
                  onPress={openCamera}
                />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '25%',
                  marginLeft: '15%',
                  justifyContent: 'center',
                  paddingBottom: '10%',
                }}>
                <Icon
                  size={70}
                  name="images"
                  style={{alignSelf: 'center', color: 'black'}}
                  onPress={openGallary}
                />
              </View>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default ProfileData;
