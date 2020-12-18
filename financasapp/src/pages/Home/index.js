import React, { useContext, useState } from 'react';
import { Button, Text, View } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import HeaderMenu from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';

import { Container, Background, Nome, Saldo, Title, List} from './styles'

export default Home = () => {

    const [historico, setHistorico] = useState([
        {key: '1', tipo: 'receita', valor: 1200},
        {key: '2', tipo: 'despesa', valor: 200},
        {key: '3', tipo: 'receita', valor: 40},
        {key: '4', tipo: 'despesa', valor: 89},
        {key: '5', tipo: 'receita', valor: 100},
        {key: '6', tipo: 'despesa', valor:44},
    ]);

    const { user, signOut } = useContext(AuthContext);

    return(
        <Background>
            <HeaderMenu/>
            <Container>
                <Nome>{user && user.name}</Nome>
                <Saldo>R$ 122</Saldo>
            </Container>

            <Title>Ultimas movimentações</Title>

            <List
            showsVerticalScrollIndicator={false}
            data={historico}
            keyExtractor={item => item.key}
            renderItem={ ({ item }) => (<HistoricoList data={item}/>) }
            />
            
        </Background>
    )
};