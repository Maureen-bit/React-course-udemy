import React from 'react';
import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
  return (
    <div className='auth__main'>
      <div className='auth__box-container'>
        <Routes>
            {/* recordar que estas rutas son -> auth/login ya que auth es la ruta padre */}
            <Route path="/login" element={<LoginScreen />}  />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path = "*" element={<Navigate to="login" replace /> } />
       </Routes>
      </div>
   </div>
  )
}
