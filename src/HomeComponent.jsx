import React from 'react'
import {GoogleAuthProvider,getAuth,signInWithPopup} from "firebase/auth"
import { app } from './firebase-config'
import { useState } from 'react'
const HomeComponent = () => {
   const [errorMessage,setErrorMesagge]=useState("")
function handleGoogleSignIn () {
    const provider=new GoogleAuthProvider()
    const auth=getAuth(app)
    signInWithPopup(auth,provider).then(UserCredentials=>{
        console.log(`Bienvenido ${UserCredentials.user.displayName}`);
        console.log(`Bienvenido ${UserCredentials.user.photoURL}`);
    }).catch(error=>{setErrorMesagge(error.message)})
}
  return (
    <>
        <div>HomeComponent</div>
        <button onClick={handleGoogleSignIn}>Sign-In with Google</button>
        {errorMessage && <p style={{color:"red"}}>{errorMessage}</p> }
    </>
  )
}

 export default HomeComponent