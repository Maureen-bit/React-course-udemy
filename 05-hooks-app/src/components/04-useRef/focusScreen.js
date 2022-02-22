import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {
    /* Se usa para guardar una referencia mutable, se puede cambiar la variable a donde apunta 
    el useRef sin necesidad de disparar un renderización de React */
    const inputReference = useRef();

    const handleClick = () => {
        inputReference.current.select();
        console.log(inputReference);
    }

  return (
      <>
        <h1> Focus Screen </h1>
        <hr />

        <input 
            className='form-control'
            placeholder='Tu nombre'
            ref={inputReference}
        />

        <button 
            className='btn btn-outline-primary mt-5'
            onClick={handleClick}
        >
            Focus
        </button>
      </>
  )
};
