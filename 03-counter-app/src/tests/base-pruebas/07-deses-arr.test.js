import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas en desestructutación', () => {
    test('Debe de retornar un string y un número', () => {
        /* Forma uno */
        const array = retornaArreglo();
        expect(array).toEqual(['ABC', 123]);

        const [letras, numeros] = retornaArreglo();
        
        /* Forma dos */
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    });
    
})