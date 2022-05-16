import { useEffect, useReducer } from "react"
import { AuthContext } from "./auth/authContext"
import { authReducer } from "./auth/authReducer"
import { AppRouter } from "./routers/AppRouter"

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false }
} 

export const HeroesApp = () => {
  /* para poner el context provider se debe buscar el archivo más alto de la aplicación,
  es decir, de donde se desprendan todos los componentes y que todos estos puedan
  compartir la información. Que el contexto esté disponible a lo largo de la APP */

  const [ user, dispatch ] = useReducer( authReducer, {}, init );

  useEffect(() => {
    if( !user ) return;
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  

  return (
    <AuthContext.Provider value={{
      user, 
      dispatch
    }}>
      <AppRouter />
    </ AuthContext.Provider >
  )
}
