/** Aqui estarán todos los proveedores de autenticación */

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider =  new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        /** obtener token y otra información 
        * const credentials = GoogleAuthProvider.credentialFromResult(result);
        * console.log(credentials)
        */
        /** obtener toda la información del usuario, información de autenticación, metadata, token, en general retorna
         * más información que credentials.
         */
        const { displayName, email, photoURL, uid } = result.user;
        console.log({ displayName, email, photoURL, uid })
        return {
            success: true,
            /** información del usuario */
            displayName, 
            email,
            photoURL,
            uid
        }
        
    } catch (error) {
        console.log(error)

        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            success: false,
            errorCode,
            errorMessage
        }

    }
}


export const registerUserWithEmailPassword = async ({ displayName, email, password } ) => {
    try {
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        await updateProfile(FirebaseAuth.currentUser, { displayName });
        return { result: result.user, ok: true }
    } catch (error) {
        return { ok: false, errorMessage: error.message}
    }
};

export const authenticationWithEmailAndPassword = async ({email, password}) => {
    try {
        const result = await signInWithEmailAndPassword( FirebaseAuth, email, password)
        return { result: result.user, ok: true}
    } catch (error) {
        return { ok: false, errorMessage: error.message}
    }
}

export const logOutFirebase = async () => {
    return await FirebaseAuth.signOut();
}