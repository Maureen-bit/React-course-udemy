import React, { memo } from 'react'

export const ShowIncrement = memo(( {increment} ) => {
    /* Este problema de generación de funciones no se puede arreglar solamente con React.memo ya que 
    cada vez que se ejecuta renderiza el componente padre, este vuelve a generar la función de
    increment, es decir genera un nuevo espacio en memoria, es decir una nueva función entonces
    por eso siempre se vuelve a generar!, por eso se aplica useCallback en el componente padre*/
    console.log("¡Me volví a generar!");
  return (
    <button
        className='btn btn-primary'
        onClick={() => {
            increment(3);
        }}
    >
        Incrementar +
    </button>
  )
})
