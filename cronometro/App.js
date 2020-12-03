import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      numero: 0,
      botao: 'Vai',
      ultimo: null,
    }
    
    this.timer = null;

    this.Vai = this.Vai.bind(this)
    this.Limpar = this.Limpar.bind(this)
  }

  Vai(){
    if( this.timer != null ){
      clearInterval(this.timer)
      this.timer = null
      this.setState({botao: 'Vai'})
    }else{
      this.timer = setInterval(()=>{
        this.setState({numero: this.state.numero + 0.1})
      }, 100)
      this.setState({botao: 'Parar'})
    }
  }

  Limpar(){
    if( this.timer != null ){
      clearInterval(this.timer)
      this.timer = null
    }

    this.setState({ultimo: this.state.numero ,numero: 0, botao: 'Vai'})
  }

  render(){
    return(
      <View style={styles.container} >
        <Image
          source={require('./src/cronometro.png')}
        />
        <Text style={styles.timer} >{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea} >

          <TouchableOpacity style={styles.botao} onPress={this.Vai} >
    <Text style={styles.btnTexto} >{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.Limpar} >
            <Text style={styles.btnTexto} >Limpar</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.ultimaArea} >
          <Text style={styles.textocorrida} >
           { this.state.ultimo ? `Último tempo: ${this.state.ultimo.toFixed(1)}s` : ''}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#bf607f'
  },
  timer: {
    marginTop:-160,
    color:'#FFF',
    fontSize: 65,
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height:40
  },
  botao:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    height:40,
    backgroundColor:'#FFF',
    margin:17,
    borderRadius: 8
  },
  btnTexto:{
    fontSize:20,
  },
  ultimaArea:{
    marginTop: 40
  },
  textocorrida:{
    fontSize:25,
    fontStyle:"italic",
    color:'#FFF'
  }
})

export default App;