import React from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { authentication } from '../../firebase'

const Home = () => {
  const provider = new GoogleAuthProvider()

  const signInWithFirebase = () => {
    signInWithPopup(authentication, provider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res)
        const token = credential.accessToken
        const user = res.user
        console.log(token)
        console.log(user)
      }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log(errorCode, errorMessage, email, credential)
      })
  }

  return (
    <div>
      <div onClick={signInWithFirebase}>Sign In</div>
    </div>
  )
}

export default Home
