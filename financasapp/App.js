import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text, View } from 'react-native';
import firebase from './src/services/firebaseConnection';

import Routes from './src/routes';

export default App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='red'  />
      <Routes />
    </NavigationContainer>
  )
}