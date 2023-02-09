import {useRoute} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import Listdata from '../../../';
import Modal from '../../shared/Modal';

const DeleteFiles = () => {
  const deleted = useSelector(state => state.isDeleted);
  const routes = useRoute();
  const screenName = routes.name;
  return (
    <>
      <Modal screenName={screenName} />
      <Listdata screenName={screenName} data={deleted} />
    </>
  );
};

export default DeleteFiles;
