import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SobreTab(){
    const navigation = useNavigation();

    return (
        <View>
            <Text>Sobre</Text>
            <Button title='Contato' onPress={() => navigation.navigate('Contato')} />
        </View>
    )
}