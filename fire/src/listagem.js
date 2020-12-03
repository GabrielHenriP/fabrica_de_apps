import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Listagem = ({ data }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.text}>{data.nome}</Text>
            <Text>{data.cargo}</Text>
            <Text>----</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        marginBottom:5,
        padding:5,
        backgroundColor:'green',
    },
    text:{
        color:'#FFF',
        fontSize:17
    }
})