import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import Modal from '../../Modal';
import axios from 'axios';
import {setShared} from '../../Redux/actions';
import {useRoute} from '@react-navigation/native';

const Shared = () => {
  const data = useSelector(state => state?.shared);
  const dispatch = useDispatch();
  const routes = useRoute();
  const screenName = routes.name;
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const url =
      'https://vxk5y6ogyb.execute-api.us-east-1.amazonaws.com/dev/login';
    const home = async () => {
      await axios
        .post(url, {
          email: 'ganesh@gmail.com',
          password: 'Rogue#123',
        })
        .then(async resp => {
          await axios
            .get(
              'https://vxk5y6ogyb.execute-api.us-east-1.amazonaws.com/dev/getMyProjects?type=SHARED',
              {
                headers: {
                  Authorization: `Bearer ${resp.data.token}`,
                },
              },
            )
            .then(response => {
              dispatch(setShared(response.data.myProjects));
              setIsLoading(false);
            })
            .catch(e => console.log(e));
        });
    };
    home();
  }, []);

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
      </View>
      {isloading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={iteration}
          keyExtractor={item => item?.id?.toString()}
        />
      )}
    </>
  );
};

export default Shared;
