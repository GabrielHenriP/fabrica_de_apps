import React, { useContext, useState } from 'react';
import { TouchableWithoutFeedback, SafeAreaView, Keyboard } from 'react-native';

import HeaderMenu from '../../components/Header';

import { Background, Input, SubmitButton, SubmitText} from './styles';
import Picker from '../../components/Picker';

export default New = () => {

    const [valor, SetValor] = useState('');
    const [tipo, setTipo] = useState('receita')

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

                    <Picker onChange={setTipo} tipo={tipo}/>

                    <SubmitButton>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>

                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
};