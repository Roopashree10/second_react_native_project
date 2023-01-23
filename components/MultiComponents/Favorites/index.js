import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import Modal from '../../Modal';
import styles from './styles';

const Favorites = () => {
  const favourites = useSelector(state => state.isFavorites);
  const routes = useRoute();
  const screenName = routes.name;

  const iteration = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.data}>
          <Text style={{color: 'black', fontSize: 17}}>{item.name}</Text>
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
      <FlatList
        data={favourites}
        renderItem={iteration}
        keyExtractor={item => item?.id?.toString()}
      />
    </>
  );
};

export default Favorites;
