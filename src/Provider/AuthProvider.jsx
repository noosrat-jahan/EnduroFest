import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import axios from 'axios';

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

    const updateUserProfile = (updatedData)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, updatedData)
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
        updateUserProfile,
        LoginUser
    }

    

    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log('state captured', currentUser?.email);

            if(currentUser?.email){
                const user = {email: currentUser?.email}

                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
                    withCredentials: true
                })
                .then(res => {
                    console.log('login',res.data);
                    setLoading(false)
                })
            }

            else{
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log('logout', res.data);
                    setLoading(false)
                })
            }
            
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