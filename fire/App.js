import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from './src/firebaseConnection';


export default App = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(value => {
      firebase.database().ref('usuarios').child(value.user.uid).set({
        nome: nome,

      })
      setEmail('')
      setNome('')
      setPassword('')
    })
    .catch( error => {
      alert('algo deu errado')
    })
    
  }

  return(
    <View style={styles.container} >

      <Text style={styles.text}>Nome</Text>
      <TextInput 
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(text) => setNome(text)}
      value={nome}
      />

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
      title="Cadastrar"
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