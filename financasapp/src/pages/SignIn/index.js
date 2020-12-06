import React, { useContext, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import { Background, Container, AreaInput, Logo, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';

export default SignIn = () => {
    
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleLogin(){
        return
    }

    return(
        <Background>
            <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
            >
                <Logo source={require('../../assets/Logo.png')}/>

                <AreaInput>
                    <Input 
                    placeholder='Password'
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
                <SubmitButton onPress={handleLogin}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <Link onPress={ () => navigation.navigate('SignUp') }>
                    <LinkText>Criar uma conta</LinkText>
                </Link>

            </Container>
        </Background>
    )
};