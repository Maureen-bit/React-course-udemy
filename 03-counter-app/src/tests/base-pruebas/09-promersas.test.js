import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
  test('debe retornar un héroe async', ( done ) => {
      /* done sirve para decirle a jest cuando debe terminar la prueba, 
    sirve para indicar que ya se realizó el proceso */
      const id = 1;
      getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        })
  });

    test('debe de obtener un error si el héroe por Id no existe', ( done ) => {
        const id = 13;
        getHeroeByIdAsync(id)
        .catch(error => {
            // eslint-disable-next-line jest/no-conditional-expect
            expect( error ).toBe('No se pudo encontrar el héroe');
            done();
        })
    });
  
});
