import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {
    /* UserContext: va a envolver todos los componentes que encuentre en AppRouter, es decir que, la información
    que se guarde en este context estará disponible para todos estos hijos.
    Lo que se encuentra en la propiedad value es lo que voy a compartir  */
    const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{user, setUser}}>
        <AppRouter />
    </UserContext.Provider>
  )
}
