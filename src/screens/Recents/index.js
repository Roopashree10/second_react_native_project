import React from 'react';
import {useSelector} from 'react-redux';
import Modal from '../../shared/Modal';
import {useRoute} from '@react-navigation/native';
import Listdata from '../../shared/ListData';

const Recent = () => {
  const data = useSelector(state => state?.recent);
  const routes = useRoute();
  const screenName = routes.name;

  return (
    <>
      <Modal screenName={screenName} />
      <Listdata screenName={screenName} data={data} />
    </>
  );
};

export default Recent;
