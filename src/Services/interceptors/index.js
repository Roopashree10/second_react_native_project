import axios from 'axios';
import store from '../../store/store';

export const privateApi = axios.create({
  baseURL: 'https://vxk5y6ogyb.execute-api.us-east-1.amazonaws.com/dev/',
});

export const publicApi = axios.create({
  baseURL: 'https://vxk5y6ogyb.execute-api.us-east-1.amazonaws.com/dev/',
});

publicApi.interceptors.request.use(config => {
  return config;
});

publicApi.interceptors.response.use(response => {
  return response;
});

privateApi.interceptors.request.use(config => {
  console.log(store.getState());
  const token = store.getState().token;
  config.headers.Authorization = 'Bearer ' + token;
  return config;
});

privateApi.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
});
