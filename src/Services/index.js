import {useNavigation} from '@react-navigation/native';
import {getDefaultMiddleware} from '@reduxjs/toolkit';
// import axios from 'axios';
import React from 'react';
// import {useDispatch} from 'react-redux';
import Login1 from '../components/Login';
import {login} from './Api';
// import {Constants} from '../components/Constants';
// import {
//   SetData,
//   setDeleted,
//   setFavorite,
//   setOwner,
//   setRecent,
//   setShared,
//   setToken,
//   setUser,
// } from '../components/Redux/actions';
// import Interceptors from '../components/Interceptors';

const Api = () => {
  // const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = (email, password) => {
    //   const loginUrl = Constants.LOGIN;
    //   const projectsUrl = Constants.MYPROJECTS;
    //   const sharedUrl = Constants.SHARED;
    //   const recentUrl = Constants.RECENT;
    //   const createUrl = Constants.CREATEPROJECT;
    //   const home = () => {
    //     Interceptors.post(loginUrl, {
    //       email: email,
    //       password: password,
    //     })
    //       .then(resp => {
    //         dispatch(setOwner(resp.data.userDetails.firstName));
    //         Interceptors.get(projectsUrl, {
    //           headers: {
    //             Authorization: `Bearer ${resp.data.token}`,
    //           },
    //         }).then(response => {
    //           console.log(response);
    //           const isFavorite = [];
    //           const isDelete = [];
    //           dispatch(SetData(response?.data?.myProjects));
    //           response?.data?.myProjects?.forEach(element => {
    //             console.log(element);
    //             if (element.isFavourite === 1) {
    //               isFavorite.push(element);
    //             }
    //             if (element.isDeleted === 1) {
    //               isDelete.push(element);
    //             }
    //           });
    //           dispatch(setFavorite(isFavorite));
    //           dispatch(setDeleted(isDelete));
    //           dispatch(
    //             setUser({
    //               image:
    //                 'https://tse1.mm.bing.net/th?id=OIP.Gf7SGiuU991AQP0JduUX2AHaIl&pid=Api&rs=1&c=1&qlt=95&w=104&h=121',
    //               name: 'Ganesh P',
    //               email: 'ganesh@gmail.com',
    //               permission: 'owner',
    //             }),
    //           );
    //         });
    //         dispatch(setToken(resp.data.token));
    //       })
    //       .catch(e => console.log(e));
    //     axios
    //       .post(loginUrl, {
    //         email: email,
    //         password: password,
    //       })
    //       .then(resp => {
    //         Interceptors.get(recentUrl, {
    //           headers: {
    //             Authorization: `Bearer ${resp.data.token}`,
    //           },
    //         })
    //           .then(response => {
    //             dispatch(setRecent(response?.data?.myProjects));
    //           })
    //           .catch(e => console.log(e));
    //       });
    //     axios
    //       .post(loginUrl, {
    //         email: email,
    //         password: password,
    //       })
    //       .then(resp => {
    //         Interceptors.get(sharedUrl, {
    //           headers: {
    //             Authorization: `Bearer ${resp.data.token}`,
    //           },
    //         }).then(response => {
    //           dispatch(setShared(response?.data?.myProjects));
    //           const isFavorite = [];
    //           response?.data?.myProjects?.forEach(element => {
    //             if (element.isFavourite === 1) {
    //               isFavorite.push(element);
    //             }
    //           });
    //           dispatch(setFavorite(isFavorite));
    //         });
    //       })
    //       .catch(e => console.log(e));
    //   };
    console.log('email', email, password);
    navigation.navigate('Home');
    login({email, password});
  };
  return <Login1 loginapi={data} />;
};

export default Api;
