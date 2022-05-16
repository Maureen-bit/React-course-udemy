import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoutes>
            <LoginScreen />
          </PublicRoutes>
        } />
       {/* Todas las rutas que no coincidan con login después del slash serán manejadas por DashBoardRoutes */}
        <Route path="/*" element={
          /*PrivateRoutes: es un componente que se crea para darle manejo a las rutas que puede ver el usuario
          solo de manera autenticada */
          <PrivateRoutes>
            <DashboardRoutes />
          </PrivateRoutes>
        } />
      </Routes>
    </BrowserRouter>
  )
}