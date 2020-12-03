import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export default function Sobre({ route }){
    
    const navigation = useNavigation();

    /*navigation.setOptions({
      title:`Sobre ${route.params?.nome}`
    })*/

  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}} >
      <Text style={{marginBottom: 30}}>Bem vindo a tela sobre</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
      <Button 
      title="tela home"
      onPress={() => navigation.goBack()}
      />

      <Button 
      title="Contato"
      onPress={() => navigation.navigate('Contato')}
      />
    </View>
  );
}