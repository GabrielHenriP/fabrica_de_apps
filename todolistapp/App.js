import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import firebase from './src/firebaseConfig';
import TaskList from './src/TaskList'

console.disableYellowBox=true

export default App = () => {
  const inputRef = useRef(null);
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [edit, setEdit] = useState('')

  useEffect(() => {

    async function loadTasks(){
      await firebase.database().ref('tarefas').on('value', snapshot => {
       
        setTasks([]);

        snapshot.forEach( childItem => {
          let data = {
            key: childItem.key,
            nome: childItem.val().nome
          }

          setTasks(oldarray => [...oldarray, data])
        })

      })
      
    }

    loadTasks();
  }, [])

  async function handleAdd(){
    if(newTask !== ''){

      if(edit !== ''){
        await firebase.database().ref('tarefas').child(edit).update({
          nome: newTask,
        })
        Keyboard.dismiss()
        setNewTask('');
        setEdit('');
        return
      }

      let tarefas = await firebase.database().ref('tarefas')
      let chave = tarefas.push().key

      tarefas.child(chave).set({
        nome:newTask
      })

      Keyboard.dismiss();
      setNewTask('')

    }
  };

  async function handleDelete(key){
    await firebase.database().ref('tarefas').child(key).remove()
  }

  async function handleEdit(data){
    setNewTask(data.nome)
    setEdit(data.key)
    inputRef.current.focus()
  }

  function cancelEdit(){
    setEdit('')
    Keyboard.dismiss();
    setNewTask('')
  }

   return (
     <View style={styles.container}>

     {edit.length > 0 && (
       <View style={{flexDirection:"row", marginBottom:10}}>
        <Text style={{color:'red', marginRight:10}}>Você está editando uma tarefa. Cancelar:</Text>
        <TouchableOpacity onPress={cancelEdit}>
            <Icon name='x-circle' size={23} color='red' />
        </TouchableOpacity>
      </View>
     )}

      <View style={styles.containerTask}>

        <TextInput
          style={styles.input}
          placeholder={'O que fará hoje?'}
          underlineColorAndroid="transparent"
          onChangeText={text => setNewTask(text)}
          value={newTask}
          ref={inputRef}
        />

        <TouchableOpacity onPress={handleAdd} style={styles.buttonAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>

      <FlatList
      data={tasks}
      keyExtractor={item => item.key}
      renderItem={({ item }) => (
        <TaskList data={item} deleteItem={handleDelete} editItem={handleEdit}/>
      )}
      />

     </View>
   )
};

const styles = StyleSheet.create({
  container:{
    borderWidth:2,
    flex:1,
    marginTop:25,
    marginLeft:10,
    marginRight:10
  },
  containerTask:{
    flexDirection:"row"
  },
  input:{
    flex:1,
    fontSize:18,
    marginBottom:10,
    padding:10,
    borderWidth:1,
    borderColor:'#121212',
    height:40
  },
  buttonAdd:{
    justifyContent:"center",
    alignItems:"center",
    height:40,
    backgroundColor:'#909692',
    paddingLeft:14,
    paddingRight:14,
    marginLeft:6
  },
  buttonText:{
    fontSize:22,
    color:'#FFF'
  }
});