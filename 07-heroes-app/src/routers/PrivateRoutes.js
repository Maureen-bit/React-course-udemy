import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

export const PrivateRoutes = ({children}) => {
    /* children está haciendo referencia a todos los componentes hijos que se le están pasando a 
    PrivateRoutes */
    /* PrivateRoutes: este componente le permite ver el stack de rutas al usuario solo si está autenticado, de
    lo contrario siempre lo redirigirá a la pantalla Login */
    const { user } = useContext(AuthContext);
    /* Guardar la última ruta visitada por el usuario que estaba loggeado*/
    const { pathname, search } = useLocation();
    /* le concateno search para que se guarde también si el usuario llega a salir después de una 
    búsqueda */
    localStorage.setItem('lastPath', pathname + search);
    
    return user.logged ? children : <Navigate to='/login' />;
}
