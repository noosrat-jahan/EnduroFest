import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext()
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createNewUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }  


    const LoginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }  

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const signoutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }
  

    const authInfo = {
        user,
        setUser,
        loading,
        createNewUser,
        signoutUser,
        googleSignIn,
        LoginUser
    }

    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=> UnSubscribe();
    },[])

    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
)
};

export default AuthProvider;