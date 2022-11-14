/** Thunks: acciones a las que les puedo hacer dispatch pero se encargan de ejecutar tareas asincronas */

import { authenticationWithEmailAndPassword, logOutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "../../store/auth"

export const checkingAuthentication = () => {
 return async(dispatch) => {
    dispatch(checkingCredentials())
 }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if (!result.success) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailAndPassword = ({displayName, email, password}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await registerUserWithEmailPassword({displayName, email, password});
        const { ok, uid, photoURL, errorMessage } = result;
    
        if(!ok) {
            return dispatch( logout({errorMessage}) );
        }
        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

export const startAuthenticationWithEmailAndPassword = (email, password) => {
    return async(dispatch) => {
        /** Para que cambie al estado -> checking */
       dispatch(checkingCredentials());
       const { ok, result, errorMessage } = await authenticationWithEmailAndPassword({email, password})
       if(!ok) {
           return dispatch( logout({errorMessage}) );
       }
       dispatch(login(result));
    }
   }

export const startLogOut = () => {
    return async (dispatch) => {
        await logOutFirebase();
        dispatch(logout({}))
    }
}