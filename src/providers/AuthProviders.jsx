import React, { createContext } from 'react';
import app from '../assets/firebase/firebase.config';
import {getAuth} from 'firebase/auth';


export const AuthContext = createContext();

const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const user = {
        displayName:'Shourav',
         photo:'https://media.licdn.com/dms/image/C4E03AQGTYvY1e7x3UA/profile-displayphoto-shrink_800_800/0/1638112904151?e=2147483647&v=beta&t=v9Hf-uGwvnl-wcxp2eyRcLFb7en1d6S9I3AEcuCDTv8'
        };

    const authInfo = {
        user,
        auth

    };


    return (
        <AuthContext.Provider value={authInfo}> 
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;