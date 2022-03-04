import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <ToastContainer
          theme='colored'
          toastClassName='font-sans text-sm'
          position='top-right'
          autoClose={3000}
        />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/landing' exact element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
