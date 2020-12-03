import React from 'react';
import { Button,Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();

    function irSobre(){
        navigation.navigate('Sobre', {
            nome:'gabriel h p',
            email:'bla@email.com'
        });
    }

  return (
    
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text style={{marginBottom: 30}}>Bem vindo a tela home</Text>
        <Button 
        title="tela sobre"
        onPress={irSobre}
        />
        </View>
    
  );
}
