import React, { useEffect, useState } from 'react';

export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const { x, y } = coords;

    useEffect(() => {
      console.log('Componente montado');
      const mouseMove = ( event ) => {
        const coords = { x: event.x , y: event.y };
        setCoords(coords)
        console.log(coords)
      }
      window.addEventListener('mousemove', mouseMove);

      return () => {
          /* esta parte es un cleanup que se usa para que algunas funcionalidades no consuman tanta memoria,
          cancela la suscripción de la función */
        console.log('Componente desmontado');
        window.removeEventListener('mousemove', mouseMove);
      };
    }, []);
    
  return (
      <>
        <h3>Eres muy inteligente y exitosa! </h3>
        <p> x: { x } y: { y } </p>
      </>
  )
};
