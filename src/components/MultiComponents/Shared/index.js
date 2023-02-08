import React, {useEffect, useState} from 'react';
import Modal from '../../Modal';
import {useRoute} from '@react-navigation/native';
import Listdata from '../../CommonComponent';
import {sharedApi} from '../../../Services/Api';

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
