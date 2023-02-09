/**
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import Login from './src/screens/Login/index';
import DeleteFiles from './src/screens/DeletedFiles';
import Favorites from './src/screens/Favorites';
import Home from './src/screens/Home';
import Recent from './src/screens/Recents';
import Shared from './src/screens/Shared';
import store from './src/store/store';
import {persistor} from './src/store/store';
import CreatedProjects from './src/screens/CreatedProjects';
import {PersistGate} from 'redux-persist/integration/react';
import ProfileData from './src/screens/Profile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Afterwrap />
      </PersistGate>
    </Provider>
  );
};

const Afterwrap = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="api" component={Api} /> */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Favorites" component={Favorites} />
          <Stack.Screen name="Shared" component={Shared} />
          <Stack.Screen name="Recents" component={Recent} />
          <Stack.Screen name="Delete Files" component={DeleteFiles} />
          <Stack.Screen name="Created Projects" component={CreatedProjects} />
          <Stack.Screen name="Profile" component={ProfileData} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
AppRegistry.registerComponent(appName, () => App);
