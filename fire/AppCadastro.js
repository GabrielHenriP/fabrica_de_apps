import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from './src/firebaseConnection';


export default App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(value => {
      alert(`Usuario criado ${value.user.email}`)
    })
    .catch(error => {
      if(error.code === 'auth/weak-password'){
        alert('Sua senha deve ter pelo menos 6 caracteres')
      }
      if(error.code === 'auth/invalid-email'){
        alert('Email inválido')
      } 
      
    })

    setEmail('')
    setPassword('')
  }

  return(
    <View style={styles.container} >
      <Text style={styles.text}>Email</Text>
      <TextInput 
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(text) => setEmail(text)}
      value={email}
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput 
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(text) => setPassword(text)}
      value={password}
      />

      <Button
      title="cadastrar"
      onPress={cadastrar}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:10
  },
  text:{
    fontSize:20
  },
  input:{
    marginBottom:20,
    padding:10,
    borderWidth:2,
    borderColor:'#121212'
  }
})