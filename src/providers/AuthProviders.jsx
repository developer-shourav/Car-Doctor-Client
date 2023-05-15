import React, { createContext, useEffect, useState } from 'react';
import app from '../assets/firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth';


export const AuthContext = createContext();

const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    useEffect( () => {
       const unsubscribe =  onAuthStateChanged( auth, currentUser => {
        setUser(currentUser)
        console.log('currentUser', currentUser);
        setLoading(false)
       });

       return () => {
        return unsubscribe ;
       }


    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        

    };


    return (
        <AuthContext.Provider value={authInfo}> 
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;