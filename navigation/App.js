import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/pages/HomeTab';
import Sobre from './src/pages/SobreTab';
import Contato from './src/pages/ContatoTab';
import CustomDrawer from './src/components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function App(){
  return (
    <NavigationContainer>
        <Drawer.Navigator
        drawerContent={CustomDrawer}
        >

        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Sobre' component={Sobre} />
        <Drawer.Screen name='Contato' component={Contato} />

        </Drawer.Navigator>
    </NavigationContainer>
  )
}