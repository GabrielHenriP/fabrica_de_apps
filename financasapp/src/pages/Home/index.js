import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import HeaderMenu from '../../components/Header';

import { Container, Background, Nome, Saldo, Title} from './styles'

export default Home = () => {

    const { user, signOut } = useContext(AuthContext);

    return(
        <Background>
            <HeaderMenu/>
            <Container>
                <Nome>gab</Nome>
                <Saldo>R$ 122</Saldo>
            </Container>

            <Title>Ultimas movimentações</Title>
            
        </Background>
    )
};