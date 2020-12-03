import React from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export default function Contato(){
    
  const navigation = useNavigation();

  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}} >

      <Button 
      title="voltar"
      onPress={() => navigation.goBack()}
      />

    <Button 
      title="home"
      onPress={() => navigation.dispatch(StackActions.popToTop)}
      />

    </View>
  );
}