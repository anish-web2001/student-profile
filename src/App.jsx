import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Dashbord from './pages/Dashbord'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/dashboard' element={<Dashbord/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
