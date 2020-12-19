import React, { useContext, useState } from 'react';
import { TouchableWithoutFeedback, SafeAreaView, Keyboard, Alert } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';

import HeaderMenu from '../../components/Header';

import { Background, Input, SubmitButton, SubmitText} from './styles';
import Picker from '../../components/Picker';

export default New = () => {

    const { user:usuario } = useContext(AuthContext);

    const navigation = useNavigation();

    const [valor, SetValor] = useState('');
    const [tipo, setTipo] = useState('receita')

    function handleSubmit(){
        Keyboard.dismiss()
        if(isNaN(parseFloat(valor)) || tipo == null){
            alert('Preencha todos os campos')
            return;
        }   
        Alert.alert(
            'Confirmando dados',
            `Tipo ${tipo} - valor: ${parseFloat(valor)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                }
            ]
        )
    }

    async function handleAdd(){
        let uid = usuario.uid;

        let key = await firebase.database().ref('historico').child(uid).push().key;

        await firebase.database().ref('historico').child(uid).child(key).set({
            tipo:tipo,
            valor:parseFloat(valor),
            date: format(new Date(), 'dd/MM/yy')
        })
        //atualizar o nosso saldo
        let user = firebase.database().ref('users').child(uid);
        await user.once('value').then( snapshot => {
            let saldo = parseFloat(snapshot.val().saldo)

            tipo === 'despesa' ? saldo -= parseFloat(valor): saldo += parseFloat(valor)

            user.child('saldo').set(saldo)

        })
        SetValor('')
        Keyboard.dismiss()
        navigation.navigate('Home')
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <HeaderMenu/>

                <SafeAreaView style={{alignItems:'center'}}>
                    <Input
                    placeholder='Valor desejado'
                    keyboardType='numeric'
                    returnKeyType='next'
                    onSubmitEditing={ () => Keyboard.dismiss()}
                    value={valor}
                    onChangeText={ text => SetValor(text)}
                    />

                    <Picker onChange={setTipo} select={valor}/>

                    <SubmitButton onPress={handleSubmit}>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>

                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
};