import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from './src/firebaseConnection';
import Listagem from './src/listagem';

export default App = () => {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cargo, setCargo] = useState('');
  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(true)

  // estudo sobre dados do firebase
  useEffect(() => {
    // listener - fica olhando toda hr verificando o DB
    async function dados(){
      // PEGAR DADOS DO FIREBASE
      /*await firebase.database().ref('nome').on('value', (snapshot) => {
        setNome(snapshot.val())
      })*/

      /*await firebase.database().ref('nome').once('value', (snapshot) => {
        setNome(snapshot.val())
      })*/

      /*await firebase.database().ref('usurarios/1').on('value', (snapshot) => {
        setNome(snapshot.val().nome)
        setIdade(snapshot.val().idade)
      })*/

      // CRIAR UM NÓ
      //await firebase.database().ref('tipo').set('vendedor')
      /*await firebase.database().ref('usurarios').child(3).set({
        idade:32,
        nome: 'Pinto'
      })/*
      

      // REMOVER NÓ
      //await firebase.database().ref('users').remove()
      
      // UPDATE
      /*await firebase.database().ref('usurarios').child(3).update({
        nome: 'aaaaah'
      })*/



    }

    dados();
  }, [])

  useEffect(() => {
    async function dados() {
      await firebase.database().ref('usurarios').on('value', (snapshot) => {
        setUsuarios([])
;
        snapshot.forEach((childItem) => {
          let data = {
            key: childItem.key,
            nome: childItem.val().nome,
            cargo: childItem.val().cargo
          }

          setUsuarios(oldArray => [...oldArray, data].reverse())
        })
        setLoading(false)
      })
    }
    dados()
  }, [])

  async function cadastrar(){
    if(nome !== '' & cargo !== ''){
      let users = await firebase.database().ref('usurarios');
      let keys = users.push().key

      users.child(keys).set({
        nome:nome,
        cargo:cargo
      })
      alert('cadastrado com sucesso')
      setNome('')
      setCargo('')
    }
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

      <Text style={styles.text}>Cargo</Text>
      <TextInput 
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(text) => setCargo(text)}
      value={cargo}
      />

    <Button
    title="novo funcionario"
    onPress={cadastrar}
    
    />

    {loading ? 
    (
      <ActivityIndicator style={{marginTop:50}} color='red' size={45} />
    ):
    (
      <FlatList
      style={{marginTop:20}}
      data={usuarios}
      keyExtractor={item => item.key}
      renderItem={({item}) => ( <Listagem data={item} /> )}
      />
    )
    }

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