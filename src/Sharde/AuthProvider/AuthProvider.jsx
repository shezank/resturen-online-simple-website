import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/Firebase.init';

export const AuthContext = createContext(null);

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

   useEffect(()=>{

       const unSubscribe = onAuthStateChanged(auth, (currenuser)=>{
           setUser(currenuser);
           setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
   },[])


    const info = {
        user,
        loading,
        createUser,
        login,
        googleLogin,
        logout,
    };


    return (
        <AuthContext.Provider value={info}>
            
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;