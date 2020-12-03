import React, { useEffect, useMemo, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App(){
  const [name, setName] = useState('')
  const letrasNome = useMemo(() => {}, [])
  console.log(letrasNome)
  const nomeInput = useRef(null)

  useEffect(()=>{

    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if(nomeStorage){
        setName(nomeStorage)
      }else{
        setName('sem nome')
      }
    }

    getStorage();

  }, [])

  useEffect(() => {

    async function saveStorage(){
      await AsyncStorage.setItem('nomes', name)
    }

    saveStorage();
  }, [name])

  function novoNome(){
    nomeInput.current.focus()
  }

  return (
    <View style={{flex:1, alignItems:"center"}}>
      <TextInput
        onChangeText={(text) => setName(text)}
        ref={nomeInput}
      />
      
      <Text>Olá {name}</Text>
      <Text>numero de letras:  {letrasNome}</Text>

      <TouchableOpacity onPress={novoNome}>
        <Text>Novo nome</Text>
      </TouchableOpacity>

    </View>
  )

};