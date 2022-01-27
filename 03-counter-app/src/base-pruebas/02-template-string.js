const nombre   = 'Maureen';
const apellido = 'Parra';

const nombreCompleto = `${ nombre } ${ apellido }`;
console.log( nombreCompleto );

export function getSaludo(nombre = 'Candy') {
    return 'Hola ' + nombre;
}

/* los console deben ir en el archivo de pruebas 
console.log( `Este es un texto: ${ getSaludo( nombre ) } ` ); */