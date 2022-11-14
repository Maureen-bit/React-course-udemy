import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startAuthenticationWithEmailAndPassword, startGoogleSignIn } from './thunks';

export const LoginScreen = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: 'maureen@gmail.com',
    password: 123456
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({email, password})
    dispatch( startAuthenticationWithEmailAndPassword(email, password) );
  }

  const onGoogleSignIn = () => {
    console.log('ON GOOGLE SIGN IN')
    dispatch( startGoogleSignIn() );
  }


  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form onSubmit={onSubmit}>
        <input 
          type='text'
          placeholder='email'
          name='email'
          className='auth__input'
          autoComplete='off'
          onChange={onInputChange}
        />
        <input 
          type='password'
          placeholder='password'
          name='password'
          className='auth__input'
          onChange={onInputChange}
        />

        <button 
         type='submit'
         className='btn btn-primary btn-block'
         disabled={isAuthenticating}
        >
          Login
        </button>
        {errorMessage && errorMessage}
        <div className='auth__social-networks'>
          <p>Login with social network</p>
          <button 
          className='btn btn-primary btn-block'
          onClick={onGoogleSignIn}
          disabled={isAuthenticating}
          >
            Google
          </button>
        </div>

        <Link 
          to='/auth/register'
          className='link'
        >  
        Create new account
        </Link>
      </form>
    </>
  )
}
