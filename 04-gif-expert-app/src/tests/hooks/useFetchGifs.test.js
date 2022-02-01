import { useFetchGifts } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('pruebas unitarias en el Custom hook useFetchGifs', () => {
  test('Debe retornar el estado inicial', async () => {
    const {result, waitForNextUpdate } = renderHook( () => useFetchGifts('The Simpsons') );
    /* result.current valor actual que tiene el custom hook */
    const { data, loading } = result.current;
    /* Ponemos waitForNextUpdate en esta prueba para que el componente no se desmonte y alcance a
    cambiar de estado para la prueba de abajo */
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });
  test('Debe de retornar un arreglo de imágenes y el loading en false', async () => {
    /* waitForNextUpdate: es una función que nos permite evaluar la actualización asíncrona del estado. 
    Ponemos un async porque  waitForNextUpdate retorna una promesa*/
    const {result, waitForNextUpdate } = renderHook( () => useFetchGifts('The Simpsons') );
    await waitForNextUpdate();
    /* result.current valor actual que tiene el custom hook */
    const { data, loading } = result.current;
    expect(data.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
  });
});
