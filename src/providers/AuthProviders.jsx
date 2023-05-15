import React, { createContext, useState } from 'react';
import app from '../assets/firebase/firebase.config';
import {getAuth} from 'firebase/auth';


export const AuthContext = createContext();

const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authInfo = {
        user,
        loading
        

    };


    return (
        <AuthContext.Provider value={authInfo}> 
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;