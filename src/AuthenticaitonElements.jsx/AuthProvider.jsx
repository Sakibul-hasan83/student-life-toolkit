import React, {  useEffect, useState } from 'react';
import AuthContext from './AuthContext';

import { onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import auth from './firebase.init';

const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
const [loader,setLoader]=useState(true)


// create new user 
const newUser =(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

//sign in user 
const login =(email,password)=>{

    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}

//logout 
const logout = ()=>{

    setLoader(true)
    return signOut(auth)
}

// stateChange 
useEffect(()=>{

    const unSubscribe = onAuthStateChanged(auth,(currentuser)=>{
        setUser(currentuser)
        console.log(currentuser)
        setLoader(false)
    })
    return ()=> unSubscribe();
},[])


    const authInfo={
user,
loader,
newUser,
login,
logout,


    }
  return (
    <AuthContext.Provider  value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
