import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { publicRoutes } from './routes/index';
import {DefaultLayout} from './Layout/index';
function App() {
  return (
    // <>
    //   <Routes>
    //     <Route path='/' element={<Dashboard/>}/>
    //     <Route path='/login' element={<Login/>}/>
    //     <Route path='/signup' element={<Signup/>}/>
    //     <Route path='/forgotpassword' element={<Forgotpassword/>}/>
    //     <Route path='/forgotpassword2' element={<Forgotpassword2/>}/>
    //     <Route path='/forgotpassword3' element={<Forgotpassword3/>}/>
    //   </Routes>
    // </>
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout || DefaultLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={<Layout><route.component /></Layout>} />

          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
