import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text, View } from 'react-native';
import AuthProvider from './src/contexts/auth';
import firebase from './src/services/firebaseConnection';

import Routes from './src/routes';

console.disableYellowBox=true

export default App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='red'  />
        <Routes />
        </AuthProvider>
    </NavigationContainer>
  )
}