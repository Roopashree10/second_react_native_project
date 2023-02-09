import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reducer from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = reducer;
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
export const persistor = persistStore(store);
export default store;

// import {combineReducers, configureStore} from '@reduxjs/toolkit';
// import {persistReducer, persistStore} from 'redux-persist';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import asyncStorage from '../config/AsyncStorage';
// import appCommon from './reducers/appCommon';
// import appConfig from './reducers/appConfig';
// import budgetReducer from './reducers/budgetReducer';
// import overages from './reducers/overages';
// import projectsReducer from './reducers/projectsReducer';
// import tabReducer from './reducers/tabReducer';

// const persistConfig = {
//   key: 'root',
//   storage: asyncStorage,
//   stateReconciler: autoMergeLevel2,
//   blacklist: ['tab', 'appConfig'],
// };

// const appReducer = combineReducers({
//   appCommon: appCommon,
//   appConfig: appConfig,
//   tab: tabReducer,
//   projects: projectsReducer,
//   budget: budgetReducer,
//   overages: overages,
// });

// const rootReducer = (state, action) => {
//   if (action.type === 'appCommon/clearStore') {
//     asyncStorage
//       .removeItem('persist:root')
//       .then(res =>
//         console.log("asyncStorage.removeItem('persist:root') res:", res),
//       )
//       .catch(err =>
//         console.log("asyncStorage.removeItem('persist:root') err:", err),
//       );
//     state = {};
//   }
//   return appReducer(state, action);
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//       immutableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);
// export default store;
