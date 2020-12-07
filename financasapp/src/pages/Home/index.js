import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default Home = () => {

    const { user, signOut } = useContext(AuthContext);

    return(
        <View>
            <Text>Home</Text>
            <Text>{user && user.name}</Text>
            <Text>{user && user.email}</Text>
            <Button 
            title='Deslogar' 
            onPress={signOut}
            />
            
        </View>
    )
};