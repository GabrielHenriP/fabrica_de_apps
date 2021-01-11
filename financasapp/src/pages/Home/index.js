import React, { useContext, useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns';

import { AuthContext } from '../../contexts/auth';

import HeaderMenu from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';

import { Container, Background, Nome, Saldo, Title, List} from './styles'

export default Home = () => {

    const [historico, setHistorico] = useState([]);
    const [saldo, setSaldo] = useState(0);

    const { user } = useContext(AuthContext);
    const uid = user && user.uid;

    useEffect( () => {
        async function loadList(){
            await firebase.database().ref('users').child(uid).on('value', snapshot => {
                setSaldo(snapshot.val().saldo);
            })

            await firebase.database().ref('historico').child(uid).orderByChild('date').equalTo(format(new Date, 'dd/MM/yy')).limitToLast(10).on('value', snapshot => {
                setHistorico([]);
                snapshot.forEach( childItem => {
                    let list = {
                        key: childItem.key,
                        tipo: childItem.val().tipo,
                        valor: childItem.val().valor
                    }

                    setHistorico(oldArray => [...oldArray, list].reverse())
                })
            })
        };
        loadList();
    }, [])

    return(
        <Background>
            <HeaderMenu/>
            <Container>
                <Nome>{user && user.name}</Nome>
                <Saldo>{saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')/* regex a cada 3 numero vai ter um ponto */ }</Saldo>
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