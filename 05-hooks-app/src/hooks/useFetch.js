import { useEffect, useRef, useState } from 'react';

export const useFetch = ( url ) => {
    /* Voy a guardar la referencia  de cuando se monta el componente, como se renderiza por primera vez
    entonces este valor será true*/
    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {    
      return () => {
          /* Este return se disparará cada vez que se desmonte el componente por eso cambiamos el valor de la
          referencia a false */
        isMounted.current = false;
      };
    }, []);
    
    useEffect(() => {
        setState({data: null, loading: true, error: null});
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            /* Usamos el valor de la referencia para ejecutar el setState cuando el componente
            esté montado y evitar el error de: 
            Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory 
            leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. */
            if (isMounted.current){
                /* Si está en true es porque el componente está montado */
                setState({
                    loading: false,
                    error: null,
                    data
                })
            } else {
                console.log("SetState no se llamó")
            }
        })
    }, [url]);

    return state;
};
