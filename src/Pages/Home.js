import React from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { authentication } from '../firebase'

const Home = () => {
  const provider = new GoogleAuthProvider()

  const handleSignIn = () => {
    signInWithPopup(authentication, provider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res)
        const token = credential.accessToken
        const user = res.user
        localStorage.setItem('token', token)
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
    <div className='h-screen w-full flex justify-center items-center'>
      <div
        onClick={handleSignIn}
        className='flex justify-center items-center rounded font-sans p-0 font-medium text-lg cursor-pointer border-2 border-googleBlue'
      >
        <div className='flex h-full justify-center items-center'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
            alt='google-Icon'
            className='mx-2'
          />
        </div>
        <div className='bg-googleBlue text-white h-full rounded-r py-2 px-6'>Sign in with Google</div>
      </div>
    </div>
  )
}

export default Home
