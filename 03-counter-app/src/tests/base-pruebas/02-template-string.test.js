import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas 02-template-string.js', ()=> {
    test('getSaludo debe retornar hola maureen', () => {
        const nombre='Maureen';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola '+ nombre)
    });
    test('getSaludo debe retornar hola Candy si no hay argumento', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Candy');
    });
})