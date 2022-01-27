import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe retornar un objeto', () =>{
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        /* Se usa toEqual ya que evalúa cada propiedad del objeto y no debemos usar toBe porque este compara
        el espacio en memoria ocupado por los objetos, es decir, {} === {} y eso no es lo que se busca*/
        expect(user).toEqual(userTest);
    });

    test('getUsuarioActivo debe recibir un argumento y retornar un objeto', () =>{
        const nombre = 'Maureen'
        const userTest = {
            uid: 'ABC567',
            username: nombre
        };

        const activeUser = getUsuarioActivo(nombre);
        expect(activeUser).toEqual(userTest);
    });

})