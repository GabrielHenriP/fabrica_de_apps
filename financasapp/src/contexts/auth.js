import React, { createContext, useState } from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

export default AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    async function signUp(email, password, name){
        await firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(async value => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    saldo: 0,
                    name: name
                }).then( () => {
                    let data = {
                        uid: uid,
                        name: name,
                        email:value.user.email
                    }
                    setUser(data)
                })
            })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};