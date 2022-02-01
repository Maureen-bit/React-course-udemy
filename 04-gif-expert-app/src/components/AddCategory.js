import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const changeText = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmitForm = (event) =>{
        /* Evitar comportamiento pot defecto del formulario de cambiar de ruta 
        ( de http://localhost:3000 a http://localhost:3000/?) y hacer post de la informacion del formulario  */
        event.preventDefault();
        if(inputValue.trim().length > 2){
        /* Se llama como un call back para tener como referencia el estado anterior, es decir el valor
        de categories en el useState */
        setCategories((categories) => [ inputValue, ...categories ]);
        /* Para que al dar enter limpie el input y quede vacio para escribir otra cosa */
        setInputValue('');
        console.log('Submit hecho!')
    }
    }

  return (
      <form onSubmit={(event) => onSubmitForm(event)} >
        <p>{inputValue}</p>
        <input 
            type="text"
            value={inputValue}
            onChange={ (event) => changeText(event)}
        />
    </form>
  )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
  };