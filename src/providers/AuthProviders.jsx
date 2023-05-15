import React, { createContext } from 'react';
import app from '../assets/firebase/firebase.config';
import {getAuth} from 'firebase/auth';

const AuthContext = createContext();
const auth = getAuth(app)

const AuthProviders = () => {
    return (
        <div>
            
        </div>
    );
};

export default AuthProviders;