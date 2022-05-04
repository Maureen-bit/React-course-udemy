import React, {useContext} from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
  /* Obtener el valor de nuestro useContext creado para guardar datos del usuario */
  const { user } = useContext(UserContext);
  return (
    <div>
        <h1>HomeScreen</h1>
        <hr/>
        <pre>
            {JSON.stringify(user, null, 3)}
        </pre>
    </div>
  )
}
