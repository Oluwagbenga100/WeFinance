import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import News from './component/News'
import Careers from './component/Careers'
import Aos from 'aos'


const App = () => {
  useEffect(()=>{
    Aos.init();
},[])
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/career' element={<Careers/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
    </>
  )
}

export default App
