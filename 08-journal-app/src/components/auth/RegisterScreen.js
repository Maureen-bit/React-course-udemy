import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmailAndPassword } from './thunks';

export const RegisterScreen = () => {

const dispatch = useDispatch();
const [ formSubmitted, setFormSubmitted ] = useState(false);
/** useSelector: Obtener estado de auth desde redux. */
const { status, errorMessage } = useSelector(state => state.auth);
const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

 const formData = {
  email: '',
  password: '',
  confirmPassword: '',
  displayName: ''
 }

 const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener un @' ],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras' ],
  confirmPassword:  [ (value) => value.length >= 6, 'El confirmación de password debe de tener más de 6 letras y ser igual al campo password' ],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio' ]
 }

  const { email, password, confirmPassword, displayName, onInputChange, formState, isFormValid,
    passwordValid, displayNameValid, emailValid, confirmPasswordValid } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if(!isFormValid) return;
    dispatch(startCreatingUserWithEmailAndPassword(formState));
  }


  return (
    <>
    <h3 className='auth__title'>Register</h3>
    <form onSubmit={onSubmit}>
      <input 
        type='text'
        placeholder='name'
        name='displayName'
        className='auth__input'
        autoComplete='off'
        value={displayName}
        onChange={onInputChange}
      />
      { displayNameValid && formSubmitted && displayNameValid }
      <input 
        type='text'
        placeholder='email'
        name='email'
        className='auth__input'
        autoComplete='off'
        value={email}
        onChange={onInputChange}
      />
      { emailValid && formSubmitted && emailValid }
      <input 
        type='password'
        placeholder='password'
        name='password'
        className='auth__input'
        value={password}
        onChange={onInputChange}
      />
      { passwordValid && formSubmitted && passwordValid }
      <input 
        type='password'
        placeholder='confirm your password'
        name='confirmPassword'
        className='auth__input'
        value={confirmPassword}
        onChange={onInputChange}
      />
      {confirmPasswordValid && formSubmitted && confirmPasswordValid}

      {errorMessage && errorMessage}

      <button 
       type='submit'
       className='btn btn-primary btn-block  mb-5'
       disabled={!isFormValid || isCheckingAuthentication}
      >
        Login
      </button>

      <Link
        to='/auth/login'
        className='link'
      >  
      Already registered?
      </Link>
    </form>
  </>
  )
}
