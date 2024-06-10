import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/index';
import { DefaultLayout } from './Layout/index';
import Layout from './Layout/LoginLayout/Layout';
import Login from './Pages/Login';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import ToastContainer from './Notifications/ToastContainer';
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
    <>
      <ToastContainer />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout2 = route.layout ? Layout : DefaultLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={<Layout2><Page /></Layout2>} />
          )
        })}
      </Routes>
    </>
  )
}

export default App
