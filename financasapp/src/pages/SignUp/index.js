import React, { useContext, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';


import { Background, Container, AreaInput, Logo, Input, SubmitButton, SubmitText } from '../SignIn/styles';

export default SignIn = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user } = useContext(AuthContext);
    console.log(user.nome)
    console.log(user.uid)
    return(
        <Background>
            <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
            >

                <AreaInput>
                    <Input 
                    placeholder='Nome'
                    autpCorrect={false}
                    autoCapitalize='none'
                    value={nome}
                    onChangeText={text => setNome(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input 
                    placeholder='Senha'
                    autpCorrect={false}
                    autoCapitalize='none'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input 
                    placeholder='Senha'
                    autpCorrect={false}
                    autoCapitalize='none'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    />
                </AreaInput>

                <SubmitButton>
                    <SubmitText>Cadastrarr</SubmitText>
                </SubmitButton>

            </Container>
        </Background>
    )
};