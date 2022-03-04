import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const Home = () => {
  const provider = new GoogleAuthProvider()
  const auth = getAuth()

  const signInWithFirebase = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res)
        const token = credential.accessToken
        const user = res.user
        console.log(token)
        console.log(user)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

      })
  }

  return (
    <div>
      <div onClick={signInWithFirebase}>Sign In</div>
    </div>
  )
}

export default Home