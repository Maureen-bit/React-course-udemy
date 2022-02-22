import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

const FormWithCustomHook = () => {
    const [formValues, handleInputsChanges] = useForm({
        name: '',
        email: '',
        password: ''
    });

   const {name, email, password} = formValues;

   useEffect(() => {
    console.log(" Email cambió! ");
   }, [email]);

   const handleSubmitForm = (event) =>{
        event.preventDefault();
        console.log(formValues)
   }
   
  return (
      <form onSubmit={handleSubmitForm} >
        <h1>FormWithCustomHook</h1>
        <hr/>

        <div className='form-group'>
            <input 
                type='text'
                name='name'
                className='form-control'
                placeholder='Tu nombre'
                autoComplete='off'
                value={name}
                onChange={handleInputsChanges}
            />
        </div>
        <div className='form-group'>
            <input 
                type='text'
                name='email'
                className='form-control'
                placeholder='Tu email'
                autoComplete='off'
                value={email}
                onChange={handleInputsChanges}
            />
        </div>
        <div className='form-group'>
            <input 
                type='password'
                name='password'
                className='form-control'
                placeholder='Tu contraseña'
                value={password}
                onChange={handleInputsChanges}
            />
        </div>
        <button type='submit' className='btn btn-primary' > Guardar </button>
      </form>
  )
};

export default FormWithCustomHook;