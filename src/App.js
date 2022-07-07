import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admindashboard from './AadminPage/Admindashboard'
import AdminLogin from './AadminPage/AdminLogin'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLogin/>}/>
          <Route path='/admindashboard/:id' element = {<Admindashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App