import React, { useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import api from './src/services/api';

export default function App(){
  const [cep, setCep] = useState('')
  const [dadosApi, setDadosApi] = useState(null)

  const inputRef = useRef(null)

  function limpar(){
    setCep('');
    setDadosApi(null)
    inputRef.current.focus()
  }

  async function buscar(){
    if(cep == ''){
      alert('digite um cep valido')
      return;
    }
    

    try{
      const response = await api.get(`/${cep}/json`)
      Keyboard.dismiss()
      setDadosApi(response.data)
    }catch(error){
      console.error(error)
    }
    

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:"center"}}>

        <Text style={styles.text}>Digite o cep desejado</Text>
        <TextInput 
          style={styles.input}
          placeholder='Ex: 6732998'
          value={cep}
          onChangeText={(text) => setCep(text)}
          keyboardType='numeric'
          ref={inputRef}
        />

      </View>

      <View style={styles.viewBtn}>

        <TouchableOpacity style={[styles.btnBuscar, {backgroundColor:'blue'}]} onPress={buscar}>
          <Text style={styles.btnBuscarText} >Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnBuscar, {backgroundColor:'red'}]}>
          <Text style={styles.btnBuscarText} onPress={limpar} >Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerResultado} >
        { dadosApi &&
          <View style={styles.resultado}>
            <Text style={styles.itemText}>CEP: {dadosApi.cep}</Text>
            <Text style={styles.itemText}>Logradouro: {dadosApi.logradouro}</Text>
            <Text style={styles.itemText}>Bairro: {dadosApi.bairro}</Text>
            <Text style={styles.itemText}>Cidade: {dadosApi.localidade}</Text>
            <Text style={styles.itemText}>Estado: {dadosApi.uf}</Text>
        </View>
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  text:{
    marginTop:25,
    marginBottom:15,
    fontSize:25,
    fontWeight:'bold'
  },
  input:{
    backgroundColor:'#FFF',
    borderColor:'#DDD',
    borderWidth:1,
    borderRadius:5,
    width:'90%',
    padding:10,
    fontSize:18
  },
  viewBtn:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-around",
    marginTop:15
  },
  btnBuscar:{
    height:50,
    justifyContent:"center",
    alignItems:"center",
    padding:15,
    borderRadius:5,
    
  },
  btnBuscarText:{
    fontSize:20,
    color:'white'
  },
  containerResultado:{
    flex:1,
    alignItems:"center"
  },
  resultado:{
    width:'90%',
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  itemText:{
    fontSize:22,
    marginBottom:10,
    borderBottomWidth:.3,
    borderBottomColor:'black'
  }

})