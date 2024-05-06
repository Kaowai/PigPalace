import React from 'react'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Forgotpassword from './Screens/Forgotpassword'
import Forgotpassword3 from './Screens/Forgotpassword3'
import Forgotpassword2 from './Screens/Forgotpassword2'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Screens/Dashboard'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgotpassword' element={<Forgotpassword/>}/>
        <Route path='/forgotpassword2' element={<Forgotpassword2/>}/>
        <Route path='/forgotpassword3' element={<Forgotpassword3/>}/>
      </Routes>
    </>
  )
}

export default App
