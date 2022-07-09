import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admindashboard from './AadminPage/Admindashboard'
import AdminLogin from './AadminPage/AdminLogin'
import UserDetails from './AadminPage/UserDetails'
import Addusers from './AadminPage/Addusers';
import Catagroy from './AadminPage/Catagroy'
import Mobile from './AadminPage/Mobile'
import Shoes from './AadminPage/Shoes'
import Shirts from './AadminPage/Shirts'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLogin/>}/>
          <Route path='/admindashboard/:id' element = {<Admindashboard/>}/>
          <Route path='/userDetails/:id' element = {<UserDetails/>}/>
          <Route path='/addusers/:id' element={<Addusers/>}/>
          <Route path='/catagroy/:id' element={<Catagroy/>}/>
          <Route path='/mobile/:id' element={<Mobile/>}/>
          <Route path='/shoes/:id' element={<Shoes/>}/>
          <Route path='/Shirts/:id' element={<Shirts/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App