import React, { Component } from 'react';
import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data,
            modalVisible: false,
        };

        this.mostraLikes = this.mostraLikes.bind(this)
        this.like = this.like.bind(this)
        this.mudarLike = this.mudarLike.bind(this)
        this.entrar = this.entrar.bind(this)

    }

    entrar(){
        this.setState({modalVisible: true})
    }

    mudarLike(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

    like(){
        let feed = this.state.feed;

        if(feed.likeada === true){
            this.setState({
                feed:{
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            })
        }else {
            this.setState({
                feed:{
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            })
        }
    }
s
    mostraLikes(likers){
        let feed = this.state.feed;
        if(feed.likers <= 0)
            return;

        return(
            <Text style={styles.numeroLikes}>
                {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
        )
    }

    render() {
        return(
            <View style={styles.areaFeed}>

                <View style={styles.viewPerfil}>
                    <Image 
                        source={{uri: this.state.feed.imgperfil}}
                        style={styles.fotoPerfil}
                    />

                    <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
                </View>

                <Image 
                    style={styles.fotoPublicacao}
                    source={{uri: this.state.feed.imgPublicacao}}
                />

                <View style={styles.areaLike} >
                    <TouchableOpacity onPress={this.like}>
                        <Image 
                            source={this.mudarLike(this.state.feed.likeada)}
                            style={styles.iconeLike}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../img/send.png')}
                            style={styles.iconeLike}
                        />
                    </TouchableOpacity>
                </View>

                {this.mostraLikes(this.state.feed.likers)}

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>
                        {this.state.feed.nome}
                    </Text>
                    <Text style={styles.descRodape}>
                        {this.state.feed.descricao}
                    </Text>
                </View>

                <Button title="Entrar" onPress={this.entrar}>
                </Button>

                <Modal transparent={true} animationType="fade" visible={this.state.modalVisible}>
                    <View style={{backgroundColor:'#292929', flex:1, opacity: .96}}>
                        <Text style={{color: '#FFF', fontSize: 28}}>Seja Bem Vindo</Text>
                        <Button title="Sair" onPress={()=>this.setState({modalVisible:false})} />
                    </View>
                </Modal>

            </View>
        )
    }
};

const styles = StyleSheet.create({
    areaFeed:{

    },
    nomeUsuario:{
        fontSize:22,
        textAlign:"left",
        color:'#000',
        marginLeft: 4
    },
    fotoPerfil:{
        width:50,
        height:50,
        borderRadius: 25,
    },
    fotoPublicacao:{
        flex:1,
        height: 400,
        alignItems:"center"
    },
    viewPerfil:{
        flexDirection:"row",
        flex:1,
        alignItems:"center",
        padding: 8,
    },
    areaLike:{
        flexDirection:"row",
        padding:5
    },
    iconeLike:{
        width:33,
        height:33,
        marginRight: 10
    },
    viewRodape:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20
    },
    descRodape:{
        paddingLeft:5,
        fontSize:15,
        color:'#000',
    },
    nomeRodape:{
        fontSize:18,
        fontWeight:'bold',
        paddingLeft:5,
        color:'#000'
    },
    numeroLikes:{
        fontWeight: "bold",
        marginLeft: 10
    }

})