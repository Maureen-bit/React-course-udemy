import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { CheckingAuth } from '../ui';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
 const { status } = useCheckAuth();

  if(status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <BrowserRouter>
        <Routes>
          {
            status === 'authenticated' ?
            <Route path="/*" element={<JournalScreen />} /> : 
            <Route path="/auth/*" element={<AuthRouter />}  />
          }
          {/*  /auth/* -> el * significa que va a navegar en las rutas descendientes que se encuentran en AuthRouter y 
          que no se va a hacer match con /auth exactamente sino solo con las rutas hijas*/}
          <Route path = "/*" element={<Navigate to="/auth/login" replace /> } />
        </Routes>
  </BrowserRouter>
  )
}
