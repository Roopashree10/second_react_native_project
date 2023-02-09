import React from 'react';
import {useSelector} from 'react-redux';
import Modal from '../../shared/Modal';
import {useRoute} from '@react-navigation/native';
import Listdata from '../../shared/ListData';

const CreatedProjects = () => {
  const routes = useRoute();
  const screenName = routes.name;
  const data = useSelector(state => state?.projectsApi);

  return (
    <>
      <Modal screenName={screenName} />
      {console.log(data)}
      <Listdata screenName={screenName} data={data} />
    </>
  );
};

export default CreatedProjects;
