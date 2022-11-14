import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    /** Cuando requerimos volver a renderizar por cambios en el estado debemos usar un hook que maneje el estado */
    const [ formValidation, setFormValidation ] = useState( {} );

    useEffect(() => {
        createValidators();
    }, [formState]);

    const isFormValid = useMemo(() =>{
        for (const formValue of Object.keys(formValidation)) {
            if( formValidation[formValue] !== null) {
                return false;
            }
        }
        return true;
    }, [formValidation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues = {};
        for (const formField of Object.keys(formValidations)) {
            /**  Devuelve cada arreglo de cada propiedad (email, password, displayName)*/
            const [ funcionValidacion, errorMessage = 'Este valor es requerido' ] = formValidations[formField];
            /** creación de variable dinámica dentro del arreglo para cada propiedad (email, password, displayName), 
             * según resultado de la función, si es válido no devuelve nada porque no hay error pero si hay error devuelve el mensaje
             * de error.
             */
            formCheckedValues[`${ formField}Valid`] = funcionValidacion(formState[formField]) ? null : errorMessage;
        }
        setFormValidation(formCheckedValues);
    }



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}