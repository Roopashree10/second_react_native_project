import React from 'react';
import {useSelector} from 'react-redux';
import Modal from '../../shared/Modal';
import {useRoute} from '@react-navigation/native';
import Listdata from '../../shared/ListData';

const Favorites = () => {
  const favourites = useSelector(state => state.isFavorites);
  const routes = useRoute();
  const screenName = routes.name;

  return (
    <>
      <Modal screenName={screenName} />
      <Listdata screenName={screenName} data={favourites} />
    </>
  );
};

export default Favorites;
