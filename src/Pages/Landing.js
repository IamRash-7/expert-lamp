import React from 'react'
import { signOut } from 'firebase/auth'
import { authentication } from '../firebase'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Landing = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const isLoggedIn = token !== null && token !== undefined

  const handleSignOut = () => {
    signOut(authentication).then(() => {
      localStorage.clear()
      navigate('/')
      toast.success('Successfully logged out!')
    }).catch((error) => {
      console.log(error)
      toast.error('There was an error in logging out')
    })
  }

  return (
      isLoggedIn
      ? (<div className='h-screen w-full flex justify-center items-center'>
        <div
          onClick={handleSignOut}
          className='flex justify-center items-center rounded font-sans p-0 font-medium text-lg cursor-pointer border-2 border-googleBlue'
        >
          <div className='bg-googleBlue text-white h-full rounded-r py-2 px-6'>Logout</div>
        </div>
      </div>)
      : (<Navigate replace to='/' />)
  )
}

export default Landing