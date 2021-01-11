import React, { createContext, useEffect, useState } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { set } from 'date-fns/esm';


export const AuthContext = createContext({});

export default AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [loadingAuth, SetLoadingAuth] = useState(false);

    useEffect( () => {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user') 

            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false)
            }

            setLoading(false)
        };
        loadStorage();
    }, [])

    async function signIn(email,password){
        SetLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email,password)
            .then( async value => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).once('value')
                    .then( snapshot => {
                        let data = {
                            uid: uid,
                            name: snapshot.val().name ,
                            email: value.user.email
                        };
                        setUser(data)
                        storageUser(data)
                        SetLoadingAuth(false);
                    })
            })
            .catch( error => {
                alert(error.code)
                SetLoadingAuth(false)
            })
    }

    async function signUp(email, password, name){
        SetLoadingAuth(true);
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
                    storageUser(data)
                    SetLoadingAuth(false);
                })
            })
            .catch( error => {
                alert(error.code)
                SetLoadingAuth(false);
            })
    }

    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
    }

    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
            .then(() => {
                setUser(null)
            })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut, loading, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    );
};