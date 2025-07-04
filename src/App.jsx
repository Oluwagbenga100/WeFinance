import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Aos from 'aos'
import Home from './component/Home'
import View from './component/view.jsx'
import Contact from './component/Contact.jsx'

const App = () => {
  useEffect(()=>{
    Aos.init();
},[])
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/view' element={<View/>}/> */}
        {/* <Route path='/contact' element={<Contact/>}/> */}
      </Routes>
    </>
  )
}

export default App
