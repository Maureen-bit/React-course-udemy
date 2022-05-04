import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const handleClick = () => {
    /* Cuando el context sufre una modificación notifica a todos los hijos sobre el cambio y hace que se 
    redibuje cada una de las partes afectadas */
    setUser({})
  }
  return (
    <div>
        <h1>AboutScreen</h1>
        <hr/>
        <pre>
            {JSON.stringify(user, null, 3)}
        </pre>
        <button className='btn btn-warning' 
        onClick={handleClick}
        > 
          Logout 
        </button>
    </div>
  )
}
