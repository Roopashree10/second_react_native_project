import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Modal from '../../shared/Modal';
import {useRoute} from '@react-navigation/native';
import {projectsApi} from '../../services/api';
import Listdata from '../../shared/ListData';

const Home = () => {
  const routes = useRoute();
  const screenName = routes.name;
  const data = useSelector(state => state?.projects);

  useEffect(() => {
    projectsApi()
      .then(response => {
        console.log(response);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <Modal screenName={screenName} />
      <Listdata screenName={screenName} data={data} />
    </>
  );
};

export default Home;
