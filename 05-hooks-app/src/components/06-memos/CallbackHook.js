import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    /* Tiene dos principales usos:
    1. Cuando se pasa o envía una función a un componente hijo y en especial si el componente hijo
    está memorizado y si no se manda con el useCallBack siempre se va a llamar el hijo porque
    siempre generará una versión en cada renderizado del componente padre. Evita crear referencias de funciones
    que ya tenemos, es decir nuevos espacios en memoria de la misma función.
    2. Cuando un existe un useEffect y una de las dependencias es una función, esta debe ser 
    de tipo callback para que cada vez que cambien las dependencias del useCallback se llame el cambio e
    en el useEffect también y no cada vez que se renderice el componente por primera vez como
    lo hace el llamado a una función normal como dependencia en un useEffect ya que estas se
    ejecutan también la primera vez que se monta el componente
    */

    const [counter, setCounter] = useState(10);

    /* Función normal
     const increment = () => {
        setCounter(counter + 1)
    }; */

    const increment = useCallback(
      (num) => {
          /* para evitar usar la dependencia uso la función que recibe como parametro el setState */
        setCounter( c => c + num)
      },
      /* Acá no puedo poner a counter como dependencia porque no resolvería el problema de estar
      creando la función cada vez que ejecuto el increment */
      [setCounter]
    )
    
    /*
    caso de uso dos
    useEffect( () => {

    }, [increment])
    */

 return (
    <>
        <h1>use Callback Hook: {counter} </h1>
        <hr />
        <ShowIncrement increment={increment} />

    </>
  )
}
