import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/index';
import { DefaultLayout } from './Layout/index';
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
    <Routes>
      {publicRoutes.map((route, index) => {
        const Layout = route.layout || DefaultLayout;
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={<Layout><Page/></Layout>} />
        )
      })}
    </Routes>
  )
}

export default App
