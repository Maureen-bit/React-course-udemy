import React, { useState } from 'react';
import './counter.css'

export const CounterApp = () => {
    const [ state , setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    /* Deestructuro las propiedades del state y extraigo solo las que voy a usar */
    const { counter1, counter2 } = state;
    
  return (
   <>
   <h1>  counter 1 {counter1} </h1>
   <h1>  counter 1 {counter2} </h1>
   <hr />

   <button 
        onClick={() => setState({ 
            /* Como el único estado que quiero cambiar es el counter1, utilizo el operador spread(...) para dejar
            los otros estados con su valor actual y que no desaparezcan */
            ...state,
            counter1: counter1 + 1
        })}
        className='btn btn-primary'>
    +1
   </button>
  </>)
};
