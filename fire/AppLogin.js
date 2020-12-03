import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from './src/firebaseConnection';


export default App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  async function logar(){
    await firebase.auth().signInWithEmailAndPassword(email,password)
    .then(value => {
      alert(`Bem vindo ${value.user.email}`)
    })
    .catch(error => {
      alert('ops algo deu errado');
      return;
      
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
      title="login"
      onPress={logar}
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