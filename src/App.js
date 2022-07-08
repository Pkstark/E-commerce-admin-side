import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admindashboard from './AadminPage/Admindashboard'
import AdminLogin from './AadminPage/AdminLogin'
import UserDetails from './AadminPage/UserDetails'
import Addusers from './AadminPage/Addusers';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLogin/>}/>
          <Route path='/admindashboard/:id' element = {<Admindashboard/>}/>
          <Route path='/userDetails/:id' element = {<UserDetails/>}/>
          <Route path='/addusers/:id' element={<Addusers/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App