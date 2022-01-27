import React, { useState } from "react";
import  PropTypes from 'prop-types';

const CounterApp = ( {value = 13} ) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1 );
        //  Si no tuvieramos acceso al counter podriamos cambiar el estado ejecuntando -> setCounter( ( value ) => value + 1 )
    };

    const handleSubstract = () => {
        setCounter(counter - 1 );
    };

    const handleReset = () => {
        setCounter(value);
    }


    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            {/* onClick={handleAdd() => No es correcto poner la referencia de la función con paréntesis dentro del 
            onclick, ya que esto se interpreta en React como ejecución de esta función en el primer renderizado y sin
            paréntesis significa que la función solamente se ejecutará al hacer click en el botón */}
            <button onClick={handleSubstract} >-1</button>
            <button onClick={handleReset} >Reset</button>
            <button onClick={handleAdd} >+1</button>
         </>   
    )
};

CounterApp.propTypes = {
    value: PropTypes.number
}
export default CounterApp;