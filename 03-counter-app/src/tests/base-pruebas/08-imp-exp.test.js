import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de héroes', () => {
  test('debe de retornar un héroe por id', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroesData = heroes.find( heroe => heroe.id === id);
    expect(heroe).toEqual(heroesData);
  });

  test('debe de retornar un undefined si héroe no existe', () => {
    const id = 13;
    const heroe = getHeroeById(id);
    /* Como undefined es un valor de tipo primitivo se puede usar toBe */
    expect(heroe).toBe(undefined);
  });

  test('Debe retornar un arreglo con los héroes de DC', () => {
    const owner = 'DC';
    const heroesDC = getHeroesByOwner(owner);
    const heroesDCData = heroes.filter( heroe => heroe.owner === owner);
    expect(heroesDC).toEqual(heroesDCData);
  });

  test('Debe retornar un arreglo con los héroes de Marvel', () => {
    const owner = 'Marvel';
    const heroesDC = getHeroesByOwner(owner);
    expect(heroesDC.length).toBe(2)
  });

  test('Debe retornar un arreglo vacío', () => {
    const owner = 'Otro';
    const heroesDC = getHeroesByOwner(owner);
    expect(heroesDC.length).toBe(0);
    expect(heroesDC).toEqual([]);
  });
  
});
