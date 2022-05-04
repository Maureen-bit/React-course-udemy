import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <NavBar />
            <div className='container'>
              <Routes>
                  <Route exact='true' path='/' element={<HomeScreen />} />
                  <Route exact='true' path='/about' element={<AboutScreen />} />
                  <Route exact='true' path='/login' element={<LoginScreen />} />
                  <Route path="*" element={<HomeScreen />} />
              </Routes>
              </div>
        </div>
    </Router>
  )
};
