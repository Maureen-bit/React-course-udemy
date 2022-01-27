// importar react ayuda a solucionar el error de: "Jsx must be in a react scope"
import React from 'react';
import  PropTypes from 'prop-types';

const PrimeraApp = ( { saludo, subtitulo } ) => {
    const datos = {
        nombre: "Maureen",
        edad: 23
    }

    return (   
        <>
        {/* Como react no deja imprimir objetos directamente porque no es vàlido como hijo, entonces usamos 
        JSON.stringify para convertirlo en string y luego en los argumentos ponemos un espacio de 3 para que lo 
        formatee, dentro de la etiqueta pre */}
        <pre>{ JSON.stringify( datos, null, 3 ) }</pre>
        <h1>{saludo}</h1>
        <h2>{subtitulo}</h2>
        <p>Esta es la primera aplicación del curso</p>
        </>
    )
};

/* Esto se realiza para que la propiedad saludo sea obligatoria y con un valor de tipo string,
de lo contrario saldrá un error o warning en consola */
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

/* Este se utiliza cuando quiera poner un valor de alguna propiedad por defecto sin necesidad de esperarla */
PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
}
export default PrimeraApp;