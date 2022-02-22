import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

const SimpleForm = () => {
    /* Los hooks no se pueden usar de manera condicional */
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;
    /* Cuando no pongo array vacío ni array con argumentos, el useEffect va a volverse a ejecutar cada vez que cambie cualquier cosa,
    por ejemplo, el value del input */
    useEffect(()=>{
        console.log("Cambió!")
    }, []);

    /* Se recomienda crear un useEffect para escuchar cambios específicos en el state, objetos, aplicación. No hacer uno para todos*/
    useEffect(()=>{
        console.log("Cambió el formState!")
    }, [formState]);

    const handleInputChange = ({target}) => {
    console.log("🚀 ~ file: SimpleForm.js ~ line 17 ~ handleInputChange ~ event", target)
    console.log("🚀 ~ file: SimpleForm.js ~ line 17 ~ handleInputChange ~ event.target.name", target.name)
    console.log("🚀 ~ file: SimpleForm.js ~ line 17 ~ handleInputChange ~ event.target.value", target.value)
    setFormState({
        ...formState,
        /* hacer referencia de valores mediante clave 
        target.name -> nombre de la propiedad que venga en el objeto (name o email)
        target.value -> valor para cada input*/
        [ target.name ] : target.value
    });
    }

  return (
      <>
        <h1>useEffect</h1>
        <hr/>

        <div className='form-group'>
            <input 
                type='text'
                name='name'
                className='form-control'
                placeholder='Tu nombre'
                autoComplete='off'
                value={name}
                onChange={handleInputChange}
            />
            <input 
                type='email'
                name='email'
                className='form-control'
                placeholder='Tu email'
                autoComplete='off'
                value={email}
                onChange={handleInputChange}
            />
        </div>
        { (name === "Maureen") && <Message />  }
      </>
  )
};

export default SimpleForm;