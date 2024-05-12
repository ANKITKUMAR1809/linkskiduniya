import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About_Me } from './Pages/About_Me';
import { Navbar } from './Components/Navbar/Navbar';
import {Footer} from './Components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about_me' element={<About_Me/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
