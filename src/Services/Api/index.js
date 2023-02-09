import {Constants} from '../../common/Constants';
import {privateApi} from '../interceptors';
import {publicApi} from '../interceptors';
import store from '../../store/store';
import {SetData, setOwner, setToken, setUser} from '../../store/actions';
const loginUrl = Constants.LOGIN;
const projectsUrl = Constants.MYPROJECTS;
const sharedUrl = Constants.SHARED;
const recentUrl = Constants.RECENT;
const createUrl = Constants.CREATEPROJECT;

export const loginApi = requestBody => {
  return new Promise((res, rej) => {
    publicApi
      .post(loginUrl, requestBody)
      .then(response => {
        console.log(response);
        const obj = {
          image: response.data.userDetails.profileImage,
          name:
            response.data.userDetails.firstName +
            ' ' +
            response.data.userDetails.lastName,
          email: response.data.userDetails.email,
          password: 'Srinu@1234',
          permission: 'OWNER', // use all caps
        };
        store.dispatch(setOwner(obj));
        store.dispatch(setUser(obj));
        store.dispatch(setToken(response.data.token));
        console.log('login', response);
        res(response.data.token);
      })
      .catch(error => rej(error));
  });
};

export const projectsApi = () => {
  return new Promise((res, rej) => {
    privateApi
      .get(projectsUrl)
      .then(response => {
        console.log('home', response);
        store.dispatch(SetData(response.data.myProjects));
        res(response.data.myProjects);
      })
      .catch(error => rej(error));
  });
};

export const sharedApi = () => {
  return new Promise((res, rej) => {
    privateApi
      .get(sharedUrl)
      .then(response => {
        res(response.data.myProjects);
      })
      .catch(error => rej(error));
  });
};

export const recentApi = () => {
  return new Promise((res, rej) => {
    privateApi
      .get(recentUrl)
      .then(response => {
        res(response.data.myProjects);
      })
      .catch(error => rej(error));
  });
};

export const createdProjectsApi = requestBody => {
  return new Promise((res, rej) => {
    privateApi
      .post(createUrl, {
        nodes: requestBody,
      })
      .then(response => {
        console.log(response);
        res(response);
      })
      .catch(error => rej(error));
  });
};
