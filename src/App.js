import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Landing from './Pages/Landing'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/landing' exact element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
