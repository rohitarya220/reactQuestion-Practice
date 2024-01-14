import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from '../ten/Home'
import Help from '../ten/Help'
import About from '../ten/About'

export const Ten = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to='/' > Home</Link>
        <Link to='/help' > Help</Link>
        <Link to='/about' > About</Link>
      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/help' element={<Help />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}


export default Ten