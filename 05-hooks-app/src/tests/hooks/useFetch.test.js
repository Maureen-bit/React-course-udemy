import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from "../../hooks/useFetch";

describe('useFetch hook tests', () => { 
    test('should return default values', () => {
        const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        /* como es sincrono se devuelve el estado inicial ya que no se alcanza a ejecutar la petición */
        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
      })

      test('should return response requested from URL', async() => { 
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate();
        const { data, loading, error } = result.current;
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
       })

       test('should handle the error', async() => { 
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apid/users?page=2'));
        await waitForNextUpdate();
        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe("No se pudo cargar la información!");
       })    
    });