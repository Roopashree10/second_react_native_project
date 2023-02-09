import React, {useEffect, useState} from 'react';
import Modal from '../../shared/Modal';
import {useRoute} from '@react-navigation/native';
import Listdata from '../../shared/ListData';
import {sharedApi} from '../../services/api';

const Shared = () => {
  const [data, setData] = useState();
  const routes = useRoute();
  const screenName = routes.name;

  useEffect(() => {
    sharedApi()
      .then(response => {
        setData(response);
      })
      .catch(e => console.log(e));
  });

  return (
    <>
      <Modal screenName={screenName} />
      <Listdata screenName={screenName} data={data} />
    </>
  );
};

export default Shared;
