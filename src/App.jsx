import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Career from './components/Career'
import ContactUs from './components/ContactUs'
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage';
import { AuthProvider } from './contexts/authContext';


function App() {
  const [count, setCount] = useState(0)

  return (
    < AuthProvider >
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Homepage />} />

        </Routes>
      </Router>

      {/* <Hero />
      <AboutUs />
      <Career />
      <ContactUs />
      <Login /> */}
      <p className='text-4xl text-white text-justify justify-center items-center align-middle flex font-bold py-4'>Priyanshu</p>
    </AuthProvider >
  )
}

export default App
