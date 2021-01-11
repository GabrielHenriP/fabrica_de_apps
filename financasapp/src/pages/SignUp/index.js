import React, { useContext, useState } from 'react';
import { ActivityIndicator, Platform, Text, View } from 'react-native';

import { AuthContext } from '../../contexts/auth';


import { Background, Container, AreaInput, Logo, Input, SubmitButton, SubmitText } from '../SignIn/styles';

export default SignIn = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp, loadingAuth} = useContext(AuthContext);

    function handleSignUp(){
        signUp(email,password,nome)
    }
    
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
                    placeholder='Email'
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

                <SubmitButton onPress={handleSignUp}>
                    {loadingAuth ? (
                        <ActivityIndicator size={30} color="#fff" />
                    ) : (
                        <SubmitText>Acessar</SubmitText>
                    )
                    }
                </SubmitButton>

            </Container>
        </Background>
    )
};